function toggleSelection(element) {
    element.classList.toggle('selected');
}

function enviarPedido() {
    const produtosSelecionados = document.querySelectorAll('.product.selected');
    let mensagem = "Olá, gostaria de comprar os seguintes produtos:\n";

    produtosSelecionados.forEach(produto => {
        const nome = produto.dataset.produto;
        const preco = produto.dataset.preco;
        mensagem += `* ${nome} - R$ ${preco}\n`;
    });

    // Redireciona para o WhatsApp com a mensagem formatada
    window.open('https://wa.me/5511988115650?text=' + encodeURIComponent(mensagem));
}
