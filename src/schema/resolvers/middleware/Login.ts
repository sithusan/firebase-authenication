import { MiddlewareFn } from "type-graphql";

export const LogAccess: MiddlewareFn = ({ context, info }, next) => {
  console.log(`This is context ${context}`);
  const username: string = "guest";
  console.log(
    `Logging access: ${username} -> ${info.parentType.name}.${info.fieldName}`
  );
  return next();
};
