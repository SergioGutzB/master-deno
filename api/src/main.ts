import {Application} from "../deps.ts"
import initRouters from "./routers/index.ts";
import MongoDatabase from "./helper/mongodb.ts";


const URL = Deno.env.get("URL") || "http://localhost";
const PORT = +(Deno.env.get("PORT") || 3001);
const MONGO_URL = "mongodb://localhost:27017";

const mongodb = new MongoDatabase('todo', MONGO_URL)
await mongodb.connect();

const temp = mongodb.getDatabase.collection('todo');

const resolve = await temp.insertOne({
  title: "My first todo",
  description: "Save my first todo in mongo"
})

console.log(resolve)



const app = new Application();

initRouters(app);

app.addEventListener("listen", () => {
  console.log(`Server listening at ${URL}:${PORT}`);
});

await app.listen({ port: PORT });
