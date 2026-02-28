const preventAppScroll = (bool) => {
   if (bool) {
      document.body.style.overflow = "hidden";
      return;
   }
   document.body.style.overflow = "";
};

export default preventAppScroll;
