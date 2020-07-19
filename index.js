        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "YOUR-API-KEY",
            authDomain: "example.firebaseapp.com",
            databaseURL: "https://example.firebaseio.com",
            projectId: "YOUR-PROJECT-ID",
            storageBucket: "example.appspot.com",
            messagingSenderId: "messagingSenderId",
            appId: "YOUR-appId"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // node refrence
        var userID ="userID"
        var firebaseRef = firebase.database()

        // data to store
        var data = {
            username:"wadiemendja",
            password:"UserPassword"
        }

        // store data in a node with a random unique key
        firebaseRef.ref('users/')
        firebaseRef.push(data)
        /*

        root
          |____ users
                  |____-MCadGHUbDSEjwx_Ma
                               |_________ username:"wadiemendja"
                               |_________ password:"UserPassword"

        */ 

        // store data in a node with a given key
        firebaseRef.ref('users/'+userID)
        firebaseRef.set(data)
        /*

        root
          |____ users
                  |____userID
                          |___ username:"wadiemendja"
                          |___ password:"UserPassword"
                               
        */ 

        // update data
        var newData = {
            username:"anotherUsername",
            password:"anotherPassword"
        }
        var firebaseRef = firebase.database().ref('users/'+userID)
        firebaseRef.update(newData)

        // remove data
        var firebaseRef = firebase.database().ref('users/'+userID)
        firebaseRef.remove()

        // Read data
        // visit this repo: https://github.com/wadiemendja/retrieve-data-firebase-login-example
