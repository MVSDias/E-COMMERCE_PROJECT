import { ShoppingCartIcon } from "lucide-react";
import { useCardProduct } from "../context/useCardProduct";

import FormattedCurrency from "../utils/formattedCurrency";
import Modal from "./Modal";

const ProductCard = () => {
  const { openModal, addProductToCart, produtosOnDisplay } = useCardProduct();

  const handleOpenModal = (id: number) => {
    openModal(id);
  };

  const handleAddToCart = (id: number) => {
    addProductToCart(id);
  };

  return (
    <div className="w-full">
      {produtosOnDisplay ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-y-15 my-25">
          {produtosOnDisplay.map((produto) => (
            <div
              key={produto.id}
              className=" mx-5 max-h-[500px] glow flex flex-col border-3 border-[#39FF14] rounded-[35px] cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(57,255,20,0.8)] transition-all duration-350"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-[240px] bg-[#0b69ec] rounded-t-[35px] object-cover"
              />
              <div className="flex flex-col gap-3 pl-4 py-4 text-center items-center text-[#39FF14]">
                <h2 className="md:text-2xl">{produto.nome}</h2>
                <p className="text-green-400">{produto.descricao}</p>

                <p className="text-[#39FF14] font-bold text-2xl">
                  {FormattedCurrency(produto.preco)}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="text-[#39FF14] bg-transparent py-1 px-3 border border-[#39FF14] rounded-[35px] cursor-pointer"
                    onClick={() => handleOpenModal(produto.id)}
                  >
                    Ver detalhes
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer relative"
                    onClick={() => handleAddToCart(produto.id)}
                  >
                    <ShoppingCartIcon size={28} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "Nenhum produto encontrado"
      )}
      <Modal />
    </div>
  );
};

export default ProductCard;
