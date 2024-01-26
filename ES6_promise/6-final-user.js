import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  return Promise.allSettled([signUpUser(firstname, lastname), uploadPhoto(filename)])
    .then((value) => ({ status: 'success', value }), (error) => ({ status: 'rejected', error }, console.log('Signup system offline'), console.log(error))
      .finally(() => console.log('Got a response from the API')))
    .catch((error) => ({ status: 'rejected', error })(console.log('Signup system offline'), console.log(error)));
}
