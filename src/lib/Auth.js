import fb from 'firebase';

const config = fb.initializeApp({
  apiKey: "AIzaSyDRS6ADe43mjFYkBFl8D4kCi1EzaW6PSTk",
  authDomain: "reacttofire-2cd1f.firebaseapp.com",
  databaseURL: "https://reacttofire-2cd1f.firebaseio.com",
  projectId: "reacttofire-2cd1f",
  storageBucket: "reacttofire-2cd1f.appspot.com",
  messagingSenderId: "360239359081"  
});

export const fbConfig = config;

export const loggedIn = fbConfig.auth().currentUser;

export const signIn = (email, password) => {
  let uid = null;

  fbConfig.auth().signInWithEmailAndPassword(email, password) 
    .catch(err => { console.error(err); alert(err.message); });

  return {
    uid: fbConfig.auth().currentUser.uid,
    email: fbConfig.auth().currentUser.email
  }
}
