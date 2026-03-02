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

   const uploadImg = async (imgBin, tagName) => {
      try {
         const data = await uploadImage(imgBin, tagName);
         return data;
      } catch (error) {
         console.error("Error al subir la imagen", error.message);
         // setErrorMessage(error.message);
         alert("Error al subir la imagen", error.message);
      }
   };

   const deleteImg = async (imgId) => {
      try {
         await deleteImage(imgId);
         setImages((prevImages) =>
            prevImages.filter((image) => image.id !== imgId),
         );
      } catch (error) {
         console.error("Error al borrar la imagen", error.message);
         alert("Error al borrar la imagen", error.message);
      }
   };

   const searchByName = (nameToSearch) => {
      const normalizedQuery = nameToSearch.trim().toLowerCase();

      if (normalizedQuery === "") {
         setImagesBySearch(null);
         return;
      }

      setImagesBySearch(
         images.filter((image) =>
            image.name.toLowerCase().includes(normalizedQuery),
         ),
      );
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
