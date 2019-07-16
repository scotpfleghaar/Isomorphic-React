import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/routes.js';
import {matchRoutes} from 'react-router-config'

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
    // Setup Store before render
    // is ever called
    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData && route.loadData(store);
    });

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    }).catch(err => {
        console.warn(err)
    });
});

app.listen(port, () => {
    console.log('Listening to port ' + port)
});
