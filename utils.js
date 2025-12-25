import { error } from "console";
import fs from "fs/promises";

export async function read(path) {
  const fileContent = await fs.readFile(path, "utf8");
  return JSON.parse(fileContent);
}

export async function create(data, key) {
  try {
    const collection = await read(key+".json");
    data = { id: collection[collection.length - 1]?.id + 1 || 1, ...data };
    if(data.key === key){
        console.error("The user is already registered ")
    }
    collection.push(data);
    console.log("message:User registered successfully");
    await fs.writeFile(key + ".json", JSON.stringify(collection, null, 2));
    return data,{messege :"username append,goodluck"};
  } catch {
    console.log(error);
  }
}


// export async function createevents(data, key) {
//   try {
//     const collection = await read("event.json");
//     data = { id: collection[collection.length - 1]?.id + 1 || 1, ...data };
   
//     collection.push(data);
//     console.log("message:User registered successfully");
//     await fs.writeFile(key + ".json", JSON.stringify(collection, null, 2));
//     return data,{messege :"username append,goodluck"};
//   } catch {
//     console.log(error);
//   }
// }







