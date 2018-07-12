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

}

module.exports = PetCreatorService
