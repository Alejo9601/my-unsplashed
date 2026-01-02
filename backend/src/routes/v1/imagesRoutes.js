const express = require("express");
const { deleteImageUrl } = require("../../services/deleteImgUrl");
const { getImageUrls } = require("../../services/getImageUrls");
const { submitUrl } = require("../../services/submitUrl");
const imagesRoutes = express.Router();

imagesRoutes
  .get("/", (req, res, next) => {
    getImageUrls().then((result) => res.send(result).end());
  })
  .post("/", (req, res) => {
    submitUrl(req.body.name, req.body.url).then((result) =>
      res.send(result).end()
    );
  })
  .delete("/:id", (req, res, next) => {
    const id = req.params.id;
    deleteImageUrl(id).then((result) => res.status(204).end());
  });

module.exports = imagesRoutes;
