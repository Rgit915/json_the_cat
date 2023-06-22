const { fetchBreedDescription } = require('./breedFetcher');

// retreive breed name from command-line arguments
const breedName = process.argv[2];

//check if breed name is provided
if (!breedName) {
  console.error('Please provide breed name.');
  process.exit(1);
}
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});