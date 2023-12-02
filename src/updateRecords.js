import { onAuthStateChanged } from "firebase/auth";
import { app, auth, db } from "./initFirebase";
import { setDoc, doc } from "firebase/firestore";

const obesity = document.querySelector("#obesity");
const smoking = document.querySelector("#smoking");
const weight = document.querySelector("#weightloss");
const alcohol = document.querySelector("#alcohol");
const submit = document.querySelector("#submit");
const goBack = document.querySelector("#goBack");

onAuthStateChanged(auth, (user) => {

    if (user) {

        const updateData = async () => {
            const docRef = doc(db, 'patientData', auth.currentUser.uid);
            try {
                setDoc(docRef, {
                    "Alcohol use": alcohol.value,
                    "Obesity": obesity.value,
                    "Smoking": smoking.value,
                    "Weight Loss": weight.value
                }, { merge: true });
                alert("Data Updated Successfully");
            } catch {
                alert("Error setting data");
            }

            const backButton = () => {
                window.history.back();
            }
        }

        submit.addEventListener('click', updateData);

        goBack.addEventListener('click', backButton);

    }
    else {
        console.log("Error fetching user!")
    }
})