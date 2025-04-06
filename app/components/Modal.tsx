import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          onClick={() => setModalOpen(false)}
          className="hover:bg-none absolute right-5 top-4 cursor-pointer"
        >
          <AiOutlineClose size={20} />
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;
