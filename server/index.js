if(process.env.NODE_ENV !== 'production')
    require("dotenv").config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

const dbConnect = require('./Database/database');
const updateRoute = require('./Routes/updateRoutes');

const PORT = process.env.PORT || 8800;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const URL = process.env.MONGOURI || `mongodb+srv://${USER}:${PASSWORD}@pepper.az7awhd.mongodb.net/?retryWrites=true&w=majority`

dbConnect(URL);
app.use('/images', express.static('images'));
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    credentials: true
}));

app.use(express.json({limit: '8mb'}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
app.use("/admin", updateRoute);

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})