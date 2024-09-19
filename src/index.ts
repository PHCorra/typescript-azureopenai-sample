import express, { json } from "express";
import { router } from "./routes";


const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
  console.log(`App running on localhost:3000!`);
});

