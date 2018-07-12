'use strict'

class StorePet {
  get rules () {
    return {
      name: 'required',
      name_last: 'required',
      date_of_birth: 'required',
      address_street_1: 'required',
      address_city: 'required',
      address_state: 'required',
      address_postal_code: 'required'
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = StorePet
