import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC6-ybpjUdEe5lFGyyq5Z7CYxS8-Tin4wM",
    authDomain: "search-209611.firebaseapp.com",
    databaseURL: "https://search-209611.firebaseio.com",
    projectId: "youtube-search-209611",
    storageBucket: "",
    messagingSenderId: "690206464152"
  };


  const fire = firebase.initializeApp(config);
  export default fire;
