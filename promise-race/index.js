/**
 * The Promise.race() method returns a promise that fulfills or rejects as soon as
 * one of the promises in an iterable fulfills or rejects, with the
 * value or reason from that promise.
 */

const todosEndpoint = "https://jsonplaceholder.typicode.com/users/1/todos";
const postsEndpoint = "https://jsonplaceholder.typicode.com/users/1/posts";
const singlePostEndpoint = "https://jsonplaceholder.typicode.com/posts/1";

const makeNewPromise = async (endpoint) => {
  try {
    const response = await fetch(endpoint);

    if (response?.status === 200) {
      console.log("Requested URL ", endpoint);
      return response.json();
    }
  } catch (error) {
    console.log(error?.message);
  }
};

const getPromisedData = async () => {
  const promises = Promise.race([
    makeNewPromise(singlePostEndpoint),
    makeNewPromise(todosEndpoint),
    makeNewPromise(postsEndpoint)
  ]);

  const response = await promises;
  console.log(response);
};

getPromisedData();

/**
 * The race function returns a Promise that is settled the same way
 * (and takes the same value) as the first promise that settles amongst the
 * promises of the iterable passed as an argument.

 * If the iterable passed is empty, the promise returned will be forever pending.

 * If the iterable contains one or more non-promise value and/or an already
 * settled promise, then Promise.race will resolve to the first of these values
 * found in the iterable.
 */
