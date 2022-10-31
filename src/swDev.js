export default function swDev(){
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    // navigator.serviceWorker.register(swUrl).then((reg) => console.warn('response',reg)).catch((err) => console.log('service worker not registered', err))
    navigator.serviceWorker.register(swUrl)
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker not registered', err))
}