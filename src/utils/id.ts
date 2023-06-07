import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz");

export const longid = () => nanoid(18);

export const shortid = () => nanoid(12);
