const express = require("express");
const cors = require("cors");
const osRoutes = require("./routes/osRoutes");
const authRoutes = require("./routes/authRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/ordens", osRoutes);
app.use("/auth", authRoutes);
app.use("/usuarios", usuarioRoutes);

module.exports = app;