const imageDto = require('../dtos/ImageDto');
const ImageService = require('../Services/imageUploadService')
const PepperModel = require('../models/pepper-model')

class ImageController {
    updateImage = async (req, res) => {
        let {image} = req.body;
        const {id} = req.params;

        try {
            image = await ImageService.uploadImg(image);

            PepperModel.findOneAndUpdate({_id: id}, {$set: {image: image}}, {upsert: true, new: true}, function(err, doc) {
                if (err) 
                    return res.status(500).json({error: err});
                return res.status(200).json({doc, message: 'Image Successfully Updated'});
            });

            // const vDto = new imageDto({image});
            // const savedImage = await ImageService.updateImagePath(vDto);
            // res.status(200).json({savedImage, message: "Image Uploaded Successfully!!"});
        } catch(err) {
            console.log(err);
            res.status(500).json({message: "Problem uploading image!!"});
        }
    }
}

module.exports = new ImageController();