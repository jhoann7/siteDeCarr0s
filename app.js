function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
      section.innerHTML = "<p>Nenhum carro encontrado, Digite algo.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada carro no array de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
      // Constrói o HTML para cada item da pesquisa
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.pagina}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}.</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;  
      }
      
    }

    if (!resultados){
      resultados = "<p>Nenhum carro encontrado, parece que você não está procurando uma super nave!😂</p>"
    }
  
    // Insere o HTML construído na seção de resultados
    section.innerHTML = resultados;
  }

