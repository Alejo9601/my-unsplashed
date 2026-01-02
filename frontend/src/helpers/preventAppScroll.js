const preventAppScroll = (bool) => {
   let htmlEl = document.querySelector(".App");
   if (bool) {
      htmlEl.classList.add("noscroll");
      return;
   }
   htmlEl.classList.remove("noscroll");
};

export default preventAppScroll;
