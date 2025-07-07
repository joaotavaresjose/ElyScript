class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState('home');

    React.useEffect(() => {
      // Simular carregamento inicial
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    const handleLogin = (success) => {
      if (success) {
        setIsLoggedIn(true);
      }
    };

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    if (isLoading) {
      return <Loader />;
    }

    if (!isLoggedIn) {
      return <LoginForm onLogin={handleLogin} />;
    }

    return (
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
        <Header currentPage={currentPage} onPageChange={handlePageChange} />
        <main>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'scripts' && <ScriptGenerator />}
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);