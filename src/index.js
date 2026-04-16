import express from "express";

import routerP from "./routes/products.js"
import routerU from "./routes/user.js" 



const app = express()
app.use(express.json())

app.use("/api",routerP)
app.use("/api",routerU)

app.listen(3000)
console.log("Server en port 3000")