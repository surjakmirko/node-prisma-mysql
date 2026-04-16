import express from "express";

import routerP from "./routes/products.js"
import routerU from "./routes/user.js" 



const app = express()
app.use(express.json())

app.use("/api",routerP)
app.use("/api/users",routerU)


const PORT = process.env.PORT || 3001; // Cambia 3000 por 3001
app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});