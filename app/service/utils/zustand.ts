import { create } from 'zustand';
import { User } from '../types/user';

export const useUserStore = create<{
  user: User | null;
  setUser: (user: User) => void;
}>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
}));
