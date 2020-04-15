import express, {Application} from 'express';
import mongoose from 'mongoose';

import env from './config/env';
import {headersAllow} from "./api/utils/utils";
import usersRouter from './api/routes/userRoute';


const bodyParser = require('body-parser');

const app: Application = express();
app.use(headersAllow);

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));

//json middleware
app.use(express.json());

app.use('/users', usersRouter);


//Connect to db
mongoose.connect("mongodb://127.0.0.1:27017/covid", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('mongodb is running'));

//Lunch server on port
app.listen(3000, () => {
    console.log('Server app listening on port ', 3000);
});
