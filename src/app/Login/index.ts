import * as firebase from "firebase";

export const login = async (
  email: string,
  password: string
): Promise<Boolean> => {
 var a = 
 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});

  return true;
};
