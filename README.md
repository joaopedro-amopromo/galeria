# Desafio - Galeria de Fotos

Esta aplicação web consiste em uma galeria de fotos interativa que consome imagens de uma API pública, permitindo a visualização e filtragem em tempo real por autor, desenvolvida conforme os requisitos do desafio.

---

## Tecnologias Utilizadas

### HTML5

Estruturação semântica da página.

### CSS3

Estilização modularizada (arquivos separados para header, footer, galeria) utilizando Flexbox para layout responsivo e variáveis CSS para consistência visual.

### JavaScript (ES6+)

Lógica de manipulação do DOM, módulos (ES Modules) e assincronismo (Async/Await) para consumo de API.

API utilizada: https://picsum.photos/

---

### Como Executar Localmente

```bash
# Clone este repositório.

git clone git@github.com:w4rCode/galeria.git
```

Como o projeto utiliza ES Modules (imports no JavaScript), é necessário servir os arquivos através de um servidor HTTP local para evitar erros de CORS (apenas abrir o arquivo via file:// pode não funcionar corretamente dependendo do navegador).

Opção com VS Code: Utilize a extensão "Live Server". (Utilizei ela para o desenvolvimento do projeto)

Opção com Python: Execute python -m http.server na raiz do projeto.

Opção com Node.js: Utilize o pacote http-server.

Acesse o endereço local (geralmente http://127.0.0.1:5500 ou http://localhost:8000) no seu navegador.

Ou acesse o endereço: https://galeria-desafio.vercel.app/
