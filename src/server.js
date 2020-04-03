import 'dotenv/config';
import app from './app';

app.listen(process.env.PORT, () => {
    console.log(`Servidor Executando! ... http://localhost:${process.env.PORT}`)
})
