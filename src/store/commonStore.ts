import { create } from "zustand";

interface CommonStore {
  curTab: string;
  setCurrentTab: (tabId: string) => void;
}

const useCommonStore = create<CommonStore>((set) => ({
  curTab: "exe",
  setCurrentTab: (tabId: string) => set((state) => ({ curTab: tabId })),
}));

export { useCommonStore };
