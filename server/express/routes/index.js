const express = require('express');
const { messageHandler } = require('../handlers/simple');
const { getContext, setContext } = require('../handlers/context');
const { handleChat } = require('../handlers/chat');

const routes = express();

routes.get('/welcome', (req, res) => res.json({ message: 'Welcome to the API v1' }));

routes.post('/chat', handleChat);
routes.get('/context', getContext);
routes.post('/context', setContext);

module.exports = routes;