import { IDataModal } from '@/interfaces/interfaces'
import { create } from 'zustand'

// import { persist, createJSONStorage } from 'zustand/middleware'

interface UseModal {
    modalVisible: boolean,
    dataModal: IDataModal,
    showModal: () => void,
    hideModal: () => void,
    setDataModal: (dataModal: IDataModal) => void,
}

const useModal = create<UseModal>()((set, get) => ({
    modalVisible: false,
    dataModal: {},
    showModal: () => set({ modalVisible: true }),
    hideModal: () => set({ modalVisible: false }),
    setDataModal: (dataModal) => set({ dataModal }),
}))

interface UseCounter {
    correct: number,
    inCorrect: number,
    setCorrect: () => void,
    setInCorrect: () => void,
}

const useCounter = create<UseCounter>((set, get) => ({
    correct: 0,
    inCorrect: 0,
    setCorrect: () => set((state) => ({ correct: state.correct + 1 })),
    setInCorrect: () => set((state) => ({ inCorrect: state.inCorrect - 1 })),
}))

export { useModal, useCounter }
