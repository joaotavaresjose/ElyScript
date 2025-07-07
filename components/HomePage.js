function HomePage() {
  try {
    const [selectedScript, setSelectedScript] = React.useState('');
    const [showScriptPreview, setShowScriptPreview] = React.useState(false);

    const recentScripts = [
      {
        id: 1,
        scriptId: 'autoRegister',
        title: 'Cadastramento Automático',
        description: 'Script para cadastramento automático no VFS Global',
        date: '2024-01-15',
        downloads: 245,
        category: 'Automação'
      },
      {
        id: 2,
        scriptId: 'status',
        title: 'Verificação de Status',
        description: 'Verificar status do pedido de visto automaticamente',
        date: '2024-01-14',
        downloads: 189,
        category: 'Básico'
      },
      {
        id: 3,
        scriptId: 'autoFill',
        title: 'Preenchimento Automático',
        description: 'Preenchimento automático de formulários VFS',
        date: '2024-01-13',
        downloads: 156,
        category: 'Automação'
      },
      {
        id: 4,
        scriptId: 'notification',
        title: 'Notificações Automáticas',
        description: 'Sistema de notificações para mudanças de status',
        date: '2024-01-12',
        downloads: 134,
        category: 'Avançado'
      }
    ];

    const handleViewScript = (scriptId) => {
      setSelectedScript(getScriptTemplate(scriptId));
      setShowScriptPreview(true);
    };

    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      alert('Script copiado para a área de transferência!');
    };

    return (
      <div className="container mx-auto px-4 py-8" data-name="home-page" data-file="components/HomePage.js">
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Bem-vindo ao ElyScript
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            A plataforma mais completa para gerar scripts automatizados para VFS Global Angola. 
            Simplifique seus processos com nossa tecnologia avançada de inteligência artificial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
              🚀 Mais de 500 scripts gerados
            </div>
            <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              ⚡ Economia de 80% do tempo
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              🔒 100% seguro e confiável
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="icon-trending-up text-2xl text-red-600 mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-800">Scripts Recentes</h3>
                </div>
                <div className="text-sm text-gray-500">Últimos 4 scripts</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {recentScripts.map(script => (
                  <div key={script.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{script.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{script.description}</p>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span className="bg-gray-100 px-2 py-1 rounded">{script.category}</span>
                          <span>{script.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-xs text-gray-500">
                        <div className="icon-download text-sm mr-1"></div>
                        {script.downloads}
                      </span>
                      <button
                        onClick={() => handleViewScript(script.scriptId)}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Ver Script
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center mb-4">
              <div className="icon-users text-2xl text-emerald-600 mr-3"></div>
              <h3 className="text-xl font-bold text-gray-800">Quem Somos</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                O ElyScript é uma plataforma inovadora desenvolvida especificamente para 
                simplificar os processos do VFS Global em Angola.
              </p>
              <p className="text-gray-600">
                Nossa missão é automatizar tarefas repetitivas e fornecer scripts 
                personalizados que economizam tempo e reduzem erros.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-gray-600">Scripts Gerados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">100+</div>
                  <div className="text-sm text-gray-600">Usuários Ativos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="card text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="icon-zap text-3xl text-yellow-500 mr-3"></div>
            <h3 className="text-2xl font-bold text-gray-800">Recursos Principais</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-settings text-2xl text-red-600"></div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Scripts Personalizados</h4>
              <p className="text-sm text-gray-600">
                Crie scripts únicos baseados nas suas necessidades específicas usando IA
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-clock text-2xl text-emerald-600"></div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Economia de Tempo</h4>
              <p className="text-sm text-gray-600">
                Automatize processos e reduza o tempo gasto em tarefas repetitivas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-shield text-2xl text-yellow-600"></div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Confiável</h4>
              <p className="text-sm text-gray-600">
                Scripts testados e validados para garantir máxima eficiência
              </p>
            </div>
          </div>
        </section>

        {showScriptPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800">Preview do Script</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => copyToClipboard(selectedScript)}
                    className="btn-secondary"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="icon-copy text-xl"></div>
                      <span>Copiar</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setShowScriptPreview(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <div className="icon-x text-xl"></div>
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{selectedScript}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('HomePage component error:', error);
    return null;
  }
}
