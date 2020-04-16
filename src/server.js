// import 'dotenv/config';
// import app from './app';

require('dotenv/config');
const app = require('./app');

app.listen(process.env.PORT || 3333, () => {
    console.log(
        `Servidor Executando! ... http://localhost:${process.env.PORT}`
    );
});
