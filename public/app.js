(function(){
  var config = {
    apiKey: "AIzaSyA-3Ai0H2BxVbIgeqIRKdz2EDodF9ZqhrU",
    authDomain: "mood-toolkit.firebaseapp.com",
    databaseURL: "https://mood-toolkit.firebaseio.com",
    projectId: "mood-toolkit",
    storageBucket: "mood-toolkit.appspot.com",
    messagingSenderId: "465684414955"
  };
  firebase.initializeApp(config);

    //getelement by ID
    const preObject = document.getElementById('object');
    
    //create DB reference
    const dbRefObject = firebase.database().ref().child('object');
    
    //sync object changes
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });
    
    
}())