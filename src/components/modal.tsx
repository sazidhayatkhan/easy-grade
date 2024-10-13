import React from "react";
import Image from "next/image";
type Props = {};

const Modal: React.FC<Props> = (props) => {
  const openModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={openModal}>
        How to use
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello dear colleagues ! ❤</h3>
          <div>
            <p className="pt-3">1. Enter your desired average marks.</p>
            <p className="py-1">2. Enter the total marks for the area.</p>
            <p>3. Input the individual marks obtained by students.</p>
            <p className="py-1">
              4. Separate each student's marks using a comma (,) instead of a
              plus (+) symbol.
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
