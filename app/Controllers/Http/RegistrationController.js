'use strict'

const { validate } = use('Validator')

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
      console.log(validation.messages())
      return view.render('auth.register', {messages: validation.messages()})
    } else {
      return "Registration success"
    }
  }

}

module.exports = RegistrationController
