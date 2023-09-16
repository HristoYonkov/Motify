import * as Dialog from '@radix-ui/react-dialog';
import {IoMdClose} from 'react-icons/io';

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
  return (
    <div>
        ModalComponent!
    </div>
  )
}

export default Modal
    // <Dialog.Root
    //     open={isOpen}
    //     defaultOpen={isOpen}
    //     onOpenChange={onChange}
    // >
    //     <Dialog.Portal>
    //         <Dialog.Overlay
    //             className='
    //             bg-neutral-900
    //             backdrop-blur-sm
    //             fixed
    //         '
    //         />
    //     </Dialog.Portal>
    // </Dialog.Root>