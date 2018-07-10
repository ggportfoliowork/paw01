'use strict'

const Helpers = use('Helpers')
const Encryption = use('Encryption')
const ProfilePhoto = use('App/Models/ProfilePhoto')

/**
 * PhotosController
 */
class PhotosController {

  /**
   * Store a photo
   * @param request
   * @param response
   * @returns {Promise<void>}
   */
  async store({ request, auth, response }) {
    const profilePic = request.file('file', {
      types: ['image'],
      size: '2mb'
    })
    let fileName = Encryption.encrypt(Date.now().toString())
    await profilePic.move(Helpers.tmpPath('profile-pics'), {
        name: fileName + '.jpg'
    })
    let photo = await ProfilePhoto.create({
      'user_id': auth.user.id,
      'file_name': fileName + '.jpg'
    })
    if (!profilePic.moved() || !photo) {
      return response.json({success: false, message: 'Error uploading file', data: profilePic.error() })
    }
      return response.json({success: true, message: 'Photo uploaded', data: profilePic })
    }

  /**
   *
   * @param request
   * @param auth
   * @param response
   * @returns {Promise<void>}
   */
    async storeCrop({request, auth, response}) {
      let image = new Buffer(request.file, "base64")
      console.log(image)

    }

}

module.exports = PhotosController
