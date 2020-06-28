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

  const userName = document.getElementById('regUserName');
  const loginEmail =  document.getElementById('loginEmail');
  const loginPassword =  document.getElementById('loginPassword');
  const regEmail =  document.getElementById('regEmail');
  const regPassword =  document.getElementById('regPassword');
  const login = document.getElementById('loginForm');
  const register = document.getElementById('registerForm');

  const database = firebase.database();
  const rootRef = database.ref('/users');

  register.addEventListener('submit', (e) => {
    e.preventDefault();
    let i = 0;
    rootRef.child(i).set({
        Email: regEmail.value,
        password: regPassword.value,
        userName: userName.value,
    });
    i++;
    displayChange('.loginRegister', 'none');
  });

  /*login.addEventListener('submit', (e) => {
    e.preventDefault();

    displayChange('.loginRegister', 'none');
  });*/