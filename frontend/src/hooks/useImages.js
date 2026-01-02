import { useContext } from "react";
import ImagesContext from "../context/ImagesContext";
import deleteOneImg from "../services/deleteOneImg";
import storeImgInfo from "../services/storeImgInfo";
import storeImgBin from "../services/storeImgBin";
import FileStatusContext from "../context/FileStatusContext";

const useImages = () => {
   const { images, setImages, imagesBySearch, setImagesBySearch } =
      useContext(ImagesContext);
   const { setUploadedImg } = useContext(FileStatusContext);

   const uploadImage = async (tagName, imgBin) => {
      return storeImgBin(imgBin).then((res) => {
         storeImgInfo({ name: tagName, url: res.url }).then(() =>
            setUploadedImg(res)
         );
      });
   };

   const deleteImg = (imgId) => {
      return deleteOneImg(imgId).then(
         setImages((prevImages) =>
            prevImages.filter((image) => image._id !== imgId)
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
      uploadImage,
      deleteImg,
      searchByName,
   };
};

export default useImages;
