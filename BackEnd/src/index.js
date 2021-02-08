const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const RegisterRoutes = require('./routes/RegisterRoutes');
server.use('/register', RegisterRoutes);


server.listen(3333, ()=>{
console.log('API ONLINE!');
});