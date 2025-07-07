function Footer() {
  try {
    return (
      <footer
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-16"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <div className="icon-code text-xl text-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">ElyScript</h3>
                  <p className="text-gray-400 text-sm">Automação VFS Global</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Plataforma líder em automação de processos VFS Global em Angola.
                Criamos scripts inteligentes que economizam tempo e reduzem
                erros.
              </p>
              <div className="flex space-x-4">
                <div
                  className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors"
                  onClick={() => window.open("https://www.facebook.com/joao.tavares.jose.2025", "_blank")}
                  title="Facebook"
                >
                  <div className="icon-facebook text-white text-sm"></div>
                </div>
                <div
                  className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors"
                  onClick={() => window.open("www.linkedin.com/in/joão-tavares-josé-33176235a", "_blank")}
                  title="LinkedIn"
                >
                  <div className="icon-linkedin text-white text-sm"></div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">
                Recursos
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <div className="icon-check text-emerald-500 text-sm"></div>
                  <span>Scripts Predefinidos</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <div className="icon-check text-emerald-500 text-sm"></div>
                  <span>Geração Personalizada</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <div className="icon-check text-emerald-500 text-sm"></div>
                  <span>Interface Responsiva</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
                  <div className="icon-check text-emerald-500 text-sm"></div>
                  <span>Suporte 24/7</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">
                Contato
              </h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="icon-mail text-red-400 text-sm"></div>
                  </div>
                  <span>contato@elyscript.ao</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="icon-phone text-red-400 text-sm"></div>
                  </div>
                  <span>+244 923 456 789</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="icon-map-pin text-red-400 text-sm"></div>
                  </div>
                  <span>Luanda, Angola</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 ElyScript. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
                <span className="hover:text-white cursor-pointer transition-colors">
                  Política de Privacidade
                </span>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Termos de Uso
                </span>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Suporte
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error("Footer component error:", error);
    return null;
  }
}
