import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

interface AuthState {
  email: string;
  password: string;
  confirmPassword: string;
  fullname: string;
  username: string;
  phoneNumber: string;
  reference: string;
  location: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  isVerified: boolean;
  userId: string | null;
  user: any;  // Adjust this type according to your user object structure
  error: string | null;
  success: string | null; // Add a success message
  setLoading: (loading: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    confirmPassword: string,
    fullname: string,
    username: string,
    phoneNumber: string,
    reference: string,
    location: string
  ) => Promise<void>;
  verifyOtp: (otp: string) => Promise<void>;
  logout: () => void;
  initialize: () => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    immer((set) => ({
      email: "",
      password: "",
      confirmPassword: "",
      fullname: "",
      username: "",
      phoneNumber: "",
      reference: "",
      location: "",
      isLoading: false,
      isLoggedIn: false,
      isVerified: false,
      userId: null,
      user: null,
      error: null,
      success: null, // Initialize success state
      setLoading: (loading: boolean) => set({ isLoading: loading }),

      login: async (email: string, password: string) => {
        try {
          const response = await axios.post(
            "https://Entrypalbackend.onrender.com/api/goer/login",
            { email, password }
          );
          set((state) => {
            state.isLoggedIn = true;
            state.error = null;
            state.success = response.data.message || "Login successful!";
            state.isLoading = false;
            state.user = response.data;
            state.userId = response.data.userId; 
          });
          localStorage.setItem("user", JSON.stringify(response.data));
        } catch (error: any) {
          set((state) => {
            state.isLoggedIn = false;
            state.success = null;
            state.error = error.response?.data.message || error.message || "An error occurred";
          });
        }
      },

      signup: async (
        email: string,
        password: string,
        confirmPassword: string,
        fullname: string,
        username: string,
        phoneNumber: string,
        reference: string,
        location: string
      ) => {
        try {
          const response = await axios.post(
            "https://Entrypalbackend.onrender.com/api/goer/signup",
            {
              email,
              password,
              confirmPassword,
              fullname,
              username,
              phoneNumber,
              reference,
              location,
            }
          );
          set((state) => {
            state.isLoggedIn = true;
            state.user = response.data;
            state.isLoading = false;
            state.error = null;
            state.success = response.data.message || "Signup successful!";
            state.userId = response.data.User.id; 
          });
          localStorage.setItem("user", JSON.stringify(response.data.User));
        } catch (error: any) {
          set((state) => {
            state.isLoggedIn = false;
            state.success = null;
            state.error = error.response?.data.message || error.message || "An error occurred";
          });
        }
      },

      verifyOtp: async (otp: string) => {
        try {
          const { userId } = useAuthStore.getState();
          const response = await axios.post(
            `https://Entrypalbackend.onrender.com/api/goer/verifyotp/${userId}`,
            {
              token: otp,
            }
          );
          set((state) => {
            state.isLoading = false;
            state.isVerified = true;
            state.error = null;
            state.success = response.data.message || "OTP verified successfully!";
          });
        } catch (error: any) {
          set((state) => {
            state.success = null;
            state.error = error.response?.data.message || error.message || "An error occurred";
          });
        }
      },

      logout: () => {
        set((state) => {
          state.user = null;
          state.isLoading = false;
          state.isLoggedIn = false;
          state.userId = null;
        });
        localStorage.removeItem("user");
      },

      initialize: () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          set((state) => {
            state.isLoggedIn = true;
            state.user = user;
            state.userId = user.userId; 
          });
        }
      },
    }))
  )
);


export default useAuthStore;
