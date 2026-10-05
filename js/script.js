// verificador de loja
var formLoja = document.getElementById("formLoja");

if (formLoja != null) {
    formLoja.addEventListener("submit", function(evento) {
        // não deixa a página recarregar
        evento.preventDefault();

        // pega o valor digitado
        var link = document.getElementById("linkLoja").value;
        var resultado = document.getElementById("resultadoLoja");

        // se não digitou nada mostra erro
        if (link == "") {
            resultado.innerHTML = '<div class="alert alert-danger">Informe o endereço da loja.</div>';
        } else {
            resultado.innerHTML = '<div class="alert alert-warning">' +
                '<h3 class="h5">Resultado da análise</h3>' +
                '<p>Endereço informado: <strong>' + link + '</strong></p>' +
                '<p>Não foi possível confirmar se a loja é segura.</p>' +
                '<p class="mb-0">Antes de comprar, procure os dados da empresa, pesquise reclamações e compare o preço em outras lojas.</p>' +
                '</div>';
        }
    });
}


// verificador de promoção
var formPromocao = document.getElementById("formPromocao");

if (formPromocao != null) {
    formPromocao.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // pega os valores do formulário
        var produto = document.getElementById("nomeProduto").value;
        var precoAnterior = Number(document.getElementById("precoAnterior").value);
        var precoPromocional = Number(document.getElementById("precoPromocional").value);
        var resultado = document.getElementById("resultadoPromocao");

        // confere se preencheu tudo
        if (produto == "" || precoAnterior <= 0 || precoPromocional <= 0) {
            resultado.innerHTML = '<div class="alert alert-danger">Preencha todos os campos corretamente.</div>';
        // se o preço novo não é menor, não é desconto
        } else if (precoPromocional >= precoAnterior) {
            resultado.innerHTML = '<div class="alert alert-danger">O preço promocional não é menor que o preço anterior, então não é um desconto.</div>';
        } else {
            // calcula a economia e a porcentagem
            var economia = precoAnterior - precoPromocional;
            var desconto = (economia / precoAnterior) * 100;

            resultado.innerHTML = '<div class="alert alert-success">' +
                '<h3 class="h5">Resultado da promoção</h3>' +
                '<p>Produto: <strong>' + produto + '</strong></p>' +
                '<p>Desconto: <strong>' + desconto.toFixed(0) + '%</strong></p>' +
                '<p>Economia: <strong>R$ ' + economia.toFixed(2) + '</strong></p>' +
                '<p class="mb-0">Compare o preço em outros sites antes de comprar.</p>' +
                '</div>';
        }
    });
}


// formulário de contato
var formContato = document.getElementById("formContato");

if (formContato != null) {
    formContato.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // pega os dados digitados
        var nome = document.getElementById("nomeContato").value;
        var email = document.getElementById("emailContato").value;
        var mensagem = document.getElementById("mensagemContato").value;
        var resultado = document.getElementById("resultadoContato");

        if (nome == "" || email == "" || mensagem == "") {
            resultado.innerHTML = '<div class="alert alert-danger">Preencha todos os campos antes de enviar.</div>';
        } else {
            resultado.innerHTML = '<div class="alert alert-success">Mensagem enviada! Obrigado pelo contato, ' + nome + '.</div>';

            // limpa o formulário depois de enviar
            formContato.reset();
        }
    });
}
