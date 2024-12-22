self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('app-shell').then((cache) => {
            return cache.addAll([
                '/',
                'https://thunkable.site/w/Ka6rgFo2vNc_hI1T9NsBs',
                'icon-192x192.png',
                'icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});