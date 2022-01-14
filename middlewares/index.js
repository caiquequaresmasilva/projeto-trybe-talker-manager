const getTalkers = require('./getTalkers');
const getTalkerById = require('./getTalkerById');
const loginValidation = require('./loginValidation');
const generateToken = require('./generateToken');
const createTalker = require('./createTalker');
const validateToken = require('./validateToken');

module.exports = {
  getTalkers,
  getTalkerById,
  postLoginMiddleare: [loginValidation, generateToken],
  postTalkerMiddleware: [validateToken, createTalker],
};