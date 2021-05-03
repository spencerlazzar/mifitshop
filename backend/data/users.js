import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@mifit.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Spencer Lazzar',
    email: 'spencer@mifit.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Aron Penski',
    email: 'aron@mifit.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users