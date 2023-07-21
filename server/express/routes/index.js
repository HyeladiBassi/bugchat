const express = require('express');
const { getContext, setContext } = require('../handlers/context');
const { handleChat } = require('../handlers/chat');

const routes = express();

routes.get('/welcome', (req, res) => res.json({ message: 'Welcome to the API v1' }));
routes.get('/health', (req, res) => res.json({ status: 'UP' }));
routes.post('/chat', handleChat);
routes.get('/context', getContext);
routes.post('/context', setContext);

module.exports = routes;