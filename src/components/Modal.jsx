import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
const Modal = ({ selectProduct: p, setShowModalMenu, showModalMenu }) => {
  useEffect(() => {
    if (showModalMenu) {
      document.getElementById("my_modal_3").showModal();
    }
  }, [showModalMenu]);

  function closeModal() {
    setShowModalMenu(false);
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal p-4">
        <div className="modal-box p-4 z-10">
          <form method="dialog">
            <button
              onClick={() => closeModal()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="flex flex-col justify-center gap-2">
            <img src={p.thumbnail} alt={p.title} />
            <div className=" flex items-center justify-between">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{p.rating}</span>
              </div>
            </div>
            <p className="py-4">{p.description}</p>
            <div className=" flex justify-between items-center">
                 <div className="w-[80px] flex flex-col gap-2">
              <del className="bg-error px-[16px] py-[2px] rounded-2xl">
                ${p.price}
              </del>
              <p className="bg-success px-[16px] py-[1px] rounded-2xl">
                ${(p.price - (p.price / 100) * p.discountPercentage).toFixed(2)}
              </p>
            </div>
            <div className="">
               <p className="text-secondary px-5">Category:</p>
               <p className="bg-neutral text-secondary p-1 px-5 rounded-3xl">{p.category}</p>  
            </div>
            <BsBasket2 className="w-[40px] h-[40px] hover:scale-[1.1]" />
            </div>
           
          </div>
        </div>
        <div className="fixed w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.8)]"></div>
      </dialog>
    </>
  );
};

export default Modal;
