const Jimp = require('jimp');
const path = require('path');
const PepperModel = require('../models/pepper-model');

class ImageUploadService {
    async saveIupdateImagePathmage({id, image}) {
        try {
            const logo = await PepperModel.create(data);
            return logo;
        } catch(err) {
            console.log(err);
            throw new Error(err.message);
        }
    }

    async uploadImg(image) {
        if(!image) {
            throw new Error({message: "Image is required!"});
        }

        const buffer = Buffer.from(
            image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
            'base64'
        );

        const imageName = `${Date.now()}-${Math.round(
            Math.random() * 1e9 
        )}.png`;

        try {
            const jimResp = await Jimp.read(buffer);
            jimResp
                .resize(300, Jimp.AUTO)  // width, height
                // .quality(60) // set JPEG quality
                // .write(path.resolve(__dirname, `../storage/${imageName}`));
                .write(path.resolve(__dirname, `../images/${imageName}`));

            // const imagePath = `../../images/logoImage/${imageName}`;
            const imagePath = `/images/${imageName}`;
            console.log(imagePath);
            return imagePath;
        } catch(err) {
            console.log(err);
            throw new Error(err);
        }
    }
}

module.exports = new ImageUploadService();