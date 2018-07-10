'use strict'

const sharp = require('sharp')
const Helpers = use('Helpers')
const sha1 = require('js-sha1')
const getStream = use('get-stream')
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

    let hash = sha1.create();
    hash.update(Date.now().toString());
    let fileName = hash.hex();

    await profilePic.move(Helpers.tmpPath('profile-pics'), {
        name: fileName + '.jpg'
    })

    if (!profilePic.moved()) {
      return response.json({success: false, message: 'Error uploading file', data: profilePic.error() })
    }
      return response.json({success: true, message: 'Your photo has been uploaded.  Edit your avatar.', data: profilePic })
  }

  /**
   * Store a cropped photo
   * @param request
   * @param auth
   * @param response
   * @returns {Promise<void>}
   */
    async storeCrop({request, auth, response}) {
        const profilePic = request.file('file', {
          types: ['image'],
          size: '2mb'
        })

        let hash = sha1.create();
        hash.update(Date.now().toString());
        let fileName = hash.hex();

        await profilePic.move(Helpers.tmpPath('profile-pics'), {
          name: fileName + '.jpg'
        })

        let savePathAndFile = Helpers.publicPath('profile-pics') + '/' + fileName + '.jpg'

        await sharp(Helpers.tmpPath('profile-pics/'+fileName+'.jpg'))
                    .resize(300, 300)
                    .toFile(savePathAndFile);

        let photo = await ProfilePhoto.create({
          'user_id': auth.user.id,
          'file_name': fileName + '.jpg'
        })

        if (!profilePic.moved() || !photo) {
          return response.json({success: false, message: 'Error uploading file', data: profilePic.error() })
        }

        return response.json({success: true, message: 'Photo uploaded', title: 'Success', data: profilePic })
      }

}

module.exports = PhotosController
