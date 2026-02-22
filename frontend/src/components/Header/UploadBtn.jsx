const UploadBtn = ({ handleUpload }) => {
   return (
      <button
         type="button"
         onClick={() => handleUpload()}
         className="header__upload-btn"
      >
         + Add photo
      </button>
   );
};

export default UploadBtn;
