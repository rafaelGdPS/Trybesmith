const mockUsers = [
  {
    username: "Hagar",
    productIds: [1, 2],
  },
  {
    username: "Eddie",
    productIds: [3, 4],
  },
  {
    username: "Helga",
    productIds: [5],
  }
]
const mockUserWithObject = [
  {
    username: "Hagar",
    productIds: [{id:1}, {id: 2}],
  },
  {
    username: "Eddie",
    productIds: [{id: 3}, {id: 4}],
  },
  {
    username: "Helga",
    productIds: [{id: 5}],
  }
]

const mockFindAll = [ {
  id:1,
  username:'Hagar',
  vocation:'Guerreiro',
  level:10,
  password:'$2a$10$tWdhZRhcJWIuSkU/CsezU.Bq4N7u23cmA7gIBTLM9WTR.kR0QbGqG'
},
{
  id: 2,
  username: 'Eddie',
  vocation: 'Guerreiro',
  level: 8,
  password: '$2a$10$5Zi.jfhQppGPqMhxfaJi1esVR6wKuhO/.CwftVI2MAMg8tFZVXqKO'
},
{
  id: 3,
  username: 'Helga',
  vocation: 'Curandeira',
  level: 9,
  password: '$2a$10$IsLFFFX3vJDmhhhua7BE3.rGynZf.A8As88G61fDuPUZoxL6YA9gu'
},
]

export default  {
  mockUserWithObject,
  mockUsers,
  mockFindAll,
}