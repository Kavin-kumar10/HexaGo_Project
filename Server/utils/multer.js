const multer = require('multer');
const cloudinary = require('./cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary');


const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'Products',
        format: async (req, file) => 'png',
    }
})

const upload = multer({storage:storage})

module.exports = upload;
