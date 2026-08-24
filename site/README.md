# Lab de Website Nginx

Lab de site estático servido pela imagem Docker oficial `nginx:1.27-alpine`.

Projetado para praticar Docker Compose, mapeamento de portas e montagem de volumes somente leitura do host.

## Arquivos

| Arquivo | Objetivo |
| --- | --- |
| `index.html` | Estrutura da página e layout HTML |
| `style.css` | Folha de estilo e formatação visual |
| `docker-compose.yml` | Configuração do serviço Nginx |

## Pré-requisitos

- Docker Engine
- Docker Compose

## Como Executar

Navegue até o diretório:

```bash
cd site
```

Inicie o contêiner em segundo plano:

```bash
docker compose up -d
```

Acesse no navegador:

```text
http://localhost:8080
```

## Comandos de Gerenciamento

Visualizar logs do contêiner:

```bash
docker compose logs -f
```

Parar contêiner:

```bash
docker compose stop
```

Iniciar contêiner:

```bash
docker compose start
```

Remover contêiner:

```bash
docker compose down
```

## Como Funciona

O Docker Compose mapeia a porta `80` do contêiner para a porta `8080` do host:

```text
8080:80
```

O diretório do workspace é montado dentro do contêiner em:

```text
/usr/share/nginx/html
```

O Nginx utiliza esse diretório para servir o conteúdo estático. O volume utiliza o modo `:ro` (somente leitura dentro do contêiner).

## Solução de Problemas

Se a página inicial padrão do Nginx aparecer, recrie o contêiner:

```bash
docker compose down
docker compose up -d
```

Verifique os arquivos montados dentro do contêiner:

```bash
docker exec site ls -la /usr/share/nginx/html
```

Se a porta `8080` do host estiver em uso, altere o mapeamento de porta no `docker-compose.yml`:

```yaml
ports:
  - "8081:80"
```

## Licença

Distribuído sob a [Licença MIT](../LICENSE).
