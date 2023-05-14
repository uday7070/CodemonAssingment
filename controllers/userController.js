const Product = require("../Model/model");

async function getById(req, res) {
  const productId = req.params.id;
  Product.findById(productId)
    .then(function (products) {
      if (!products) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(products);
      }
    })
    .catch(function (err) {
      res.status(500).json({ error: "Internal server error" });
    });
}
async function getAll(req, res) {
  Product.find()
    .then(function (products) {
      res.json(products);
    })
    .catch(function (err) {
      res.status(500).json({ error: "Internal server error" });
    });
}

async function updatePrice(req, res) {
  const productId = req.params.id;
  const newPrice = req.body.price;

  Product.findByIdAndUpdate(productId, { price: newPrice }, { new: true })
    .then(function (product) {
      if (!product) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(product);
      }
    })
    .catch(function (err) {
      res.status(500).json({ error: "Internal server error" });
    });
}
module.exports = {
  getById,
  getAll,
  updatePrice,
};
