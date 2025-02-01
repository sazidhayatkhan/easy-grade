import React from "react";
import Image from "next/image";
type Props = {};

const ModalTwo: React.FC<Props> = (props) => {
  const openModal = () => {
    const modal = document.getElementById("my_modal_33") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="bg-transparent" onClick={openModal}>
        How to use
      </button>
      <dialog id="my_modal_33" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello dear colleagues ! ❤</h3>
          <div>
            <p className="pt-3">1. Enter the total average mark</p>
            <p className="py-1">2. Input student''s score</p>
            <p>3. Press on calculate grade</p>
            <p className="py-1">
              4. For next student just click refresh and put next student's score
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalTwo;
