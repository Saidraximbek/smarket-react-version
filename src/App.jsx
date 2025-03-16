import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useFetch } from "./hooks/useFetch";
import { FaStar } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import Modal from "./components/Modal";
function App() {

  const {
    data: info,
    error,
    isPending,
  } = useFetch("https://dummyjson.com/products");

const [showModalMenu, setShowModalMenu] = useState(false);
const [selectProduct, setSelectProduct] = useState(null)
const openModal = (prod) => {
  setShowModalMenu(true)
  setSelectProduct(prod)
  console.log(prod);
  
  // console.log(info.products[id-1]);
  
  

}

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }
  if (isPending) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="containerr max-w-[1100px] rounded-xl ml-auto mr-auto flex flex-col gap-5">
      <Navbar />
      {showModalMenu && <Modal selectProduct={selectProduct} showModalMenu={showModalMenu} setShowModalMenu={setShowModalMenu}/>}
      <ul className="flex flex-wrap gap-[18px] p-[10px]">
        {info &&
          info.products.map((i) => {
            return (
              <li
                key={i.id}
                className="bg-[rgb(35,35,35)] p-4 rounded-xl flex flex-col gap-4 "
                onClick={()=>{
                  openModal(i)
                  
                }}
              >

                <img src={i.thumbnail} alt={i.title} className="hover:scale-[1.1]" />
                <div className="flex items-start justify-between ">
                  <h2 className="w-[150px] h-[50px]">{i.title}</h2>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-400 flex w-6" />
                    <span>{i.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="w-[80px] flex flex-col gap-2">
                  <del className="bg-error px-[16px] py-[2px] rounded-2xl">
                    ${i.price}
                  </del>
                  <p className="bg-success px-[16px] py-[1px] rounded-2xl">
                    $
                    {(i.price - (i.price / 100) * i.discountPercentage).toFixed(
                      2
                    )}
                  </p>
                </div>

                <BsBasket2 className="w-[40px] h-[40px] hover:scale-[1.1]" />
                </div>
              
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
