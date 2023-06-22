const request = require('request');

// retreive breed name from command-line arguments
const breedName = process.argv[2];
//make request to the Cat API
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) =>{
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    
    //check if breed name is provided
    if (!breedName) {
      console.error('Please provide breed name.');
      process.exit(1);
    }
    //check if any breeds are found
    if (data.length === 0) {
      console.log('Breed not found');
    } else {
      const description = data[0].description;
      console.log(description);
    }
    
  }

});