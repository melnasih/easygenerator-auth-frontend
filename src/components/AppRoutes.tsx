// AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";
import Dashboard from "./Dashboard";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/signin" replace />} />
    <Route path="/signup" element={<SignupForm />} />
    <Route path="/signin" element={<SigninForm />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </Routes>
);
