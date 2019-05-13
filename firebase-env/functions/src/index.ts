import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin'

firebase.initializeApp({});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
    if (functions.config().env.id === 'prod') {
        response.send("Hello from Firebase Production!");
    } else {
        response.send("Hello from Firebase Development!");
    }
});
