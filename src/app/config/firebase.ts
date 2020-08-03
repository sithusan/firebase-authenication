const apiKey: string =
  process.env.API_KEY || "AIzaSyAJSJFxp4MpUEuZ_025DxBwnlDRSilVM5s";
const authDomain: string =
  process.env.AUTH_DOMAIN || "test-authenication-f4abb.firebaseapp.com";
const databaseURL: string =
  process.env.DATABASE_URL || "test-authenication-f4abb";
const projectId: string = process.env.PROJECT_ID || "test-authenication-f4abb";
const storageBucket: string =
  process.env.STORAGE_BUCKET || "test-authenication-f4abb.appspot.com";
const messagingSenderId: string =
  process.env.MESSAGING_SENDER_ID || "498215024399";
const appId: string =
  process.env.APP_ID || "498215024399:web:05fa3621c8ec7c7acb307a";
const measurementId: string = process.env.MEASUREMENT_ID || "G-SLXNEB1NPF";

export default {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
