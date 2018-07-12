'use strict'

const Pet = use('App/Models/Pet')

/**
 * PetCreatorService
 */
class PetCreatorService {

  /**
   * Create a new pet record
   * @param data
   * @returns {Promise<void>}
   */
  async create(data, user_id) {

    if(data.file) {
      let pet_photo = await this.storePetPhoto(data)
      console.log(pet_photo)
    }

    let pet = await Pet.create({
      name: data.name,
      user_id: user_id,
      species_id: data.species_id,
      breeds: data.breeds,
      date_of_birth: data.date_of_birth,
      gender: data.gender,
      is_spayed_neutered: data.is_spayed_neutered,
      is_microchipped: data.is_microchipped,
      is_house_trained: data.is_house_trained,
      behavior_animals: data.behavior_animals,
      behavior_humans: data.behavior_humans,
      behavior_children: data.behavior_children,
      details_description: data.details_description
    })

    return pet
  }

  /**
   * Store the pet photo if a pet photo is present
   * @param petPhoto
   * @returns {Promise<*>}
   */
  async storePetPhoto(petPhoto) {
    const file = petPhoto.file('file', {
      types: ['image'],
      size: '2mb'
    })

    let hash = sha1.create();
    hash.update(Date.now().toString());
    let fileName = hash.hex();

    await file.move(Helpers.tmpPath('pets-pics'), {
      name: fileName + '.jpg'
    })

    return file
  }

}

module.exports = PetCreatorService
