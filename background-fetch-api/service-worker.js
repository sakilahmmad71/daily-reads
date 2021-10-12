addEventListener('backgroundfetchsuccess', (event) => {
  console.log('[Service Worker]: Background Fetch Success', event.registration);

  event.waitUntil((async function () {
    try {
      const cache = await caches.open(event.registration.id);
      const records = await event.registration.matchAll();

      const promises = records.map(async (record) => {
        const response = await record.responseReady;
        if (response && response.ok) {
          await cache.put(record.request, response);
        }
      });

      await Promise.all(promises);

      // [Optional] This could be an API call to our backend
      // let assetsDataResponse = await fetch(`/assets/config-data.json`);
      // let assetsData = await assetsDataResponse.json();

      // Updating UI
      // await event.updateUI({
      //   title: `${assetsData.title} is ready`,
      //   icons: assetsData.icons
      // });
    } catch (error) {
      console.log(error);
      // await event.updateUI({
      //   title: `${assetsData.title} failed: ${event.registration.failureReason}`
      // });
    }
  })());
});

self.addEventListener('install', (event) => {
  console.log('[Service Worker]: Installed');
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker]: Active');
});