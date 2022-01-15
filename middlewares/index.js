const getTalkers = require('./getTalkers');
const getTalkerById = require('./getTalkerById');
const loginValidation = require('./loginValidation');
const generateToken = require('./generateToken');
const createTalker = require('./createTalker');
const validateToken = require('./validateToken');
const validateName = require('./validateName');
const validateAge = require('./validateAge');
const validateTalk = require('./validateTalk');
const validateTalkKeys = require('./validateTalkKeys');
const editTalker = require('./editTalker');
const deleteTalker = require('./deleteTalker');

module.exports = {
  getTalkers,
  getTalkerById,
  postLoginMiddleares: [loginValidation, generateToken],
  postTalkerMiddlewares: [
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateTalkKeys, 
    createTalker],
  putTalkerIdMiddlewares: [
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateTalkKeys, 
    editTalker],
  deleteTalkerIdMiddlewares: [validateToken, deleteTalker],
};