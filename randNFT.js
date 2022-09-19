const fs = require('fs');
const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
 
mergeImages(['assets/shields/IMG_1777.png', 'assets/left/2-b.png', 'assets/right/4-a (1).png', 'assets/face/anura1.png'], {
  Canvas: Canvas,
  Image: Image
})
.then((b64) => {
  var base64Data = b64.replace(/^data:image\/png;base64,/, "");

  fs.writeFile("out.png", base64Data, 'base64', function(err) {console.log(err)});
});