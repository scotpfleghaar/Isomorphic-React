import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
    // Setup Store before render
    // is ever called
    const store = createStore();

    res.send(renderer(req, store));
});

app.listen(port, () => {
    console.log('Listening to port ' + port)
});