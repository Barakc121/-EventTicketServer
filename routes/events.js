
import express from 'express';
import { create, read } from '../utils.js';
const router = express.Router()

router.get('/', async (req, res) =>{
    const collection = await read('events.json');
    res.send(collection.users);
})

router.post('/register', async(req, res) => {
    const user = await create(req.body, 'events');
    res.status(201).send(user);
})



export default router