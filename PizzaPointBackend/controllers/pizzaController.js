const Pizza = require("../models/Pizza");

exports.createPizza = async (req, res) => {
  try {
    const { name, doughType, sauceType, cheeseType, toppings, price } =
      req.body;
    const newPizza = new Pizza({
      name,
      doughType,
      sauceType,
      cheeseType,
      toppings,
      price,
    });
    await newPizza.save();
    res.status(201).json(newPizza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePizza = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPizza = await Pizza.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPizza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPizza = async (req, res) => {
  try {
    const { id } = req.params;
    const pizza = await Pizza.findById(id);
    res.status(200).json(pizza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePizza = async (req, res) => {
  try {
    const { id } = req.params;
    await Pizza.findByIdAndDelete(id);
    res.status(200).json({ message: "Pizza deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
