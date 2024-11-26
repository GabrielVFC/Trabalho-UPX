# Sementes em Movimento 🌱

Bem-vindo ao repositório do projeto **Sementes em Movimento**! Este projeto foi criado para incentivar práticas sustentáveis, como o uso de transportes ecológicos e o plantio de plantas nativas em áreas urbanas. O objetivo principal é transformar cidades em ambientes mais verdes, saudáveis e sustentáveis.

## Visão Geral

O site tem como foco:
- Promover a arborização e restauração da biodiversidade urbana.
- Incentivar o uso de meios de transporte ecológicos, como bicicletas e caminhadas.
- Engajar a comunidade em campanhas de conscientização e eventos de plantio.

---

## Estrutura do Projeto

A estrutura do site foi desenvolvida utilizando apenas **HTML5** e **CSS3**, garantindo simplicidade e eficiência. 

Abaixo está a estrutura básica dos arquivos e pastas:

```plaintext
semente-em-movimento/
├── css/
│   └── index.css       # Estilos globais do site
├── img/
│   ├── logo.png        # Logotipo do projeto
│   ├── plantacao.jpg   # Imagem para dicas de plantação
├── js/
│   └── script.js       # Funcionalidades em JavaScript
├── public/
│   ├── sobre.html      # Página sobre o projeto
│   ├── objetivos.html  # Objetivos do projeto
│   ├── comoAjudar.html # Página com dicas e formas de ajudar
│   └── contato.html    # Página de contato
└── index.html          # Página inicial
```
## Como Funciona o Site?
- Página Inicial (index.html):

Apresenta o projeto com uma introdução, destaques e objetivos gerais.
Inclui uma navegação intuitiva para acessar outras páginas do site.
Código exemplo da seção inicial da página:

```html
<section>
    <div>
        <h2>Bem-vindo ao Projeto Sementes em Movimento</h2>
        <p>Este é um projeto inovador que busca enfrentar os desafios da 
            urbanização promovendo práticas sustentáveis como transporte 
            ecológico e a disseminação de plantas nativas.</p>
    </div>
</section>
```
- Página Sobre (public/sobre.html):

Explica a motivação do projeto e como ele está alinhado aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
Destaca os problemas urbanos que o projeto busca resolver.
Exemplo de código:

```html
<div>
    <h2>A Motivação</h2>
    <p>Com a urbanização crescente, áreas verdes estão sendo substituídas por concreto, 
    resultando em poluição, ilhas de calor e perda de biodiversidade.</p>
</div>
```
- Página Objetivos (public/objetivos.html):

Apresenta o objetivo geral e os objetivos específicos do projeto, como aumentar a arborização e engajar a comunidade.
Exemplo de código:

```html
<ul>
    <li>Promover o uso de bicicletas e caminhadas para reduzir emissões de poluentes.</li>
    <li>Aumentar a arborização em regiões críticas das cidades.</li>
    <li>Engajar a comunidade por meio de campanhas educativas.</li>
</ul>
```
- Página Como Ajudar (public/comoAjudar.html):

Mostra diferentes formas de contribuição, incluindo doações, voluntariado e divulgação.

- Página Contato (public/contato.html):

Disponibiliza um formulário simples para que os usuários possam entrar em contato.


## Adição de JavaScript
- Implementação de um modal de boas-vindas: Quando o usuário entra no site, uma caixa flutuante (modal) aparece dando as boas-vindas. O modal foi configurado para fechar ao clicar no botão "X" ou fora da caixa.

```javascript
window.onload = function () {
    const modal = document.getElementById("welcome-modal");
    const closeButton = document.querySelector(".close-button");

    modal.style.display = "block";

    closeButton.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
};
```

## Vídeo: Dicas para Plantar Sementes em Casa 🌱🎥
- Criamos um vídeo com dicas úteis para quem quer começar a plantar 
sementes em casa e transformar seu espaço em um ambiente mais verde e 
sustentável. No vídeo, abordamos os seguintes tópicos essenciais para garantir que 
suas sementes germinem e cresçam de forma saudável.

## Tecnologias Utilizadas
O projeto foi desenvolvido usando:

- HTML5: Para a estrutura do site.
- CSS3: Para a estilização e layout responsivo.
- JavaScript: Funcionalidade de modal de boas-vindas.
- Exemplo de código CSS usado para o estilo do cabeçalho:

```css
header {
    background: #4CAF50;
    color: white;
    text-align: center;
    padding: 1.5rem;
    margin-bottom: 1rem;
}
```
## Próximos Passos
Futuramente, o projeto poderá incluir:

- Mapas interativos para identificar áreas prioritárias para arborização.
- Ferramentas para cálculo de impacto ambiental.
- Tradução do site para outros idiomas.
