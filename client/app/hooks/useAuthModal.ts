import {create} from 'zustand';

interface AuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: ()=> void;
}