export default function updateUniqueItems(map) {
  // Check if the provided argument is an instance of Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process'); // Throw an error if it's not a Map
  }

  // Iterate over each entry in the Map
  map.forEach((value, key) => {
    // Check if the value is 1
    if (value === 1) {
      map.set(key, 100); // Update the value to 100
    }
  });

  return map; // Return the updated Map
}
