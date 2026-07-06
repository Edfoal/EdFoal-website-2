// No-op service worker — prevents 404 for stale browser registrations.
// If a previous build or framework version registered a service worker,
// browsers will keep trying to fetch /sw.js. This file self-unregisters
// to clean up any stale registrations.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.registration
    .unregister()
    .then(() => self.clients.matchAll())
    .then((clients) => {
      clients.forEach((client) => client.navigate(client.url));
    });
});
