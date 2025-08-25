import { type ReactNode, useState } from "react";
import { produtos } from "../data/produtos";
import { CardProductContext } from "./CardProductContext";

export interface ProductCard {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  categoria: string;
  preco: number;
  precoOriginal: number | null;
  desconto: string | null;
}

export interface CardProductContextType {
  produto: ProductCard | null;
  openModal: (id: number) => void;
  closeModal: () => void;
  addProductToCart: (id: number) => void;
  displayProductsFilteredbySearch: (search: string) => void;
  displayProductsFilteredbyCategory: (category: string) => void;
  produtosOnDisplay: ProductCard[];
  cartProducts: ProductCard[];
  search: string;
  setSearch: (value: string) => void;
  quantity: number;
  setQuantity:(quantity:number) => void;
}

const CardProductProvider = ({ children }: { children: ReactNode }) => {
  const [produto, setProduto] = useState<ProductCard | null>(null);
  const [produtosOnDisplay, setProdutosOnDisplay] = useState<ProductCard[]>(produtos);
  const [cartProducts, setCartProducts] = useState<ProductCard[]>([]);
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState<number>(0);

  const displayProductsFilteredbyCategory = (category: string) => {
    if (category === "Todos") {
      setProdutosOnDisplay(produtos);
      return;
    } else {
      const productsFiltered = produtos.filter((produto) => produto.categoria === category);
      setProdutosOnDisplay(productsFiltered);
    }
  };

  const displayProductsFilteredbySearch = (search: string) => {
    setSearch(search);

    const inputSearch = search.trim().toLowerCase();

    //filtro pelo search do input
    if (inputSearch === "") {
      setProdutosOnDisplay(produtos);
      return;
    }

    const productsFiltered = produtosOnDisplay.filter((produto) =>
      produto.nome.toLowerCase().includes(inputSearch),
    ); //filtro o array pesquisando o q tiver digitado no input e comparando com o nome, incluindo qq letra. Includes verifica se dois textos batem

    console.log(productsFiltered);

    setProdutosOnDisplay(productsFiltered);
    
  };

  const openModal = (id: number) => {
    const produtoSelecionado = produtos.find(
      (produto): produto is ProductCard => produto.id === id,
    ); //O produto is ProductCard é um type guard, dizendo pro TypeScript: “confia em mim, esse objeto é um ProductCard completo”.

    if (produtoSelecionado) {
      setProduto(produtoSelecionado);
    }
  };

  const closeModal = () => {
    setProduto(null);
  };

  const addProductToCart = (id: number) => {
    const newProductInCart = produtos.find((produto) => produto.id === id);

    if (newProductInCart) {
      setCartProducts((prev) => [...prev, newProductInCart]);
      setQuantity(prev => prev + 1)
      
    } else {      
      setQuantity(1)
    }

    
    
    

  };

  return (
    <CardProductContext.Provider
      value={{
        produto,
        quantity,
        setQuantity,
        search,
        setSearch,
        cartProducts,
        openModal,
        closeModal,
        addProductToCart,
        displayProductsFilteredbyCategory,
        displayProductsFilteredbySearch,
        produtosOnDisplay,
      }}
    >
      {children}
    </CardProductContext.Provider>
  );
};

export default CardProductProvider;
