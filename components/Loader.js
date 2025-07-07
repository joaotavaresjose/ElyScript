function Loader() {
  try {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-red-500 to-red-700 z-50 flex items-center justify-center" data-name="loader" data-file="components/Loader.js">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <div className="icon-code text-4xl text-red-600 animate-bounce"></div>
            </div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
          <div className="text-white font-bold text-2xl mb-2 animate-pulse">ElyScript</div>
          <div className="text-red-100 animate-pulse">Carregando sistema...</div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Loader component error:', error);
    return null;
  }
}
