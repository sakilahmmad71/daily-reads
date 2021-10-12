const backgroundFetchButton = document.querySelector('#backgroundFetchButton');
let progressStatusButton = document.querySelector('#progressStatusButton');

const bytesToSize = (bytes, decimals) => {
  if (bytes == 0) return '0 Bytes';

  let k = 1024,
    dm = decimals <= 0 ? 0 : decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

backgroundFetchButton.addEventListener('click', async (e) => {
  try {
    e.target.disabled = true;
    const registration = await navigator.serviceWorker.ready;

    // This could be an API call to our backend
    // let assetsDataResponse = await fetch(`/assets/config-data.json`);
    // let assetsData = await assetsDataResponse.json();


    const bgFetchRegistration = registration.backgroundFetch.fetch('my-request', ['/assets/img1.jpg', '/assets/img2.jpg']);
    // const bgFetchRegistration = await registration.backgroundFetch.fetch('my-background-api', assetsData.urls,
    //   {
    //     icons: assetsData.icons,
    //     title: `Downloading ${assetsData.title}`,
    //     downloadTotal: assetsData.downloadTotal
    //   }
    // );

    bgFetchRegistration.addEventListener('progress', (event) => {
      progressStatusButton = event.currentTarget;

      progressStatus.innerHTML = `Progress: downloaded ${bytesToSize(progressStatusButton.downloaded)}  from ${bytesToSize(progressStatusButton.downloadTotal)} (${Math.round((progressStatusButton.downloaded * 100) / progressStatusButton.downloadTotal)}%)`;

      if (progressStatusButton.downloadTotal == progressStatusButton.downloaded) {
        backgroundFetchButton.disabled = false;
      }
    });
  } catch (error) {
    alert('Please enable downloads for this website (click the icon on the right side of the address bar)');
    console.log(error);
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
};