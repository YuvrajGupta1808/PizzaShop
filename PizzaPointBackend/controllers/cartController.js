const Cart = require("../models/Cart");

exports.createCart = async (req, res) => {
  try {
    const { userID, pizzaList, totalPrice } = req.body;
    const newCart = new Cart({ userID, pizzaList, totalPrice });
    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Cart.findById(id).populate("pizzaList");
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.status(200).json({ message: "Cart deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
