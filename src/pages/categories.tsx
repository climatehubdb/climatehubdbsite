import PaperBlock from "@/components/category";
import { papers } from "@/database/papers";
import { useState, useEffect, useMemo, ChangeEvent } from "react";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [data, setData] = useState<any[]>([]);

  const categories = useMemo(
    () => [
      { title: "Selecionar todas as categorias", category: "all" },
      { title: "Sistemas de Cobertura", category: "cobertura" },
      { title: "Fachadas - Vedações Verticais", category: "fachada" },
      { title: "Projeto com Estratégias Bioclimáticas", category: "projeto" },
      { title: "Brises - Elementos de Proteção Solar", category: "brise" },
      { title: "Ventilação Natural", category: "ventilação" },
      { title: "Iluminação Natural", category: "iluminação" },
    ],
    []
  );

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
  };

  useEffect(() => {
    setData(
      categories.filter((category) =>
        selectedCategory === "all"
          ? category.category !== "all"
          : category.category === selectedCategory
      )
    );
  }, [selectedCategory, categories]);
  console.log(data);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="pt-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 justify-between">
              <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                Categorias
              </h1>
              <form className="max-w-sm flex-1">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((category, index) => (
                    <option
                      key={index + category.title}
                      value={category.category}
                    >
                      {category.title}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>

          {data.map((category) => (
            <div key={`title-${category.title}`}>
              <h2 className="text-2xl font-bold text-gray-900 pt-12">
                {category.title}
              </h2>
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                {papers
                  .filter((paper) => paper.category === category.category)
                  .map((paper) => (
                    <PaperBlock key={paper.author} {...paper} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
