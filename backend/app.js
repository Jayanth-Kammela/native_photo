const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=> console.log('DB connected'))
.catch((err)=> console.log(err));

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({ 
    extended: true
    }));
app.use(cookieParser());
app.use(cors());


app.use("/api", authRoutes)
app.use("/api", productRoutes)


const port = process.env.PORT || 8000;


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})