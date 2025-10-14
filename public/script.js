// Função para montar tabela de pessoas
function renderTable(pessoas) {
  const table = document.createElement('table');
  table.innerHTML = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>CPF</th>
        <th>Data de Nascimento</th>
      </tr>
    </thead>
    <tbody>
      ${pessoas.map(p => `
        <tr>
          <td>${p.v_primeironome}</td>
          <td>${p.v_cpf}</td>
          <td>${p.v_datanascimento}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
  return table;
}

// Busca pessoa por CPF (mostra só ela)
async function searchByCPF() {
  const cpf = document.getElementById('cpf-input').value.trim();
  const container = document.getElementById('table-container');
  if (!cpf) {
    container.innerHTML = '<div class="error-message">Digite um CPF válido.</div>';
    return;
  }
  container.innerHTML = '<p>Buscando...</p>';
  try {
    const res = await fetch(`/api/pessoas/${encodeURIComponent(cpf)}`);
    if(res.status === 404){
      const { error } = await res.json();
      container.innerHTML = `<div class="error-message">${error}</div>`;
      return;
    }
    const json = await res.json();
    const pessoas = json.data || [];
    if (!pessoas.length) {
      container.innerHTML = '<div class="error-message">Nenhuma pessoa encontrada com esse CPF.</div>';
      return;
    }
    container.innerHTML = '';
    container.appendChild(renderTable(pessoas));
  } catch (err) {
    container.innerHTML = `<div class="error-message">Erro ao buscar CPF.</div>`;
  }
}

// Limpa busca e mostra todas as pessoas novamente
function clearCPFSearch() {
  document.getElementById('cpf-input').value = '';
  fetchAndRenderTable();
}

// Eventos dos botões
document.getElementById('cpf-search').onclick = searchByCPF;
document.getElementById('cpf-clear').onclick = clearCPFSearch;