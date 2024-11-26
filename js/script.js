// Destacar o item do menu correspondente à página atual
document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.href === window.location.href) {
        link.style.backgroundColor = '#4CAF50';
        link.style.color = '#fff';
    }
});

// Botão para voltar ao topo
const btnTopo = document.createElement('button');
btnTopo.innerText = '↑';
btnTopo.style.position = 'fixed';
btnTopo.style.bottom = '20px';
btnTopo.style.right = '20px';
btnTopo.style.padding = '10px 15px';
btnTopo.style.backgroundColor = '#4CAF50';
btnTopo.style.color = 'white';
btnTopo.style.border = 'none';
btnTopo.style.borderRadius = '5px';
btnTopo.style.cursor = 'pointer';
btnTopo.style.display = 'none'; // Oculto por padrão
document.body.appendChild(btnTopo);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Exibe o modal de boas-vindas
window.addEventListener('load', () => {
    const modal = document.getElementById('welcome-modal');
    const closeButton = document.querySelector('.close-button');

    // Exibir o modal ao carregar a página
    modal.style.display = 'flex';

    // Fechar o modal ao clicar no botão "X"
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});