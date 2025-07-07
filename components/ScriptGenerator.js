function ScriptGenerator() {
  try {
    const [selectedScript, setSelectedScript] = React.useState('');
    const [customRequest, setCustomRequest] = React.useState('');
    const [generatedScript, setGeneratedScript] = React.useState('');
    const [isGenerating, setIsGenerating] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [showScriptLibrary, setShowScriptLibrary] = React.useState(false);
    const [favorites, setFavorites] = React.useState([]);

    const availableScripts = getAvailableScripts();
    const categories = ['Básico', 'Automação', 'Avançado'];

    const filteredScripts = availableScripts.filter(script => {
      const matchesSearch = script.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           script.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || script.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    const handleGenerate = async () => {
      setIsGenerating(true);
      try {
        let script = '';
        if (selectedScript) {
          script = getScriptTemplate(selectedScript);
        } else if (customRequest) {
          script = await generateCustomScript(customRequest);
        }
        setGeneratedScript(script);
      } catch (error) {
        alert('Erro ao gerar script. Tente novamente.');
      }
      setIsGenerating(false);
    };

    const handleScriptSelect = (scriptId) => {
      setSelectedScript(scriptId);
      setCustomRequest('');
      setShowScriptLibrary(false);
    };

    const toggleFavorite = (scriptId) => {
      setFavorites(prev => 
        prev.includes(scriptId) 
          ? prev.filter(id => id !== scriptId)
          : [...prev, scriptId]
      );
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(generatedScript);
      alert('Script copiado para a área de transferência!');
    };

    const downloadScript = () => {
      const element = document.createElement('a');
      const file = new Blob([generatedScript], {type: 'text/javascript'});
      element.href = URL.createObjectURL(file);
      element.download = 'script_vfs_global.js';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };

    return (
      <div className="container mx-auto px-4 py-8" data-name="script-generator" data-file="components/ScriptGenerator.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Gerador de Scripts VFS Global</h2>
            <p className="text-gray-600">Crie scripts personalizados ou escolha entre nossa biblioteca de templates</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card mb-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Pesquisar scripts..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div className="icon-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></div>
                    </div>
                  </div>
                  <select
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Todas as categorias</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => setShowScriptLibrary(!showScriptLibrary)}
                    className="btn-secondary whitespace-nowrap"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="icon-library text-xl"></div>
                      <span>Biblioteca</span>
                    </div>
                  </button>
                </div>

                {showScriptLibrary && (
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {filteredScripts.map(script => (
                      <div key={script.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-800">{script.name}</h4>
                          <button
                            onClick={() => toggleFavorite(script.id)}
                            className={`text-xl ${favorites.includes(script.id) ? 'text-red-500' : 'text-gray-300'}`}
                          >
                            <div className="icon-heart"></div>
                          </button>
                        </div>
                        <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs mb-2">
                          {script.category}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleScriptSelect(script.id)}
                            className="text-red-600 hover:text-red-700 text-sm font-medium"
                          >
                            Selecionar
                          </button>
                          <button
                            onClick={() => {
                              setGeneratedScript(getScriptTemplate(script.id));
                            }}
                            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                          >
                            Preview
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Script Selecionado
                    </label>
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={selectedScript}
                      onChange={(e) => setSelectedScript(e.target.value)}
                    >
                      <option value="">Escolher script...</option>
                      <optgroup label="Scripts Básicos">
                        <option value="appointment">Agendamento de Consulta</option>
                        <option value="status">Verificação de Status</option>
                        <option value="documents">Lista de Documentos</option>
                        <option value="payment">Processamento de Pagamento</option>
                      </optgroup>
                      <optgroup label="Automação">
                        <option value="autoRegister">Cadastramento Automático</option>
                        <option value="autoFill">Preenchimento Automático</option>
                      </optgroup>
                      <optgroup label="Scripts Avançados">
                        <option value="dataExtraction">Extração de Dados</option>
                        <option value="notification">Notificações Automáticas</option>
                        <option value="bulkProcess">Processamento em Lote</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ou Solicitar Script Personalizado
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      rows="3"
                      placeholder="Descreva o script que precisa..."
                      value={customRequest}
                      onChange={(e) => setCustomRequest(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={handleGenerate}
                    disabled={!selectedScript && !customRequest || isGenerating}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isGenerating ? (
                      <div className="flex items-center space-x-2">
                        <div className="loader"></div>
                        <span>Gerando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <div className="icon-play text-xl"></div>
                        <span>Gerar Script</span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Estatísticas</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Scripts Disponíveis</span>
                  <span className="font-semibold text-red-600">{availableScripts.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Favoritos</span>
                  <span className="font-semibold text-emerald-600">{favorites.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Categoria Mais Usada</span>
                  <span className="font-semibold text-yellow-600">Automação</span>
                </div>
              </div>
            </div>
          </div>

          {generatedScript && (
            <div className="card mt-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-2 md:space-y-0">
                <h3 className="text-xl font-bold text-gray-800">Script Gerado</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="btn-secondary"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="icon-copy text-xl"></div>
                      <span>Copiar</span>
                    </div>
                  </button>
                  <button
                    onClick={downloadScript}
                    className="btn-primary"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="icon-download text-xl"></div>
                      <span>Download</span>
                    </div>
                  </button>
                </div>
              </div>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{generatedScript}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ScriptGenerator component error:', error);
    return null;
  }
}
