import { create } from 'zustand'

type Store = {
    credit: number
    setCredit: (credit: number) => void
}

export const useCreditBalanceStore = create<Store>((set) => ({
    credit: 0,
    setCredit: (credit: number) => set({ credit }),
}))