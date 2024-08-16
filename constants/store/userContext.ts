import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

enum Frequency {
    WEEK = "semanalmente", 
    BIWEEKLY = "quinzenal",
    MONTH = "mensalmente"
}

export type Store = {
    login: string,
    frequency: Frequency,
    day: string,
    city: string,
    loading: boolean,
}

type StateProps = {
    data: Store | null
    save: (data: Store) => void
    remove: () => void
}

export const useContextStore = create(
    persist<StateProps>(
        (set) => ({
            data: null,

            save: (data: Store) => set(() => ({ data })),
            remove: () => set(() => ({ data: null })),
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)