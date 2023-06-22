const request = require('request');

//make request to the Cat API
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) =>{
    if (error) {
      console.error('Error:', error);
    } else {
      const data = JSON.parse(body);
      
      //check if any breeds are found
      if (data.length === 0) {
        callback('Breed not found', null);
      } else {
        const description = data[0].description;
        callback(null, description);
      }
      
    }
  
  });
};


//Export function
module.exports = { fetchBreedDescription };