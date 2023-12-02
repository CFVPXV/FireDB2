import { doc, getDoc } from "firebase/firestore";
import { app, auth } from "./initFirebase";
import { db } from "./initFirebase";
import { onAuthStateChanged } from "firebase/auth";



onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User found")

        const output = document.getElementById("data");
        const goBack = document.querySelector("#goBack");



        const getData = async () => {

            const docRef = doc(db, "patientData", auth.currentUser.uid);

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log(docSnap.data());
                for (const [key, value] of Object.entries(docSnap.data())) {
                    let content = document.createElement('span');
                    content.textContent = key + ": " + value;
                    output.appendChild(content);
                    console.log(value);
                }
            }
            else {
                console.log("No such document!");
            }
        }

        const backButton = () => {
            window.history.back();
        }

        getData();

        goBack.addEventListener('click', backButton);

    }
    else {
        console.log("error finding user");
    }
})

