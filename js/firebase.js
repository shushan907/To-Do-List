var firebaseConfig = {
    apiKey: "AIzaSyDZACYmVZPKuaq8faqEsOUbksggSMbhmZE",
    authDomain: "todo-list-eddab.firebaseapp.com",
    databaseURL: "https://todo-list-eddab.firebaseio.com",
    projectId: "todo-list-eddab",
    storageBucket: "todo-list-eddab.appspot.com",
    messagingSenderId: "472624710617",
    appId: "1:472624710617:web:d40b8e459389e751d68fc8",
    measurementId: "G-LFTR5TB6Y0"
  };
  firebase.initializeApp(firebaseConfig);

var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        return true;
      },
      uiShown: function() {
        document.getElementById('loader').style.display = 'none';
      }
    },
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInFlow: 'popup',
    signInSuccessUrl: 'index.html',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: 'index.html',
  };
  ui.start('#firebaseui-auth-container', uiConfig);

  const database = firebase.database();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.querySelector('.login').innerHTML = 'Log out';
      //const list = database.ref(`/${user.uid}`);
    } else {
      document.querySelector('.login').innerHTML = 'Log in'
    }
  });