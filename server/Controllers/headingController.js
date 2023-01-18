const PepperModel = require('../models/pepper-model');
const imageUploadService = require('../Services/imageUploadService');

class HeadingController {
    createPepperDoc = async (req, res) =>  {
        const {heading, logo, requestDemoCount} = req.body;
        try {
            // try {
            //     logo = await ImageService.uploadImg(logo);
            //     // res.status(200).json({message: "Logo Uploaded Successfully!!"});
            // } catch(err) {
            //     console.log(err);
            //     res.status(500).json({message: "Problem uploading Logo!!"});
            // }
            const pepperData = await PepperModel.create({heading, logo, requestDemoCount});
            return res.status(200).json({pepperData, message: "Document Created Successfully!!"});
        } catch(err) {
            console.log(err);
            throw res.status(500).json({message: "Problem creating Doc!!", err});
        }
    }

    pepperData = async (req, res) => {
        try {
            const pepperData = await PepperModel.findOne({});
            return res.status(200).json(pepperData);
        } catch(err) {
            console.log(err);
            return res.status(500).json({message: "Problem creating Doc!!", err});
        }
    }

    updateHeading = (req, res) => {
        const {id, heading} = req.body;
        try {
            PepperModel.findOneAndUpdate({_id: id}, {$set: {heading: heading}}, {upsert: true}, function(err, doc) {
                if (err) 
                    return res.status(500).json({error: err});
                return res.status(200).json({doc, message: 'Successfully Updated'});
            });
        } catch(err) {
            console.log(err);
            res.status(500).json({message: "Couldn't Update Heading!!"});
        }
    }


    requestDemo = (req, res) => {
        try {
            const id = req.params.id;
            // const updatedData = PepperModel.updateOne({ _id: id }, { $inc: { requestDemoCount: 1 } })

            PepperModel.findOneAndUpdate({ _id: id }, { $inc: { requestDemoCount: 1 }}, {new: true}, function(err, doc) {
                if (err) 
                    return res.status(500).json({error: err});
                return res.status(200).json({message: 'Successfully Updated', doc});
            });
        } catch(err) {
            console.log(err);
            res.status(500).json({message: "Couldn't Update Heading!!"});
        }
    }
}

module.exports = new HeadingController();