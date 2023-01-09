importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyBhpLAc9nr_nZhHFjvF6cueN31IO4j7pzc",
    authDomain: "sim-pkn.firebaseapp.com",
    projectId: "sim-pkn",
    storageBucket: "sim-pkn.appspot.com",
    messagingSenderId: "501182557899",
    appId: "1:501182557899:web:044ebc631883b5c0b0f54e",
    measurementId: "G-3DEMQSVWE7"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-cloud-messaging-push-scope.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});