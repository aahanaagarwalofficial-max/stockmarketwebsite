// 1. Paste the config from Firebase console > Project settings > Your apps > Web app.
export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE",
  appId: "PASTE"
};

// 2. Login emails are team1@<domain> ... team8@<domain> and organizer@<domain>.
//    If you change this, change it in firestore.rules too.
export const EMAIL_DOMAIN = "stocksim.example.com";
