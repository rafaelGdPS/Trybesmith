import bcrypt from 'bcryptjs'

const validUsername = "Hagar"
const validPassword = 'terrível'
const invalidPassword = "tevel"
const invalidUsername = "coronel"

const validRequest = 
  {
    username: validUsername,
    password: validPassword,
  }

  const requestWithoutUsername = {
    username: '',
    password: validPassword,
  }

  const requestWithoutPassword = {
    username: validUsername,
    password: '',
  }

  const invalidPasswordRequest = {
    username: validUsername,
    password: invalidPassword,
  }

  const invalidUsernamedRequest = {
    username: invalidUsername,
    password: validPassword,
  }

const userExist = {
  id:1,
  username:'Hagar',
  vocation:'Guerreiro',
  level:10,
  password:'$2a$10$tWdhZRhcJWIuSkU/CsezU.Bq4N7u23cmA7gIBTLM9WTR.kR0QbGqG'
}
export default {
  userExist,
  validRequest,
  invalidPasswordRequest,
  invalidUsernamedRequest,
  requestWithoutPassword,
  requestWithoutUsername
}