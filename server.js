import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
//for images


//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

const URL = `mongodb+srv://Rohit2211:9140182234@blogweb.6okme.mongodb.net/BLOG?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(process.env.MONGODB_URI || URL,username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));