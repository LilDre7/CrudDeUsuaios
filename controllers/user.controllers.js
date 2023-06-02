const express = require("express");
const User = require("../models/user.model");

// == Estas son las rutas son 👉🏾 /:id 👈🏾  //
exports.findOne = (req, res) => {
  res.status(205).json({
    ok: true,
    message: "En el findOne",
  });
};

exports.update = (req, res) => {
  res.status(205).json({
    ok: true,
    message: "En el update",
  });
};

exports.delete = (req, res) => {
  res.status(205).json({
    ok: true,
    message: "En el deleteAll",
  });
};

// == Estas son las rutas son 👉🏾 / 👈🏾  //
exports.findAll = (req, res) => {
  res.status(200).json({
    ok: true,
    message: "En el findAll",
  });
};

exports.create = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create({ username, email, password });

    res.status(201).json({
      ok: true,
      message: "Usuario creado 🐌",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Error al crear usuario 👁️",
    });
  }
};
