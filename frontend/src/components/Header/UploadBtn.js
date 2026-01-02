const UploadBtn = ({ handleUpload }) => {
  return (
    <div onClick={() => handleUpload()} className="header__upload-btn">
      <p>Add a photo</p>
    </div>
  );
};

export default UploadBtn;
