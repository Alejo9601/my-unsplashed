const express = require("express");
const multer = require("multer");
const uploadImage = require("../../services/uploadImage.js");
const getImages = require("../../services/getImages.js");
const deleteImage = require("../../services/deleteImage.js");

const upload = multer({ storage: multer.memoryStorage() });
const imagesRoutes = express.Router();

imagesRoutes
   .get("/", async (req, res, next) => {
      try {
         const images = await getImages(req.user.user_id);
         res.status(200).send(images);
      } catch (error) {
         next(error);
      }
   })
   .post("/", upload.single("image"), async (req, res, next) => {
      try {
         if (!req.file) {
            return res.status(400).json({ error: "No image was received" });
         }

         const file = new File([req.file.buffer], req.file.originalname, {
            type: req.file.mimetype,
         });

         const response = await uploadImage(file, req.user.user_id);

         if (response.error) {
            return res.status(500).json({ error: response.error.message });
         }

         res.json({
            success: true,
            url: response.url,
            name: response.name,
         });
      } catch (error) {
         next(error);
      }
   })
   .delete("/:id", async (req, res, next) => {
      const image_id = req.params.id;
      try {
         await deleteImage(image_id);
         res.status(204).send();
      } catch (error) {
         next(error);
      }
   });

module.exports = imagesRoutes;
