import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((value) => ({ status: 'fulfilled', value }), (error) => ({ status: 'rejected', reason: error }))
    .finally(() => console.log('Got a response from the API'));
}
