import "../../../styles/generics.css";

const Button = ({ btnText, handleClick }) => {
   return (
      <a className="generic-button cancel-upload-button" onClick={handleClick}>
         <p>{btnText}</p>
      </a>
   );
};

export { Button };
