import express from 'express';
import routes from './routes';
import cors from 'cors';


const app = express();

app.use(cors());

//plugin avisando o express que podermos usar o jason
app.use(express.json());

//importando rotas
app.use(routes);






//conexao HTTP
app.listen(3333);