function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve the promise with an object containing status and body
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      // Reject the promise with an error object containing a message
      reject(new Error('The fake API is not working currently'));
    }
  });
}
