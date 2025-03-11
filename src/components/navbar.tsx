import { useState } from "react";
import Grasshopper from "/src/assets/Logo.svg";

const navigation = [
  { name: "Sobre o Climatehub", href: "about" },
  { name: "Categorias", href: "categories" },
  { name: "Contato", href: "contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50 bg-gray-800">
          <nav
            aria-label="Global"
            className="flex items-center justify-between lg:justify-center px-8"
          >
            {/* Logo e itens de navegação no desktop */}
            <div className="flex flex-col items-center space-y-2 lg:space-y-0 lg:flex-row lg:space-x-64">
              {/* Logo */}
              <div>
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img alt="" src={Grasshopper} className="h-8 w-[80%]" loading="lazy"/>
                </a>
              </div>

              {/* Itens de navegação no desktop */}
              <div className="hidden lg:flex gap-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Menu Hambúrguer para mobile */}
            <div className="lg:hidden flex items-center justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Menu mobile - se estiver aberto */}
            {mobileMenuOpen && (
              <div className="lg:hidden">
                <div className="flex flex-col items-center space-y-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>
          <div
            className={mobileMenuOpen ? "lg:hidden" : "hidden"}
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
