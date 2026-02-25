import { useContext } from "react";
import ImagesContext from "../context/ImagesContext";
import deleteImage from "../services/deleteImage";
import uploadImage from "../services/uploadImage";

const useImages = () => {
   const {
      images,
      setImages,
      imagesBySearch,
      setImagesBySearch,
      imagesLoading,
   } = useContext(ImagesContext);

   const uploadImg = async (imgBin) => {
      try {
         const data = await uploadImage(imgBin);
         return data;
      } catch (error) {
         console.error("Error al subir la imagen", error.message);
         // setErrorMessage(error.message);
         alert("Error al subir la imagen", error.message);
      }
   };

   const deleteImg = async (imgId) => {
      await deleteImage(imgId);

      setImages((prevImages) =>
         prevImages.filter((image) => image.id !== imgId),
      );
   };

   const searchByName = (nameToSearch) => {
      if (nameToSearch === "") {
         setImagesBySearch([]);
         return;
      }
      setImagesBySearch(images.filter((image) => image.name === nameToSearch));
   };

   const refreshImages = (image) => {
      setImages((prev) => [...prev, image]);
   };

   return {
      images,
      imagesBySearch,
      imagesLoading,
      uploadImg,
      deleteImg,
      searchByName,
      refreshImages,
   };
};

export default useImages;
