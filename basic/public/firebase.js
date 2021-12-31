  const firebaseConfig = {
            apiKey: "AIzaSyBrCfkAiDG4Gof5pxadsGEvECSdYz7Y84M",
            authDomain: "tutorial-vuejs-ec3f4.firebaseapp.com",
            projectId: "tutorial-vuejs-ec3f4",
            storageBucket: "tutorial-vuejs-ec3f4.appspot.com",
            messagingSenderId: "122248413889",
            appId: "1:122248413889:web:e58e99fe20f8812805ca40",
            databaseURL: "https://tutorial-vuejs-ec3f4-default-rtdb.asia-southeast1.firebasedatabase.app"
        };

        // Initialize Firebase
        const app = firebase.initializeApp(firebaseConfig);
        const db = firebase.database();
        const kelasRef = db.ref('kelas');