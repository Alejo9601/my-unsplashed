const DeleteButton = ({ onClickAction, btnText }) => {
   const handleClick = (event) => {
      event.stopPropagation();
      onClickAction();
   };

   return (
      <button
         type="button"
         className="grid-masonry__delete-button"
         onClick={handleClick}
      >
         {btnText}
      </button>
   );
};

export default DeleteButton;
