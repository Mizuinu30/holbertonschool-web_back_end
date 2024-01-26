import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const results = await Promise.allSettled([signUpUser(firstName, lastName),
      uploadPhoto(fileName)]);
    return results.map((result) => ({
      status: result.status,
      // Check if the promise was fulfilled or rejected and format the value accordingly
      value: result.status === 'fulfilled'
        ? result.value
        : `Error: ${result.reason.message}`, // Prepend "Error: " to the error message
    }));
  } catch (error) {
    console.error('An error occurred:', error);
    throw error; // Re-throw the error if you want calling code to handle it
  }
}
