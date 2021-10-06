/**
 * We can easily cancel fetch API requests using javascript buildin fetch API's.
 * A precise example of cancelling API requsts using fetch API.
 */

// Defining controller for cancelling API requests.
let controller;

// Assuming two imaginary button one is make API request and other one is cancel API request
const apiRequestButton = document.getElementById('makeApiRequest');
const apiCancelButton = document.getElementById('cancelApiRequest');

const postsEndpoint = "https://jsonplaceholder.typicode.com/users/1/posts";

apiRequestButton.addEventListener('click', async () => {
  controller = new AbortController();

  try {
    const posts = await fetch(postsEndpoint, { signal: controller.signal });

    if (posts?.status === 200) {
      return posts.json();
    }
  } catch (error) {
    console.log(error);
  }
});

apiCancelButton.addEventListener('click', async () => {
  if (controller) {
    controller.abort();
  }
});