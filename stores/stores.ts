import { IUseCounter, IUseModal } from '@/interfaces/interfaces'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useModal = create<IUseModal>()((set, get) => ({
    modalVisible: false,
    dataModal: {},
    showModal: () => set({ modalVisible: true }),
    hideModal: () => set({ modalVisible: false }),
    setDataModal: (dataModal) => set({ dataModal }),
}))

const useCounter = create<IUseCounter>()(persist((set, get) => ({
    correct: 0,
    inCorrect: 0,
    setCorrect: () => set((state) => ({ correct: state.correct + 1 })),
    setInCorrect: () => set((state) => ({ inCorrect: state.inCorrect - 1 })),
}),
    {
        name: 'quiz-js-counter-storage',
        storage: createJSONStorage(() => localStorage),
    },
))

export { useModal, useCounter }
