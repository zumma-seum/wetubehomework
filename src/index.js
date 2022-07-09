import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/", movieRouter);


// Codesanbox does not need PORT :)
// app.listen(() => console.log(`✅  Server Ready!`));

const handleListening = () => console.log(`server listening on port http://localhost:4000`);
app.listen(4000, handleListening);
