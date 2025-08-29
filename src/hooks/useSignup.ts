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


const signupSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one letter, one number, and one special character"
    ),
});

type SignupFormData = z.infer<typeof signupSchema>;

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = useCallback(
    async (data: SignupFormData) => {
      setIsLoading(true);
      try {
        const response = await authAPI.signup(data);
        const { token, user, expiration } = response;
         // cookies
         Cookies.set(COOKIE_KEYS.TOKEN, token, { expires: Number(expiration) });
         Cookies.set(COOKIE_KEYS.USERNAME, JSON.stringify(user), {
           expires: Number(expiration),
         });
        dispatch(UpdateUserData({ token, user }));
        toast.success("Account created successfully!");
        navigate("/dashboard");
      } catch (error: any) {
        const message =
          error.response?.data?.message || "Failed to create account";
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
