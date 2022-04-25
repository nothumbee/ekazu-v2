import React, { useState, useEffect, useCallback, useRef } from "react";
import AuthUserContext from "./context";
import { login, setAxiosToken, validateToken } from "./actions";
import axe from "../../helpers/axios";

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const token = useRef(localStorage.getItem("token"));

  useEffect(() => {
    // Retrieves and validates token upon mounting once
    const checkToken = async () => {
      if (!token.current) {
        resetAuth();
        setChecking(false);
        return;
      }
      try {
        const user = await validateToken(token.current);
        setUser(user);
      } catch (error) {
        console.error("error", error);
        resetAuth();
      } finally {
        setChecking(false);
      }
    };
    checkToken();
  }, [resetAuth]);

  useEffect(() => {
    // Add the axios interceptor to response, logs out the user on error
    axe.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401 && token.current) {
          resetAuth();
        }
        return Promise.reject(error);
      }
    );
  }, [resetAuth]);

  const handleLogin = useCallback(
    async ({ username, password }, onSuccess) => {
      try {
        const { token, user } = await login(username, password);
        setAxiosToken(token);
        setUser(user);
        onSuccess();
      } catch (error) {
        console.log("error", error);
        resetAuth();
      }
    },
    [resetAuth]
  );

  const resetAuth = useCallback(() => {
    token.current = null;
    setUser(null);
    setAxiosToken(null);
  }, []);

  if (checking) {
    // TODO loader
    return null;
  }

  return (
    <AuthUserContext.Provider value={{ user, login: handleLogin, logout: resetAuth }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default Auth;
