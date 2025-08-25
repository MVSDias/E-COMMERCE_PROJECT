import { useEffect, useState } from "react";
import { useCardProduct } from "../context/useCardProduct";
import { navTags } from "../data/navTags";

const NavMenu = () => {
  const { displayProductsFilteredbyCategory, setSearch } = useCardProduct();
  const [selected, setSelected] = useState("Todos");

  const handleDisplay = (category: string) => {
    setSelected(category);
    displayProductsFilteredbyCategory(category);
    setSearch("");
  };

  // reset automático ao montar
  // biome-ignore lint/correctness/useExhaustiveDependencies: <Noexplanation>
  useEffect(() => {
    handleDisplay("Todos"); // chama a função do contexto e seta o botão

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="text-gray-300 px-20 bg-[#141F2B] border border-[#141f5b] flex  justify-center md:flex-row   md:items-center  md:mx-0 md:justify-center md:gap-x-10 gap-4 py-6">
      {navTags.map((tag) => (
        <div key={tag.id} className="border border-[#39FF14]  rounded-lg">
          <button
            type="button"
            onClick={() => handleDisplay(tag.name)}
            className={` flex justify-start w-full gap-3 md:gap-1  cursor-pointer ${selected === tag.name ? " bg-[#39ff14] px-2 py-1 font-bold text-gray-900" : "px-2 py-1"}`}
          >
            {tag.icon && <tag.icon />}
            <span className="hidden lg:block">{tag.name}</span>
          </button>
        </div>
      ))}
    </nav>
  );
};

export default NavMenu;
