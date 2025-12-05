import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
  toogle(): void;
};

export const useSideBarStore = create(
  persist<Store>(
    (set, get) => ({
      isOpen: true,
      setIsOpen: (value: boolean) =>
        set({
          ...get(),
          isOpen: value ?? get().isOpen,
        }),
      toogle: () =>
        set({
          ...get(),
          isOpen: !get().isOpen,
        }),
    }),
    { name: 'side-bar' },
  ),
);
