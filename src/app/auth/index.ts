import * as firebase from "firebase/app";
import "firebase/auth";
import { Auth } from "schema/types/Auth";
import { AddUserInput } from "schema/resolvers/inputTypes/AddUserInput";
import { User } from "schema/types/User";

export const getCurrentUser = async (): Promise<User> => {
  const user = await firebase.auth().currentUser;
  if (user) {
    return {
      id: user.uid,
      name: user.displayName,
      email: user.email,
    };
  } else {
    return {
      id: "User is not logged in",
      name: "User is not logged in",
      email: "User is not logged in",
    };
  }
};

export const signInWithPassword = async ({
  email,
  password,
}: AddUserInput): Promise<Auth> => {
  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const token = await user.getIdToken();
    return {
      uid: user.uid,
      message: "Success",
      token,
    };
  } catch (error) {
    return {
      message: error.message,
      errors: error.code,
    };
  }
};

export const siginInWithToken = async (token: string): Promise<Auth> => {
  try {
    const { user } = await firebase.auth().signInWithCustomToken(token);
    return {
      uid: user.displayName,
      message: "Success",
      token,
    };
  } catch (error) {
    return {
      message: error.message,
      errors: error.code,
    };
  }
};

export const signUp = async ({
  name,
  email,
  password,
}: AddUserInput): Promise<Auth> => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    user.updateProfile({
      displayName: name,
    });
    const token = await user.getIdToken();
    return {
      uid: user.uid,
      message: "Success",
      token,
    };
  } catch (error) {
    return {
      message: error.message,
      errors: error.code,
    };
  }
};
