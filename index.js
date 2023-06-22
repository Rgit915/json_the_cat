const { fetchBreedDescription } = require('./breedFetcher');

// retreive breed name from command-line arguments
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});