import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("userCredential:", userCredential);
        return getUserData(userCredential);

    } catch (error) {
        throw error;
    }
}

export const registerWithEmailAndPassword = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(auth.currentUser);

        return getUserData(userCredential);
    } catch (error) {
        throw error;
    }
}

const getUserData = (userCredential) => {
    const user = userCredential.user;
    const token = user.stsTokenManager.accessToken;
    return userData = { user, token };
}