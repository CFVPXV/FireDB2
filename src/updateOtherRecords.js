import { app, db, auth } from "./initFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const patientID = document.querySelector("#pid")
const obesity = document.querySelector("#obesity");
const smoking = document.querySelector("#smoking");
const weight = document.querySelector("#weightloss");
const alcohol = document.querySelector("#alcohol");
const submit = document.querySelector("#submit");
const goBack = document.querySelector("#goBack");

onAuthStateChanged(auth, (user) => {
    if (user) {


        const updateData = async () => {
            const docRef = doc(db, "patientData", patientID.value);
            try {
                await setDoc(docRef, {
                    "Alcohol use": alcohol.value,
                    "Smoking": smoking.value,
                    "Weight Loss": weight.value,
                    "Obesity": obesity.value
                }, { merge: true })
                alert("Data update successful");
            } catch {
                alert("Access denied!");
            }

        }

        const backButton = () => {
            window.history.back();
        }

        submit.addEventListener('click', updateData);

        goBack.addEventListener('click', backButton);
    }
    else {
        alert("Error finding user!")
    }
})

