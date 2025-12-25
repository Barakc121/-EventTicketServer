
import express from 'express';
import { create, read } from '../utils.js';
const router = express.Router()

router.get('/', async (req, res) =>{
    const db = await read('users.json');
    res.send(db.users);
})

router.post('/', async(req, res) => {
    const user = await create(req.body, 'users');
    res.status(201).send(user);
})

export default router