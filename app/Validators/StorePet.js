'use strict'

class StorePet {
  get rules () {
    return {
      name: 'required',
      date_of_birth: 'date|dateFormat:YYYY-MM-DD',
      species_id: 'required|integer',
      breeds: 'required'
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = StorePet
