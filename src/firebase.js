import Firebase from "firebase";

let config = {
  databaseURL: "https://rider-dash-d2a34.firebaseio.com",
  projectId: "rider-dash-d2a34"
};

const firebaseApp = Firebase.initializeApp(config);

export const firebase_db = firebaseApp.database();
