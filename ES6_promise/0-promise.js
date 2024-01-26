function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate async operation using setTimeout
      setTimeout(() => {
        // Simulate a condition to resolve or reject the promise
        const isSuccess = true; // Change this to false to simulate failure

        if (isSuccess) {
          const data = { message: 'Successfully received response from API' };
          resolve(data); // Resolve the promise with some data
        } else {
          const error = new Error('Failed to get response from API');
          reject(error); // Reject the promise with an error
        }
      }, 1000); // Simulate a 1 second delay for the async operation
    });
  }

  // Usage example
  getResponseFromAPI()
    .then(data => console.log(data)) // Handle resolved promise
    .catch(error => console.error(error)); // Handle rejected promise
