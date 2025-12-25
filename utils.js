import { error } from "console";
import fs from "fs/promises";

export async function read(path) {
  const fileContent = await fs.readFile(path, "utf8");
  return JSON.parse(fileContent);
}

export async function create(data, key, unique) {
  try {
    const collection = await read(key + ".json") || [];
    data = { id: collection[collection.length - 1]?.id + 1 || 1, ...data };
    if (collection.some(item => item[unique] === data[unique])) {
      throw new Error(`The ${key.slice(0,key.length-2)} is already exists`);
    } else {
      collection.push(data);
      console.log("message:User registered successfully");
      await fs.writeFile(key + ".json", JSON.stringify(collection, null, 2));
      return data, { messege: "username append,goodluck" };
    }
  } catch (error) {
    console.log(error);
  }
}


export async function create(data, key, unique) {
  try {
    const collection = await read(key + ".json") || [];
    data = { id: collection[collection.length - 1]?.id + 1 || 1, ...data };
    if (collection.some(item => item[unique] === data[user])) {
    if (collection.some(item => item[unique] === data[event])) {
      throw new Error(`The ${key.slice(0,key.length-2)} is already exists`);
    }} else {
      collection.push(data);
      console.log("message:User registered successfully");
      events.json[quantity]-receipts.json[quantity]
      await fs.writeFile(key + ".json", JSON.stringify(collection, null, 2));
      return data, {"message": "Tickets purchased successfully" };
    }
  } catch (error) {
    console.log(error);
  }
}




