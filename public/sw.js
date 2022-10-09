let cacheData = 'V1';
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll(['static/js/bundle.js', 'manifest.json', '/']);
        })
    );
});

// this.addEventListener('fetch',(event)=>{
//     event.respondWith(
//         caches.match(event.request).then((resp)=>{
//             if(resp)
//             {
//                 return resp;
//             }
//         })
//     )
// })
