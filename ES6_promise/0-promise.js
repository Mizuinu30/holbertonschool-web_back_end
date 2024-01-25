export default function getResponseFromAPI() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('true');
    });
  });
}
