'use strict'

const { validate } = use('Validator')

class RegistrationController {
  showRegisterForm({view}) {
    return view.render('auth.register')
  }

  async register({request, params}) {
    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required',
      username: 'required|string',
    }

    const validation = await validate(request.all(), rules)
  }

}

module.exports = RegistrationController
