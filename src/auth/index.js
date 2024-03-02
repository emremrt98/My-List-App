import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;
        console.log("Token: ", token);
        console.log("User logged in: ", user);

        return userData = { user, token };

    } catch (error) {
        console.log("Error logging in: ", error);
        throw error;
    }
}    