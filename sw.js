const CACHE_NAME = "python-learning-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/home.html",
  "/offline.html",
  "/manifest.json",

  "/icons/icon-192.png",
  "/icons/icon-512.png",

  "/offline.html"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES_TO_CACHE))
    );

    self.skipWaiting();
});

self.addEventListener("activate", event => {

    event.waitUntil(
        caches.keys().then(keys => {

            return Promise.all(
                keys.map(key => {

                    if(key !== CACHE_NAME){
                        return caches.delete(key);
                    }

                })

            );

        })

    );

    self.clients.claim();

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
        .then(response => {

            if(response){
                return response;
            }

            return fetch(event.request)
            .catch(() => {

                return caches.match("/offline.html");

            });

        })

    );

});

self.addEventListener("message",event=>{

if(event.data && event.data.action==="skipWaiting"){

self.skipWaiting();

}

});
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match("/offline.html"))
  );
});
