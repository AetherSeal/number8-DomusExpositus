import { create } from "zustand";

type TModalStore = {
  isOpen: boolean;
  setModal: (isOpen: boolean) => void;
};
export const useModalStore = create<TModalStore>((set) => ({
  isOpen: false,
  setModal: (isOpen: boolean) => set({ isOpen }),
}));
