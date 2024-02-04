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

export { useModal }
