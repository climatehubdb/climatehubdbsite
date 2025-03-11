import SoftwareBar from "./components/softwarebar";
import Jumbotron from "./components/jumbotron";
import { categories } from "./database/categories";

function App() {
  return (
    <>
      <Jumbotron />

      <SoftwareBar title={"Alguns programas utilizados"} sofwareList={[]} />

      {categories.map((category, index) => (
        <div className="overflow-hidden bg-white pt-16 sm:pt-24" key={index+category.name}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div
                className={`lg:pr-8 lg:pt-4 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                } order-1`}
              >
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {category.name}
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {category.description}
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {category.features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <span aria-hidden="true">→ </span>
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className={`${index % 2 === 0 ? "lg:order-1 flex flex-row-reverse" : "lg:order-2"} order-2`}>
                <img
                  alt="Product screenshot"
                  src={category.image}
                  width={2432}
                  height={1442}
                  className="w-[36rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="pt-24">
            <hr
              className={`mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 md:my-10 dark:bg-gray-700 ${
                index === categories.length - 1 ? "hidden" : ""
              }`}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
