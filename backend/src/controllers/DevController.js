const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
  async index (req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (dev) {
      return response.json(dev);
    }

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    };

    dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    console.log('create new dev')
    console.log(dev);

    // Novo dev a 10km com a tech pesquisada
    const sendSocketMessageTo = findConnections(
      {
        latitude,
        longitude
      },
      techsArray
    );

    console.log('socket.io new-dev');
    console.log(sendSocketMessageTo);

    sendMessage(sendSocketMessageTo, 'new-dev', dev);

    return response.json(dev);
  }
};
