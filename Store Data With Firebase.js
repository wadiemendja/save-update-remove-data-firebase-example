//database config
        
          var firebaseConfig = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: ""
          };
  
          firebase.initializeApp(firebaseConfig);
        
        //end config
        
        var firebaseRef = firebase.database().ref().child('E-mails');
        
        function send() {
            
            let checker = 0 ;
            
            if (document.getElementById("name").value=="") {
                
                document.getElementById("name").style.border = "1px solid red" ;
                checker++ ;
                
            }
            
            if (document.getElementById("email").value=="") {
                
                document.getElementById("email").style.border = "1px solid red" ;
                checker++ ;
                
            }
            
            if (checker==0) {
                
                firebaseRef.push(document.getElementById("name").value);
                firebaseRef.push(document.getElementById("email").value);
                
                 document.getElementById("error").style.color="green";
                
                document.getElementById("error").innerHTML = "Your Info Sent Succussfully :) !";
                            
                document.getElementById("send").style.display = "none";
                document.getElementById("email").style.display = "none";
                document.getElementById("name").style.display = "none";
                document.getElementById("txt").style.display = "none";
                document.getElementById("txt2").style.display = "none";
                document.getElementById("myimg").style.visibility="visible";
            
            }
        
        }
