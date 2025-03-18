import { FaStar } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const Home = () => {
   
  const { data, error, isPending } = useFetch("https://dummyjson.com/products");

  return (
    <div className="container max-w-[1100px] rounded-xl ml-auto mr-auto flex flex-col gap-7  bg-[rgb(62,62,62)]">
      <ul className="flex flex-wrap gap-[18px] p-[30px]">
        {data && data.products.map((i) => (
          <Link to={`/products/${i.id}`}
            key={i.id}
            className="bg-[rgb(35,35,35)] p-4 rounded-xl flex flex-col gap-4 w-[100%] max-w-[333px]"
            
          >
            <img
              src={i.thumbnail}
              alt={i.title}
              className="hover:scale-[1.1] transition-transform duration-300"
            />
            <div className="flex items-start justify-between">
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
                  ${(i.price - (i.price / 100) * i.discountPercentage).toFixed(2)}
                </p>
              </div>

              <BsBasket2 className="w-[40px] h-[40px] hover:scale-[1.1]" />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
