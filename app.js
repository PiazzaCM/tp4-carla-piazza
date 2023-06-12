const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const app = express();


//midlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use(require('./src/routes/tp.routes'))

app.listen(6000);