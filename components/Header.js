function Header({ currentPage, onPageChange }) {
  try {
    return (
      <header
        className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white shadow-lg"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-0 rounded-lg flex items-center justify-center">
                <img className="w-10 h-10 rounded-full"
                  src="asset/logo.jpg"
                  alt="Logo"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-shadow">
                  ElyScript
                </h1>
                <p className="text-red-100 text-xs md:text-sm">
                  Automação VFS Global Angola
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => onPageChange("home")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                  currentPage === "home"
                    ? "bg-white bg-opacity-20 text-white shadow-md"
                    : "text-red-100 hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <div className="icon-home text-lg"></div>
                <span>Início</span>
              </button>
              <button
                onClick={() => onPageChange("scripts")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                  currentPage === "scripts"
                    ? "bg-white bg-opacity-20 text-white shadow-md"
                    : "text-red-100 hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <div className="icon-code-2 text-lg"></div>
                <span>Scripts</span>
              </button>
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-3 py-1 rounded-full">
                <div className="icon-map-pin text-lg"></div>
                <span className="text-red-100 font-medium">Angola</span>
              </div>
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <div className="icon-check text-white text-sm"></div>
              </div>
            </div>
          </div>

          <div className="md:hidden pb-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onPageChange("home")}
                className={`px-3 py-2 rounded-md text-sm transition-colors flex items-center space-x-2 ${
                  currentPage === "home"
                    ? "bg-white bg-opacity-20 text-white"
                    : "text-red-100 hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <div className="icon-home text-sm"></div>
                <span>Início</span>
              </button>
              <button
                onClick={() => onPageChange("scripts")}
                className={`px-3 py-2 rounded-md text-sm transition-colors flex items-center space-x-2 ${
                  currentPage === "scripts"
                    ? "bg-white bg-opacity-20 text-white"
                    : "text-red-100 hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <div className="icon-code-2 text-sm"></div>
                <span>Scripts</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
