import { app, auth, db } from "./initFirebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const idPortion = document.querySelector("#pid");
const submitButton = document.querySelector("#submit");
const goBack = document.querySelector('#goBack');
const output = document.getElementById("data");

onAuthStateChanged(auth, async (user) => {

    if (user) {

        const fromData = async () => {
            const docRef = doc(db, 'patientData', idPortion.value);

            try {
                const docSnap = await getDoc(docRef);
                alert("Permission Granted!");
                if (docSnap.exists()) {
                    output.innerHTML = "";
                    for (const [key, value] of Object.entries(docSnap.data())) {
                        let content = document.createElement('span');
                        content.textContent = key + ": " + value;
                        output.appendChild(content);
                        console.log(value);
                    }
                }
                else {
                    alert("Error in finding document!");
                }
            }
            catch {
                alert("Access Denied!")
            }


        }

        const backButton = () => {
            window.history.back();
        }

        submitButton.addEventListener('click', fromData);
        goBack.addEventListener('click', backButton);
    }



    else {
        alert("Error getting user!")
    }

})

