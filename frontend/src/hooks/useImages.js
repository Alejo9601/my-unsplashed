import { useContext } from "react";
import ImagesContext from "../context/ImagesContext";
import deleteImage from "../services/deleteImage";
import uploadImage from "../services/uploadImage";
import FileStatusContext from "../context/FileStatusContext";

const useImages = () => {
   const { images, setImages, imagesBySearch, setImagesBySearch } =
      useContext(ImagesContext);
   const { setUploadedImg } = useContext(FileStatusContext);

   const uploadImg = async (tagName, imgBin) => {
      return uploadImage(imgBin).then((res) => {
         setUploadedImg(res);
      });
   };

   const deleteImg = (imgId) => {
      return deleteImage(imgId).then(
         setImages((prevImages) =>
            prevImages.filter((image) => image.id !== imgId)
         )
      );
   };

   const searchByName = (nameToSearch) => {
      if (nameToSearch === "") {
         setImagesBySearch([]);
         return;
      }
      setImagesBySearch(images.filter((image) => image.name === nameToSearch));
   };

   return {
      images,
      imagesBySearch,
      uploadImg,
      deleteImg,
      searchByName,
   };
};

export default useImages;
