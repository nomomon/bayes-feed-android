import app from "../../firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { setDoc, getFirestore, increment, doc, getDoc } from 'firebase/firestore/lite';
import { Freq } from '../interface/Freq';
import { Score } from '../interface/Score';
import { Words } from '../interface/Words';

export const db = getFirestore(app);

// export const auth = getAuth();

const UID = "g6p7fUCzhFYN60QnaALiq7cgaa13"

export const provider = new GoogleAuthProvider();

// export async function signInWithGoogle() {
//     try {
//         await signInWithRedirect(auth, provider);
//     } catch (error) {
//         console.log(error);
//     }
// }

export async function getUserRss(): Promise<string[]> {
    // if (auth.currentUser === null) {
    //     return { like: {}, dislike: {} };
    // }
    const feedsRef = doc(db, `/users/${UID}/feeds/feeds`);
    const feedsSnap = await getDoc(feedsRef);
    const feeds = feedsSnap.data().feeds as string[];

    return feeds || [];
}

export async function getUserWords(): Promise<Words> {
    // if (auth.currentUser === null) {
    //     return { like: {}, dislike: {} };
    // }
    const wordsRef = doc(db, `/users/${UID}/words/words`);
    const wordsSnap = await getDoc(wordsRef);
    const words = wordsSnap.data() as Words;

    return words || { like: {}, dislike: {} };
}

export async function getUserFreq(): Promise<Freq> {
    // if (auth.currentUser === null) {
    //     return { like: 0, dislike: 0 };
    // }

    const freqDoc = doc(db, 'users', UID);
    const freqSnapshot = await getDoc(freqDoc);

    const freq = freqSnapshot.data() as Freq;

    return freq || { like: 0, dislike: 0 };
}

export async function patchUserWords(incrementedWords: Words) {
    // if (auth.currentUser === null) {
    //     console.log('no user');
    //     return;
    // }

    const wordsRef = doc(db, `/users/${UID}/words/words`);
    const wordsSnap = await getDoc(wordsRef);
    const wordsData = wordsSnap.data() as Words;

    if (wordsData) {
        setDoc(wordsRef, incrementedWords, { merge: true });
    }
    else {
        setDoc(wordsRef, incrementedWords);
    }
}

export async function patchUserFreq(score: Score) {
    // if (auth.currentUser === null) {
    //     console.log('no user');
    //     return;
    // }

    const freqDoc = doc(db, 'users', UID);
    const freqSnapshot = await getDoc(freqDoc);

    if (freqSnapshot.exists()) {
        setDoc(freqDoc, {
            like: increment(score.like),
            dislike: increment(score.dislike)
        }, { merge: true });
    }
    else {
        setDoc(freqDoc, {
            like: score.like,
            dislike: score.dislike
        });
    }
}