import express from "express";
const PORT = 3000;
const app = express();



app.use(express.static("src"));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
