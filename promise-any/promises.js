// Utility function to get value resolved after a certain delay.
const resolveTimeout = (value, delay) => {
  return new Promise(
    resolve => setTimeout(() => resolve(value), delay)
  );
}

// Utility function to get value rejected after a certain delay.
const rejectTimeout = (reason, delay) => {
  return new Promise(
    (r, reject) => setTimeout(() => reject(reason), delay)
  );
}

const getResolvedValueFromPromises = async () => {
  return Promise.any([
    await resolveTimeout(['Tomato', 'Papaya'], 1000),
    await resolveTimeout(['Orange', 'Apples'], 1500),
  ])
}

const response = getResolvedValueFromPromises().then(response => console.log(response));

console.log(response);