const updateElement = (elementId, value) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = value;
    }
  };
  
  const updateImageSource = (elementId, source) => {
    const imageElement = document.getElementById(elementId);
    if (imageElement) {
      imageElement.src = source;
    }
  };
  
  const nome = localStorage.getItem('nome');
  const nomeCompleto = localStorage.getItem('nome_completo');
  const posicao = localStorage.getItem('posicao');
  const descricao = localStorage.getItem('descricao');
  const nascimento = localStorage.getItem('nascimento');
  const altura = localStorage.getItem('altura');
  const imagemSource = localStorage.getItem('imagem');
  
  updateElement('nome', nome ? nome.toUpperCase() : '');
  updateElement('nome_completo', nomeCompleto ? `Nome Completo: ${nomeCompleto}` : '');
  updateElement('posicao', posicao ? posicao.toUpperCase() : '');
  updateElement('descricao', descricao || '');
  updateElement('nascimento', nascimento ? `Nascimento: ${nascimento}` : '');
  updateElement('altura', altura ? `Altura: ${altura}` : '');
  updateImageSource('imagem', imagemSource || '');
  