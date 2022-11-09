const cacheData = 'site-static-v2';
const cacheDataDynamic = 'site-dynamic-v2';

const data = [
    '/',
    '/portfolio',
    '/laporan',
    '/tambah-laporan',
    '/static/js/bundle.js',
    '/manifest.json',
    '/static/media/fontawesome-webfont.20fd1704ea223900efa9.woff2',
    '/icon/icon-144.png',
    '/umm.png',
    '/icon/icon-144.png'
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
                .filter(key => key !== cacheData && key !== cacheDataDynamic)
                .map(key => caches.delete(key))
                )
        })
    )

});

self.addEventListener('fetch', (event) =>{
    console.log('fetch event', event);
    if(event.request.url.indexOf('firebase.googleapis.com') === -1){
        event.respondWith(
            caches.match(event.request)
            .then(cacheRes => {
                return cacheRes || fetch(event.request).then(fetchRes => {
                    return caches.open(cacheDataDynamic).then(cache => {
                        cache.put(event.request.url, fetchRes.clone());
                        return fetchRes;
                    })
                })
            })
        )
    }
});
