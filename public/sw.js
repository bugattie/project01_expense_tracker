const CACHE_NAME = "offline-cache";
const urlsToCache = [
  "/",
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "https://fonts.googleapis.com/css?family=Lato&display=swap",
  "https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2",
  "/sockjs-node",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Cache open");
        return cache.addAll(urlsToCache);
      })
      .catch((err) => console.log(err))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
