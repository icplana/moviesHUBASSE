// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6-QIiJl82goGSlGG1KgZBYBZSEcdmtGw",
    authDomain: "moviesassembler.firebaseapp.com",
    projectId: "moviesassembler",
    storageBucket: "moviesassembler.appspot.com",
    messagingSenderId: "474732458252",
    appId: "1:474732458252:web:3709439d46fe893db41929",
    measurementId: "G-4QDJ779LNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth( app )

export const registerEmail = async ( email, password ) => {

    const user = createUserWithEmailAndPassword( auth, email, password )
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    
        return user
    })
    .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        return error
        // ..
    });

    const resp = await user.then()
    return resp
}

export const signInEmail = async ( email, password ) => {
    const user = signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    return user
  })
  .catch((error) => {
    
    return error
  });


  const resp = user.then()
  console.log(resp)
  return resp
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
  
    const user = signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
  
      return user
    }).catch((error) => {
      console.log({error})
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      const email = error.customData.email;
      // // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
  
      return error
    })
  
    const resp = user.then()
    return resp

  } 

  



  // BBDD

  const FirebaseDB = getFirestore( app )


  export const getFavoritesDB = async ( userId ) => {
  
    const resp = await getDoc( doc( FirebaseDB, `${ userId }/favorites` ))
    

    if ( resp._document !== null ){
      const data = resp._document.data.value.mapValue.fields.favorites.mapValue.fields
      if ( data !== undefined ){
       
        let favorites = {}
        for( let [ key, value ] of Object.entries( data )){
          favorites = { ...favorites, [ key ]: value.arrayValue.values.map( each => Number(each.integerValue) | Number(each.stringValue) ) || [] }
        }
        return favorites
      }
    }
  
    return { comics: [], characters: [], creators: [], events: [], series: [], stories: []}
    
  }
  

  export const updateFavoriteDB = async ({ userId, favoritesList }) => {

    const newDoc = doc(FirebaseDB, `${ userId }` , 'favorites' )
    
  
    await setDoc( newDoc, {
       favorites: favoritesList 
    })
  }