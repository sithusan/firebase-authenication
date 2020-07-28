import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { createConnection, Connection } from "typeorm";
import * as firebase from "firebase";

var app = firebase.initializeApp({
  apiKey: "AIzaSyAJSJFxp4MpUEuZ_025DxBwnlDRSilVM5s",
  authDomain: "test-authenication-f4abb.firebaseapp.com",
  databaseURL: "https://test-authenication-f4abb.firebaseio.com",
  projectId: "test-authenication-f4abb",
  storageBucket: "test-authenication-f4abb.appspot.com",
  messagingSenderId: "498215024399",
  appId: "1:498215024399:web:05fa3621c8ec7c7acb307a",
  measurementId: "G-SLXNEB1NPF",
});

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/schema/resolvers/**/*.{ts,js}"],
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const token = req.headers.authorization || "";
      const user = getUser(token);
      return { user };
    },
  });


  server.listen().then(({ url }) => {
    console.log(url);
  });

  const connection: Connection = await createConnection();
  if (connection.isConnected) console.log("Database connection is ready.");
}

bootstrap();
