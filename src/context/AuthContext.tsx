import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
interface AuthProp {
  authState?: { access_token: string | null; refresh_token: string | null; authenticated: boolean | null };
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogIn?: (email: string, password: string) => Promise<any>;
  onLogOut?: () => Promise<any>;
}


export const API_URL = "http://localhost:57000/";
const AuthContext = createContext<AuthProp>({});

export const userAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    access_token: string | null;
    refresh_token: string | null;
    authenticated: boolean | null;
  }>({
    access_token: null,
    refresh_token: null,
    authenticated: null,
  });

  useEffect(() => {

    const loadToken = async () => {
      const a_token  = await SecureStore.getItemAsync("a_token");
      const r_token  = await SecureStore.getItemAsync("r_token");
      console.log("stored a_token:", a_token);
      console.log("stored r_token:", r_token);
      if (r_token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${a_token}`;
        setAuthState({
          access_token: a_token,
          refresh_token: r_token,
          authenticated: true
        })
      }
      
    }
    loadToken();
    
  }, []);

  const register = async (email: string, password: string) => {
    try {
      return await axios.post(`${API_URL}/api/v1/auth/singup`, { email, password });
    } catch (err) {
      return { error: true, msg: (err as any).response.data.msg };
    }
  }


  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/api/v1/auth/login`, { email, password });
      console.info("AuthContext.tsx:39 ~ login ~ resutl:", result);
      setAuthState({
        refresh_token: result.data.refresh_token,
        access_token: result.data.access_token,
        authenticated: true
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${result.data.access_token}`;

      await SecureStore.setItemAsync("a_token", result.data.access_token);

      await SecureStore.setItemAsync("r_token", result.data.refresh_token);

      return result;
    } catch (err) {
      return { error: true, msg: (err as any).response.data.msg };
    }
  }

  const logout = async () => {
    axios.defaults.headers.common["Authorization"] = ``;

    await SecureStore.deleteItemAsync("a_token");

    await SecureStore.deleteItemAsync("r_token");

    setAuthState({
      refresh_token: null,
      access_token: null,
      authenticated: false
    });
  }

  const value = {
    onRegister: register,
    onLogIn: login,
    onLogOut: logout,
    authState
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
