import express from 'express'
import usersRoutes from './routes/usersRoutes.js';
import events from './routes/events.js';
const app = express()

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/creator', events);

app.listen(3000, () => console.log('listening'));