function getScriptTemplate(scriptType) {
  const templates = {
    appointment: `// Script para Agendamento de Consulta VFS Global
function agendarConsulta() {
  const dados = {
    nome: 'Nome do Requerente',
    passaporte: 'Número do Passaporte',
    tipoVisto: 'Turismo/Trabalho/Estudo',
    dataPreferida: 'DD/MM/AAAA'
  };
  
  // Verificar disponibilidade
  if (verificarDisponibilidade(dados.dataPreferida)) {
    confirmarAgendamento(dados);
    return 'Consulta agendada com sucesso!';
  }
  
  return 'Data não disponível. Escolha outra data.';
}`,

    status: `// Script para Verificação de Status VFS Global
function verificarStatus() {
  const numeroReferencia = 'REF123456789';
  
  fetch('/api/status/' + numeroReferencia)
    .then(response => response.json())
    .then(data => {
      console.log('Status atual:', data.status);
      console.log('Última atualização:', data.ultimaAtualizacao);
      
      if (data.status === 'Aprovado') {
        console.log('Visto aprovado! Pode recolher o passaporte.');
      }
    })
    .catch(error => {
      console.error('Erro ao verificar status:', error);
    });
}`,

    documents: `// Script para Lista de Documentos VFS Global
function listarDocumentos() {
  const documentosObrigatorios = [
    'Passaporte original (válido por pelo menos 6 meses)',
    'Formulário de pedido de visto preenchido',
    'Fotografias tipo passe recentes',
    'Comprovativo de meios de subsistência',
    'Seguro de viagem',
    'Reserva de hotel ou carta convite',
    'Bilhete de avião (ida e volta)'
  ];
  
  documentosObrigatorios.forEach((doc, index) => {
    console.log((index + 1) + '. ' + doc);
  });
  
  return documentosObrigatorios;
}`,

    payment: `// Script para Processamento de Pagamento VFS Global
function processarPagamento() {
  const dadosPagamento = {
    valor: 80.00, // EUR
    moeda: 'EUR',
    metodo: 'cartao',
    numeroCartao: '****-****-****-1234'
  };
  
  if (validarPagamento(dadosPagamento)) {
    const transacao = {
      id: gerarIdTransacao(),
      timestamp: new Date().toISOString(),
      status: 'processando'
    };
    
    return confirmarPagamento(transacao);
  }
  
  throw new Error('Dados de pagamento inválidos');
}`,

    autoRegister: `// Script para Cadastramento Automático VFS Global
function cadastroAutomatico() {
  const dadosUsuario = {
    nome: 'Nome Completo',
    email: 'email@exemplo.com',
    telefone: '+244 xxx xxx xxx',
    passaporte: 'A1234567',
    nacionalidade: 'Angolana',
    dataNascimento: '01/01/1990'
  };
  
  // Preencher formulário automaticamente
  preencherCampo('#nome', dadosUsuario.nome);
  preencherCampo('#email', dadosUsuario.email);
  preencherCampo('#telefone', dadosUsuario.telefone);
  preencherCampo('#passaporte', dadosUsuario.passaporte);
  
  // Submeter formulário
  document.querySelector('#btnSubmit').click();
  
  return 'Cadastro realizado automaticamente!';
}`,

    autoFill: `// Script para Preenchimento Automático de Formulários
function preenchimentoAutomatico() {
  const dadosFormulario = {
    tipoVisto: 'Turismo',
    motivoViagem: 'Férias',
    dataEntrada: '15/06/2024',
    dataSaida: '30/06/2024',
    localEstadia: 'Hotel Central, Luanda',
    rendaMensal: '150000 AOA'
  };
  
  // Preencher campos automaticamente
  Object.keys(dadosFormulario).forEach(campo => {
    const elemento = document.querySelector('[name="' + campo + '"]');
    if (elemento) {
      elemento.value = dadosFormulario[campo];
      elemento.dispatchEvent(new Event('change'));
    }
  });
  
  return 'Formulário preenchido automaticamente!';
}`,

    dataExtraction: `// Script para Extração de Dados VFS Global
function extrairDados() {
  const dados = {
    numeroProcesso: extrairTexto('.processo-numero'),
    status: extrairTexto('.status-atual'),
    dataSubmissao: extrairTexto('.data-submissao'),
    documentos: extrairLista('.documentos-lista li'),
    taxas: extrairTexto('.valor-taxas')
  };
  
  // Exportar dados para CSV
  const csv = converterParaCSV(dados);
  baixarArquivo(csv, 'dados-vfs.csv');
  
  return dados;
}`,

    notification: `// Script para Notificações Automáticas VFS Global
function configurarNotificacoes() {
  const configuracao = {
    email: true,
    sms: true,
    push: true,
    frequencia: 'diaria'
  };
  
  // Verificar mudanças de status
  setInterval(() => {
    verificarMudancasStatus()
      .then(mudancas => {
        if (mudancas.length > 0) {
          enviarNotificacao(mudancas);
        }
      });
  }, 3600000); // Verificar a cada hora
  
  return 'Notificações configuradas com sucesso!';
}`,

    bulkProcess: `// Script para Processamento em Lote VFS Global
function processamentoLote() {
  const listaProcessos = [
    { id: 'P001', acao: 'verificar_status' },
    { id: 'P002', acao: 'atualizar_dados' },
    { id: 'P003', acao: 'gerar_relatorio' }
  ];
  
  const resultados = [];
  
  listaProcessos.forEach(async (processo) => {
    try {
      const resultado = await executarAcao(processo.acao, processo.id);
      resultados.push({ id: processo.id, sucesso: true, resultado });
    } catch (error) {
      resultados.push({ id: processo.id, sucesso: false, erro: error.message });
    }
  });
  
  return resultados;
}`
  };

  return templates[scriptType] || '';
}

// Função para obter lista de scripts disponíveis
function getAvailableScripts() {
  return [
    { id: 'appointment', name: 'Agendamento de Consulta', category: 'Básico' },
    { id: 'status', name: 'Verificação de Status', category: 'Básico' },
    { id: 'documents', name: 'Lista de Documentos', category: 'Básico' },
    { id: 'payment', name: 'Processamento de Pagamento', category: 'Básico' },
    { id: 'autoRegister', name: 'Cadastramento Automático', category: 'Automação' },
    { id: 'autoFill', name: 'Preenchimento Automático', category: 'Automação' },
    { id: 'dataExtraction', name: 'Extração de Dados', category: 'Avançado' },
    { id: 'notification', name: 'Notificações Automáticas', category: 'Avançado' },
    { id: 'bulkProcess', name: 'Processamento em Lote', category: 'Avançado' }
  ];
}

async function generateCustomScript(request) {
  // Simular geração de script personalizado
  const prompt = "Gere um script JavaScript para VFS Global Angola baseado na seguinte solicitação: " + request;
  
  // Aqui você pode integrar com uma API de IA real
  const customScript = "// Script personalizado para: " + request + "\n" +
"function scriptPersonalizado() {\n" +
"  // Implementação baseada na solicitação: " + request + "\n" +
"  \n" +
"  console.log('Executando script personalizado...');\n" +
"  \n" +
"  // Adicione aqui a lógica específica\n" +
"  const resultado = processarSolicitacao('" + request + "');\n" +
"  \n" +
"  return resultado;\n" +
"}\n" +
"\n" +
"function processarSolicitacao(solicitacao) {\n" +
"  // Lógica personalizada baseada na solicitação\n" +
"  return 'Script executado com sucesso para: ' + solicitacao;\n" +
"}";

  return customScript;
}
