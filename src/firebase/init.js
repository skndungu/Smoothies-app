  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCrmbWTjoadHI5xEMgfDZ_Q7AJJzflZrNI",
      authDomain: "smoothies-course-20928.firebaseapp.com",
      databaseURL: "https://smoothies-course-20928.firebaseio.com",
      projectId: "smoothies-course-20928",
      storageBucket: "smoothies-course-20928.appspot.com",
      messagingSenderId: "79177106154",
      appId: "1:79177106154:web:69080f9ed11cd082"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //   firebaseApp.firestore().settings({
  //       timestampsInSnapshots: true
  //   })
  //Export firestore database

  export default firebaseApp.firestore()