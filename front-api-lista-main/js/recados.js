const rowRecados = document.getElementById("row-recados");

function salvarLocalStorage(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

function acessarLocalStorage(chave) {
  const dados = localStorage.getItem(chave);

  if (dados) {
    return JSON.parse(dados);
  }

  return false;
}

function checkUsuarioLogado() {
  const usuario = acessarLocalStorage("usuario-logado");

  if (!usuario) {
    window.location.href = "./index.html";
  }
}

async function buscarRecados() {
  try {
    const { data } = await axios.get("http://localhost:5555/recados");

    renderizarRecados(data);
  } catch (error) {
    console.log(error);
  }
}

function renderizarRecados(recados) {
  recados.forEach((item) => {
    rowRecados.innerHTML += `
    <div class="col-12 col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">MEU RECADO</h5>

          
          <p class="card-text">CONTEUDO RECADO</p>
          <div class="d-flex justify-content-end"></div>
          <button class="btn btn-danger">EXCLUIR</button>`;
  });
}

checkUsuarioLogado();
buscarRecados();
