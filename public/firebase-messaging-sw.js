importScripts(
    'https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js'
);
importScripts(
    'https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js'
);

const firebaseConfig = {
    apiKey: 'AIzaSyBhpLAc9nr_nZhHFjvF6cueN31IO4j7pzc',
    authDomain: 'sim-pkn.firebaseapp.com',
    projectId: 'sim-pkn',
    storageBucket: 'sim-pkn.appspot.com',
    messagingSenderId: '501182557899',
    appId: '1:501182557899:web:044ebc631883b5c0b0f54e',
    measurementId: 'G-3DEMQSVWE7',
};

console.log('ini jalan ga ya');

const app = firebase.initializeApp(firebaseConfig);
console.log(app);
const messaging = firebase.messaging(app);

console.log(messaging);
console.log(messaging.onBackgroundMessage);

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
