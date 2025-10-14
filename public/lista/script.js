async function fetchAndRenderTable() {
  const container = document.getElementById('table-container');
  container.innerHTML = '<p>Carregando...</p>';
  try {
    const res = await fetch('/api/pessoas');
    const json = await res.json();
    const pessoas = json.data;

    if (!pessoas.length) {
      container.innerHTML = '<p>Nenhuma pessoa encontrada.</p>';
      return;
    }

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
    container.innerHTML = '';
    container.appendChild(table);
  } catch (err) {
    container.innerHTML = `<p style="color: red;">Erro ao carregar dados.</p>`;
  }
}

fetchAndRenderTable();