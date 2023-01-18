const updateRoutes = require('express').Router();

const Heading = require("../Controllers/headingController")
const Image = require("../Controllers/ImageController")

updateRoutes.post('/heading', Heading.updateHeading);
updateRoutes.post('/createdoc', Heading.createPepperDoc);
updateRoutes.get('/data', Heading.pepperData);
updateRoutes.patch('/requestDemo/:id', Heading.requestDemo);
updateRoutes.post('/image/:id', Image.updateImage);

module.exports = updateRoutes;