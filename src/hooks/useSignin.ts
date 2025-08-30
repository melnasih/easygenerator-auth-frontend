import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { UpdateUserData } from "../store/slices/UserInfo.slice";
import { COOKIE_KEYS } from "../config/constants";

const signinSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type SigninFormData = z.infer<typeof signinSchema>;

export const useSignin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = useCallback(
    async (data: SigninFormData) => {
      setIsLoading(true);
      try {
        const response = await authAPI.signin(data);
        const { token, user, expiresIn } = response;

        // cookies
        Cookies.set(COOKIE_KEYS.TOKEN, token, { expires: Number(expiresIn) });
        Cookies.set(COOKIE_KEYS.USERNAME, JSON.stringify(user), {
          expires: Number(expiresIn),
        });

        dispatch(UpdateUserData({ token, user }));
        toast.success("Signed in successfully!");
        navigate("/dashboard");
      } catch (error: any) {
        const message = error.response?.data?.message || "Failed to sign in";
        toast.error(message);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate, dispatch]
  );

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit,
  };
};
