/**
 * JavaScript provides a helper function Promise.all(promisesArrayOrIterable) to handle
 * multiple promises at once, in parallel, and get the results in a single aggregate array.
 * Such behavior of Promise.all([...]) is named fail-fast.
*/
const todosEndpoint = "https://jsonplaceholder.typicode.com/users/1/todos";
const postsEndpoint = "https://jsonplaceholder.typicode.com/users/1/posts";
// const singlePostEndpoint = "https://jsonplaceholder.typicode.com/posts/1";
const singlePostEndpoint = "https://jsonplaceholder.typicode.com/posts/hello-world";

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
  const promises = Promise.allSettled([
    makeNewPromise(todosEndpoint),
    makeNewPromise(singlePostEndpoint),
    makeNewPromise(postsEndpoint)
  ]);

  const response = await promises;
  console.log(response);
};

getPromisedData();

/**
 * if at least one promise rejects, then allPromise rejects right
 * away (without waiting for other promises to resolve) with the same reason.
 */