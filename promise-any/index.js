/**
 * Promise.any(promises) is a helper function that runs promises in parallel and resolves to 
 * the value of the first successfully resolved promise from promises list.
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
  const promises = Promise.any([
    makeNewPromise(todosEndpoint),
    makeNewPromise(singlePostEndpoint),
    makeNewPromise(postsEndpoint)
  ]);

  const response = await promises;
  console.log(response);
};

getPromisedData();