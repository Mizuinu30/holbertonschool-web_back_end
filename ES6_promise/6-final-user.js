// import signUpUser from './4-user-promise';
// import uploadPhoto from './5-photo-reject';

// export default function handleProfileSignup(firstName, lastName, fileName) {
// return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
//    .then((value) => ({ status: 'fulfilled', value }),
// (error) => ({ status: 'rejected', reason: error }))
//    .finally(() => console.log('Got a response from the API'));
// }

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const results = await Promise.allSettled([signUpUser(firstName, lastName),
      uploadPhoto(fileName)]);
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.message, // Assuming the reason is an Error object
    }));
  } catch (error) {
    console.error('rejected', error);
    throw error; // Re-throw the error if you want calling code to handle it
  }
}
