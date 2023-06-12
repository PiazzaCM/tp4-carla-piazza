const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const app = express();


//midlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

//routes
app.use(require('./src/routes/tp.routes'))


//el puerto 6000 esta reservado para windows
app.listen(4000);