'use strict'

const { validate } = use('Validator')
const UserCreator = use('App/Services/UserServices/UserCreator');

class RegistrationController {

  showRegisterForm({view}) {
    return view.render('auth.register')
  }

  async register({request, params, view}) {

    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required|min:8|confirmed',
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      let errorMessages = {messages: validation.messages()}
      return view.render('auth.register', errorMessages)
    } else {
      const userCreator = new UserCreator()
      let user = userCreator.create(request.all())
      if(user) {
        return view.render('auth.login', {recentlyRegistered: 'Your account was created.  Please login.'})
      } else {
        let errorMessages = {messages: ["There was an error creating your account."]}
        return view.render('auth.register', errorMessages)
      }
    }
  }

}

module.exports = RegistrationController
