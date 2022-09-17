// tipos obrigatórios

type User = {
  username: string,
  password: string,
}

type VertifyUserFunc = (user: User, login: User) => boolean;

const verifyUser: VertifyUserFunc = (user, login) => {
  return (
    user.username === login.username
    && user.password === login.password
  )
}

const dbUser = {
  username: 'enoix',
  password: 'supersenha'
}

const login = {
  username: 'enoix',
  password: 'supersenha',
  permission: ''
}

console.log(verifyUser(dbUser, login));
