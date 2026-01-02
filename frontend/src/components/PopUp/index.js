import "../../styles/pop-up.css";

const PopUp = ({ message, setShowState }) => {
   const onClickHandler = () => {
      setShowState(false);
   };

   return (
      <div className="pop-up">
         <span>{message}</span>
         <div id="close-button" onClick={onClickHandler}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               id="Layer_1"
               data-name="Layer 1"
               viewBox="0 0 24 24"
               width="1.2em"
               height="1.2em"
            >
               <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4.707,15.293l-1.414,1.414-3.293-3.293-3.293,3.293-1.414-1.414,3.293-3.293-3.293-3.293,1.414-1.414,3.293,3.293,3.293-3.293,1.414,1.414-3.293,3.293,3.293,3.293Z" />
            </svg>
         </div>
      </div>
   );
};

export default PopUp;
