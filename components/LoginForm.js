function LoginForm({ onLogin }) {
  try {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');

      // Verificar credenciais demo
      if (email === 'engjoaotavaresjose@gmail.com' && password === 'eng2025') {
        setTimeout(() => {
          onLogin(true);
          setIsLoading(false);
        }, 1500);
      } else {
        setTimeout(() => {
          setError('Credenciais inválidas. Use as credenciais demo.');
          setIsLoading(false);
        }, 1500);
      }
    };

    return (
      <div className="fixed inset-0 bg-gradient-to-br from-red-500 to-red-700 z-50 flex items-center justify-center p-4" data-name="login-form" data-file="components/LoginForm.js">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-code text-3xl text-red-600"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">ElyScript</h2>
            <p className="text-gray-600 mt-2">Faça login para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Palavra-passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Digite sua palavra-passe"
                required
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="loader"></div>
                  <span>Entrando...</span>
                </div>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Credenciais Demo:</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>  Email:</strong> Solicite ao Eng.João Tavares José
            </p>
            <p className="text-sm text-gray-600">
              <strong>Palavra-passe:</strong>Solicite ao Eng.João Tavares José
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}