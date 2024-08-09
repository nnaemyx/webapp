import { create } from 'zustand';

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
  setLoading: (loading: boolean) => void;
  setField: (field: string, value: string) => void;
  resetFields: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  email: '',
  password: '',
  confirmPassword: '',
  fullname: '',
  username: '',
  phoneNumber: '',
  reference: '',
  location: '',
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  resetFields: () => set({
    email: '',
    password: '',
    confirmPassword: '',
    fullname: '',
    username: '',
    phoneNumber: '',
    reference: '',
    location: '',
  }),
}));

export default useAuthStore;
