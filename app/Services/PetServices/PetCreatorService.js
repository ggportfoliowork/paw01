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
  async create(data) {
    let pet = await Pet.create({
      name: data.name,
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

    pet.user_id = data.user_id
    await pet.save()

    return pet
  }

}

module.exports = PetCreatorService
