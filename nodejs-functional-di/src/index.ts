import * as express from 'express';
import api from './api';

const app = express();
const webapi = api();
app.get("/nodejs", webapi.getUserHandler);

const PORT = 8000;
app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
