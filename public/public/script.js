document.addEventListener('DOMContentLoaded', () => {
  const empresaList = document.getElementById('empresa-list');

  // Obter lista de empresas
  fetch('/api/empresas')
    .then(res => res.json())
    .then(data => {
      empresaList.innerHTML = data
        .map(
          empresa => `
          <div class="empresa">
            <img src="/images/${empresa.logotipo}" alt="${empresa.nome}" class="logo">
            <div>
              <h3>${empresa.nome}</h3>
              <p>${empresa.local} - ${empresa.setor}</p>
              <p>Contato: ${empresa.contato}</p>
            </div>
            <div class="status">
              <div class="status-circle status-${empresa.status}"></div>
              <span>${empresa.status === 'no_ar' ? 'No ar' : 'Inativa'}</span>
            </div>
          </div>
        `
        )
        .join('');
    });
});
