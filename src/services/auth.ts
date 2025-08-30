// services/auth.ts
import Cookies from "js-cookie";
import { COOKIE_KEYS } from "../config/constants";

export const isAuthenticated = (): boolean => !!Cookies.get(COOKIE_KEYS.TOKEN);
