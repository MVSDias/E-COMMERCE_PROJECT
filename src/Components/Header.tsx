import { SearchIcon, ShoppingCartIcon, Zap } from "lucide-react";
import type { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useCardProduct } from "../context/useCardProduct";

const Header = () => {
  const navigate = useNavigate();

  const { displayProductsFilteredbySearch, search, quantity } = useCardProduct();
  

  const handleInput = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 

    const value = event.target.value;
    console.log(value)
    
    displayProductsFilteredbySearch(value); // chamo a funçao e passo o q for sendo digitado
    
    
  }

  const handleCart = () => {
    navigate('/carrinho')
  }
  return (
    <div className="  flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-8 h-[130px] border border-b-[#39ff14]">
      <div>
        <Link to={"/"} className="flex items-center gap-3">
          <Zap className="w-[60px] h-[60px]" color="#39FF14" />

          <h1 className="text-[#39FF14] text-5xl font-bold">TechStore</h1>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={search}
          placeholder="Pesquisar produtos..."
          onChange={handleInput}
          className="border rounded-lg border-[#39FF14] w-84   
             text-green placeholder-gray-300
             focus:text-[#39FF14] focus:placeholder-[#39FF14] focus:ring-2 focus:ring-[#39FF14] py-1 px-3"
        />
        <SearchIcon size={30} color="#39FF14" />
        <button type="button" onClick={handleCart} className="flex relative">
          <ShoppingCartIcon size={30} color="#39FF14" />
          <span className="text-[#39FF14] text-[19px] bg-gray-500 rounded-full h-7 w-7 absolute -top-3 left-4">{quantity}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
