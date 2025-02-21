self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("app-cache").then((cache) => {
      return cache.addAll([
        "/Web-Widget/index.html",
        "/Web-Widget/manifest.json",
        "/Web-Widget/sw.js"
      ]);
    }).catch((error) => {
      console.error("Cache addAll failed: ", error);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
