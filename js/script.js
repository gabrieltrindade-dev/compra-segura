var formLoja = document.getElementById("formLoja");

if (formLoja != null) {
    formLoja.addEventListener("submit", function(evento) {
        evento.preventDefault();

        var link = document.getElementById("linkLoja").value;
        var resultado = document.getElementById("resultadoLoja");

        if (link == "") {
            resultado.innerHTML =
                '<div class="alert alert-danger">' +
                '<strong>Atenção:</strong> informe o endereço da loja.' +
                '</div>';
        } else {
            resultado.innerHTML =
                '<div class="alert alert-warning">' +
                '<h3 class="h5">Resultado da análise demonstrativa</h3>' +
                '<p>O endereço informado foi: <strong>' + link + '</strong>.</p>' +
                '<p>Não encontramos informações suficientes para confirmar ' +
                'automaticamente a segurança dessa loja.</p>' +
                '<hr>' +
                '<p class="mb-1"><strong>Antes de comprar:</strong></p>' +
                '<ul class="mb-0">' +
                '<li>Confira se o endereço está escrito corretamente;</li>' +
                '<li>Procure os dados da empresa;</li>' +
                '<li>Pesquise reclamações de consumidores;</li>' +
                '<li>Compare o preço com outras lojas.</li>' +
                '</ul>' +
                '</div>';
        }
    });
}


var formPromocao = document.getElementById("formPromocao");

if (formPromocao != null) {
    formPromocao.addEventListener("submit", function(evento) {
        evento.preventDefault();

        var produto = document.getElementById("nomeProduto").value;

        var precoAnterior =
            Number(document.getElementById("precoAnterior").value);

        var precoPromocional =
            Number(document.getElementById("precoPromocional").value);

        var resultado = document.getElementById("resultadoPromocao");

        if (
            produto == "" ||
            precoAnterior <= 0 ||
            precoPromocional <= 0
        ) {
            resultado.innerHTML =
                '<div class="alert alert-danger">' +
                '<strong>Atenção:</strong> preencha corretamente todos os campos.' +
                '</div>';
        } else if (precoPromocional >= precoAnterior) {
            resultado.innerHTML =
                '<div class="alert alert-danger">' +
                '<h3 class="h5">A oferta precisa ser verificada</h3>' +
                '<p class="mb-0">' +
                'O preço promocional não é menor que o preço anterior. ' +
                'Portanto, os valores informados não representam um desconto.' +
                '</p>' +
                '</div>';
        } else {
            var economia = precoAnterior - precoPromocional;

            var desconto =
                (economia / precoAnterior) * 100;

            resultado.innerHTML =
                '<div class="alert alert-success">' +
                '<h3 class="h5">Resultado da promoção</h3>' +
                '<p>Produto: <strong>' + produto + '</strong></p>' +
                '<p>Desconto aproximado: <strong>' +
                desconto.toFixed(0) + '%</strong></p>' +
                '<p>Economia informada: <strong>R$ ' +
                economia.toFixed(2) + '</strong></p>' +
                '<hr>' +
                '<p class="mb-0">' +
                'O cálculo confirma a diferença entre os valores, mas não ' +
                'garante que a promoção ou a loja sejam verdadeiras. Compare ' +
                'o preço em outros sites antes de comprar.' +
                '</p>' +
                '</div>';
        }
    });
}


var formContato = document.getElementById("formContato");

if (formContato != null) {
    formContato.addEventListener("submit", function(evento) {
        evento.preventDefault();

        var nome = document.getElementById("nomeContato").value;
        var email = document.getElementById("emailContato").value;
        var mensagem = document.getElementById("mensagemContato").value;

        var resultado = document.getElementById("resultadoContato");

        if (nome == "" || email == "" || mensagem == "") {
            resultado.innerHTML =
                '<div class="alert alert-danger">' +
                'Preencha todos os campos antes de enviar.' +
                '</div>';
        } else {
            resultado.innerHTML =
                '<div class="alert alert-success">' +
                '<strong>Mensagem registrada!</strong> ' +
                'Obrigado por entrar em contato, ' + nome + '.' +
                '</div>';

            formContato.reset();
        }
    });
}