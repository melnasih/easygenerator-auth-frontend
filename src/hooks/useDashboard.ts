import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { UpdateUserData } from "../store/slices/UserInfo.slice";
import Cookies from "js-cookie";
import { User, UserDataPayload } from "../types/auth";
import { COOKIE_KEYS } from "../config/constants";

// ---- helpers
const safeParseJSON = <T>(value: string | undefined): T | null => {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch (err) {
    console.error("Invalid JSON in cookie:", value, err);
    return null;
  }
};

export const useDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    // clear cookies
    Cookies.remove(COOKIE_KEYS.TOKEN);
    Cookies.remove(COOKIE_KEYS.USERNAME);
    // clear redux state
    const token: string | null = null;
    const user: User | null = null;

    const payload: UserDataPayload = { token, user };
    dispatch(UpdateUserData(payload));

    toast.success("You have been logged out. See you soon!");
    navigate("/signin");
  }, [navigate, dispatch]);

  const user = useMemo(
    () => safeParseJSON<User>(Cookies.get(COOKIE_KEYS.USERNAME)),
    [Cookies.get(COOKIE_KEYS.USERNAME)]
  );

  return {
    user,
    handleLogout,
  };
};
