## Visão Geral

Este projeto é um formulário web responsivo em HTML, CSS e JavaScript hospedado dentro de um contêiner Docker Apache. O formulário coleta dados informados pelo usuário e registra as informações no console do navegador, projetado para fácil adaptação a APIs de integração backend.

***

## Estrutura de Arquivos

- **index.html**: Página web principal do formulário.
- **formulario.css**: Folha de estilo moderna e responsiva do formulário.
- **script.js**: Script de manipulação do DOM e captura de dados do formulário.
- **README.md**: Instruções de uso.
- **Public-HTML/**: Diretório contendo todos os recursos web (HTML, CSS, JS) servidos pelo Apache.

***

## Pré-requisitos

- Docker Engine instalado.
- Diretório `Public-HTML` no workspace atual contendo os arquivos do formulário (`index.html`, `formulario.css`, `script.js`).

***

## Como Executar

### 1. Iniciar Contêiner Apache

```bash
docker run -d --name apache-container -p 8000:80 -v $(pwd)/Public-HTML/:/usr/local/apache2/htdocs/ httpd
```

- Inicia o servidor web Apache na porta 8000 do host, servindo os arquivos a partir de `Public-HTML`.

### 2. Acessar Formulário no Navegador

Acesse:

```
http://localhost:8000
```

### 3. Abrir Shell Interativo no Contêiner

```bash
docker exec -it apache-container /bin/bash
```

***

## Gerenciamento do Contêiner

- **Iniciar**:
```bash
docker start apache-container
```

- **Parar**:
```bash
docker stop apache-container
```

- **Política de Reinicialização (Restart Policy)**:
```bash
docker update --restart=always apache-container
docker update --restart=no apache-container
```

***

## Recursos do Formulário

- O envio do formulário captura dados dos campos, incluindo checkboxes de múltipla seleção.
- Os envios registram informações no console do desenvolvedor do navegador e exibem um alerta de confirmação.
- Adapte facilmente a lógica de envio para chamar uma API backend atualizando o `script.js`.

***

## Personalização & Estilização

- O CSS utiliza variáveis CSS e media queries responsivas para renderização ideal em dispositivos móveis e desktop.
- Edite o arquivo `formulario.css` para ajustar cores, espaçamentos e regras de layout.

***

## Licença

Distribuído sob a [Licença MIT](../LICENSE).
