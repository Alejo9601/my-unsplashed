const Image = require("../models/image")

const deleteImageUrl = (id) => {
   return Image.findByIdAndDelete({_id: id})
}
 
module.exports = {deleteImageUrl};