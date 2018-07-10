'use strict'
const User = use('App/Models/User')

class UserCreatorService {

  async create(data) {
    const user = new User()
    user.username = data.email
    user.email = data.email
    user.password = data.password
    await user.save()
    return user
  }

}

module.exports = UserCreatorService
