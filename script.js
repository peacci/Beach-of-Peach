import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const form = document.getElementById("message-form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const timestamp = Date.now();
    set(ref(database, 'messages/' + timestamp), {
        name: name,
        message: message
    })
    .then(() => {
        alert("留言提交成功！");
        form.reset(); 
        })
    .catch((error) => {
        console.error("留言提交失败：", error);
    });
});