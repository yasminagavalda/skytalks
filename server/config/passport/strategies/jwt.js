const path = require('path')
const { Strategy, ExtractJwt } = require('passport-jwt')

const User = require(path.join(__dirname, '../../../models/User'))
const SECRET = process.env.SECRET || 'secret'

const jwtOptions = {
  secretOrKey: SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(jwtOptions, (jwtPayload, done) => {
	console.log('hi')
  User.findById(jwtPayload.id)
    .then(user => {
      if (user) done(null, user)
      else done(null, false)
    })
    .catch(err => done(err, false))
})

module.exports = strategy


