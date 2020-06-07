import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCPx_SejVtDij_MyPJt2Tte3o8JyVGMIBs",
    authDomain: "crwn-db-b747b.firebaseapp.com",
    databaseURL: "https://crwn-db-b747b.firebaseio.com",
    projectId: "crwn-db-b747b",
    storageBucket: "crwn-db-b747b.appspot.com",
    messagingSenderId: "412268302179",
    appId: "1:412268302179:web:2b1521c49f03b3ee1b8d56"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;