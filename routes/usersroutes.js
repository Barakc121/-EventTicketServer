import express from 'express';
import { create, read } from '../utils.js';
const router = express.Router()

router.get('/', async (req, res) =>{
    const collection = await read('users.json');
    res.send(collection);
})

router.post('/register', async(req, res) => {
    const user = await create(req.body, 'users');
    res.status(201).send(user);
})

export default router