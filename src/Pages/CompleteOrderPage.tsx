import { Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router";
import { useCardProduct } from "../context/useCardProduct";
import FormattedCurrency from "../utils/formattedCurrency";

const CompleteOrderPage = () => {
  const { cartProducts, setQuantity } = useCardProduct();

  const navigate = useNavigate()

  const handleOrder = () => {
    if(cartProducts.length > 0){
      navigate('/sucesso')
      setQuantity(0)
    }
    return;
    
  }
  return (
    <div className="min-h-screen mt-10 flex flex-col gap-10 mx-2 md:mx-8">
      <div className="flex flex-col gap-16 ">
        {cartProducts.map((product) => (
          <div key={product.id} className="flex gap-15   text-[#39FF14] md:text-3xl ">
            <div>
              <img src={product.imagem} alt={product.nome} />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 ml-8">
              <span>{product.nome}</span>
              <span>{FormattedCurrency(product.preco)}</span>
              <button type="button">
                <Trash2Icon size={38} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button type="button" className=" w-full rounded-2xl glow mb-10 py-2 bg-transparent border border-[#39ff14] text-[#39ff14] text-2xl font-bold cursor-pointer" onClick={handleOrder}>
          Confirmar pedido
        </button>
      </div>
    </div>
  );
};

export default CompleteOrderPage;
