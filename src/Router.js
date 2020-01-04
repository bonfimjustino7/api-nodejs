const express = require("express");
const routes = express.Router();

const products = require("./controllers/ProductController");

routes.get("/products", products.index);
routes.get("/products/:id", products.show);
routes.post("/products", products.store);
routes.put("/products/:id", products.update);
routes.delete("/products/:id", products.destroy);

module.exports = routes;