import { useCardProduct } from "../context/useCardProduct";
import FormattedCurrency from "../utils/formattedCurrency";



const Modal = () => {
  const { produto, closeModal } = useCardProduct();

  const handleCloseModal = () => {
    closeModal();
  };

  if (!produto) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center z-50">
      <div
        key={produto.id}
        className=" min-h-[500px] grow-0 glow flex flex-col border-3 border-[#39FF14] rounded-[35px] cursor-pointer"
      >
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-[350px] bg-[#0B1017] rounded-t-[35px] object-cover"
        />
        <div className="flex flex-col gap-3 pl-4 py-4 text-center items-center text-[#39FF14]">
          <h2 className="text-4xl">{produto.nome}</h2>
          <p className="text-green-400 text-2xl">{produto.categoria}</p>
          {produto.precoOriginal !== null && (
            <p className="line-through text-2xl text-gray-500">
              {FormattedCurrency(produto.precoOriginal)}
            </p>
          )}

          <p className="text-green-400 text-2xl">{produto.desconto} OFF</p>

          <p className="text-[#39FF14] font-bold text-3xl">{FormattedCurrency(produto.preco)}</p>
          <button
            type="button"
            aria-label="Fechar modal"
            onClick={handleCloseModal}
            className="text-[#39FF14] bg-transparent h-10 w-10 py-1 px-3 border-4 border-[#39FF14] rounded-full cursor-pointer"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
