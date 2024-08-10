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
      setLoading: (loading: boolean) => set({ isLoading: loading }),

      login: async (email: string, password: string) => {
        try {
          const response = await axios.post(
            "https://Entrypalbackend.onrender.com/api/goer/login",
            { email, password }
          );
          if (response) {
            set((state) => {
              state.isLoggedIn = true;
              state.error = null;
              state.isLoading = false;
              state.user = response.data;
              state.userId = response.data.userId; // Adjust according to your API response
            });
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            set((state) => {
              state.error = "Login failed";
            });
          }
        } catch (error: any) {
          set((state) => {
            state.isLoggedIn = false;
            state.error = error.message || "An error occurred";
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
          if (response) {
            set((state) => {
              state.isLoggedIn = true;
              state.user = response.data;
              state.isLoading = false;
              state.error = null;
              state.userId = response.data.User.id; // Adjust according to your API response
            });
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            set((state) => {
              state.error = "Signup failed";
            });
          }
        } catch (error: any) {
          set((state) => {
            state.isLoggedIn = false;
            state.error = error.message || "An error occurred";
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
          if (response) {
            set((state) => {
              state.isLoading = false;
              state.isVerified = true;
              state.error = null;
            });
          } else {
            set((state) => {
              state.error = "OTP verification failed";
            });
          }
        } catch (error: any) {
          set((state) => {
            state.error = error.message || "An error occurred";
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
    }))
  )
);

export default useAuthStore;
