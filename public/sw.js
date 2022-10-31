const cacheData = 'site-static-v1';
const cacheDataDynamic = 'site-dynamic-v1';

const data = [
    '/',
    '/portfolio',
    '/laporan',
    '/static/js/bundle.js',
    'manifest.json',
    '/static/media/fontawesome-webfont.20fd1704ea223900efa9.woff2',
    '/icon/icon-144.png',
];

this.addEventListener('install', (event) => {
        event.waitUntil(
            caches.open(cacheData).then(cache => {
            cache.addAll(data)
        })
    );
});

this.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== cacheData)
                .map(key => caches.delete(key))
                )
        })
    )

});

this.addEventListener('fetch', (event) =>{
    // console.log('fetch event', event);
    event.respondWith(
        caches.match(event.request)
        .then(cacheRes => {
            return cacheRes || fetch(event.request).then(fetchRes => {
                return caches.open(cacheDataDynamic).then(cache =>{
                    cache.put(event.request.url, fetchRes.clone())
                    return fetchRes;
                })
            })
        })
    )
});
