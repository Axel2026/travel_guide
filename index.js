import bodyParser from'body-parser';
import config from './app/config.js';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import routes from './app/REST/routes.js';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));
app.use(express.static('public'));
app.use(cors());

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.info('Database connection has failed');
        console.error(error);
    } else {
        console.info('Connection with database established');
    }
});

routes(app);

app.listen(config.port, function () {
    console.info(`Server is running at ${config.port}`)
});
