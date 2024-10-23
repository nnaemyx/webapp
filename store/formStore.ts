import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";
import { json } from "node:stream/consumers";
import { callApi } from "@zayne-labs/callapi";

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
  verifyOtp: (token: string) => Promise<void>;
  logout: () => void;
  // initialize: () => void;
  getUser: () => void;
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
            process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? "/api/goer/login" : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/goer/login`,
            { email, password }
          );
          set((state) => {
            state.isLoggedIn = true;
            state.error = null;
            state.email = response.data.message.email
            state.success = response.data.message || "Login successful!";
            state.isLoading = false;
            state.userId = response.data.userId; 
          });
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
            process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? "/api/goer/signup" : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/goer/signup`,
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
            state.user = response.data.User;
            state.isLoading = false;
            state.error = null;
            state.success = response.data.message || "Signup successful!";
            state.userId = response.data.User.id; 
          });
          localStorage.setItem('user',response.data.User.id)
        } catch (error: any) {
          set((state) => {
            state.isLoggedIn = false;
            state.success = null;
            state.error = error.response?.data.message || error.message || "An error occurred";
          });
        }
      },

      verifyOtp: async (token: string) => {
        // const { userId } = useAuthStore.getState();
        const id = localStorage.getItem('user') || '{}'
        const {data, error} = await callApi<{message: string}>(
          process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? `/api/goer/verifyotp/${id}` : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/goer/verifyotp/${id}`,
          {
            method: 'POST',
            body: {token}
          }
        );
        if(error){
          set((state) => {
            state.success = null;
            state.error =error?.message || "An error occurred";
          });
          console.log(data, error.message)
        }else{
          set((state) => {
            state.isLoading = false;
            state.error = null;
            state.success = data?.message || "OTP verified successfully!";
          });
          console.log(data, error, id, localStorage.getItem('user') )
          // localStorage.removeItem('user')
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
      getUser: async () => {
        const {data, error} = await callApi(process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? "/api/goer/user" : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/goer/user`, { credentials: 'same-origin' });
        console.log(data, error)
      },

      // initialize: () => {
      //   const storedUser = localStorage.getItem("user");
      //   if (storedUser) {
      //     const user = JSON.parse(storedUser);
      //     set((state) => {
      //       state.isLoggedIn = true;
      //       state.user = user;
      //       state.userId = user.userId; 
      //     });
      //   }
      // },
    }))
  )
);


export default useAuthStore;
