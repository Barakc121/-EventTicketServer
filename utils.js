
import { create } from "domain";
import fs from "fs/promises";


export async function read(path){
    const fileContent = await fs.readFile(path, 'utf8');
    return JSON.parse(fileContent);
}

export async function create(data, key){
    const db = await read('users.json');
    const collection = db[key];
    data = {id: collection[collection.length -1]?.id + 1 || 1, ...data}
    collection.push(data);
    await fs.writeFile('users.json', JSON.stringify(db, null, 2));
    return data
}
create({name: "barak", password:'1234'}, 'users');

// export async function createev(data, key){
//     const db = await read('events.json');
//     const collection = db[key];
//     data = {id: collection[collection.length -1]?.id + 1 || 1, ...data}
//     collection.push(data);
//     await fs.writeFile('events.json', JSON.stringify(db, null, 2));
//     return data
// }
// createev({eventName:"nova",ticketsAvailable:"56",createdBy:"username"},events)


// export async function update(data, key, id){
//     const db = await read('user.json');
//     const collection = db[key];
//     const index = collection.findIndex(item => item.id === id)
//     collection[index] = {...collection[index], ...data};
//     await fs.writeFile('user.json', JSON.stringify(db, null, 2));
// }

// export async function remove(key, id){
//     const db = await read('user.json');
//     const collection = db[key];
//     const index = collection.findIndex(item => item.id === id);
//     collection.splice(index, 1);
//     await fs.writeFile('user.json', JSON.stringify(db, null, 2));
// }

// update({title:"Hello"}, 'posts', 1)
// await remove('posts', 2)
// console.log(await read('user.json'))