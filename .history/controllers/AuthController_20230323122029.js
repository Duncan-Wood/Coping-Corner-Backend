const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      //changed to have username login instead of req.body.email
      where: { username: req.body.username },
      raw: true
    })
    if (
      //if user exists and our official password_digest (in user info) matches our inputted one, then
      //assign the id and email to the payload, then sign payload with app secret
      //and create a token with it
      user && 
      (await middleware.comparePassword(user.password_digest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
        username: user.username,
        password: user.password
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Incorrect Username or Password' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    //this label 'password' must be the same as the key for password value in form/ entered json object
    const { email, password, username } = req.body
    let password_digest = await middleware.hashPassword(password)
    const user = await User.create({ email, password_digest, username })
  //creating a user
    res.send(user) 
  } catch (error) {
  
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.password_digest,
        oldPassword
      ))
    ) {
      let password_digest = await middleware.hashPassword(newPassword)
      await user.update({ password_digest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
