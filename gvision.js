// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
 
// Creates a client
const client = new vision.ImageAnnotatorClient();
 
// Performs label detection on the image file
client
 // .labelDetection('./resources/wakeupcat.jpg')
    .labelDetection('https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;
 
    /* labels.forEach(  label => require("openurl").open("https://www.amazon.com/s/ref=nb_sb_noss_2/130-9511022-7790727?url=search-alias%3Daps&field-keywords=" + labels[0].description)/*)*/

const opn = require('opn');
opn('https://www.amazon.com/s/ref=nb_sb_noss_2/130-9511022-7790727?url=search-alias%3Daps&field-keywords=' + labels[0].description);
    /* console.log('Labels:');
    labels.forEach(label => console.log(label.description)); */
  })
  .catch(err => {
    console.error('ERROR:', err);
  });















/* {
  "requests":[
    {
      "image":{
        "source":{
          "imageUri":
            "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        }
      },
      "features":[
        {
          "type":"LOGO_DETECTION",
          "maxResults":1
        }
      ]
    }
  ]
} */