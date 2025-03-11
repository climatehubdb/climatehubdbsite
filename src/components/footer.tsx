function Footer() {
  return (
    <footer className="shadow bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-center">
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 text-gray-400">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                Sobre o Climatehub
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Colabore
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 mx-auto border-gray-700" />
        <span className="block text-sm text-center text-gray-400">
          © 2025. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
