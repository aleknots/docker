# Nginx Website Lab

Static website lab served by official `nginx:1.27-alpine` Docker image.

Designed for practicing Docker Compose, port binding, and mounting read-only host volumes.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and HTML layout |
| `style.css` | Stylesheet and visual formatting |
| `docker-compose.yml` | Nginx service configuration |

## Prerequisites

- Docker Engine
- Docker Compose

## How to Run

Navigate into directory:

```bash
cd site
```

Launch container in background:

```bash
docker compose up -d
```

Access in browser:

```text
http://localhost:8080
```

## Management Commands

View container logs:

```bash
docker compose logs -f
```

Stop container:

```bash
docker compose stop
```

Start container:

```bash
docker compose start
```

Teardown container:

```bash
docker compose down
```

## How It Works

Docker Compose binds container port `80` to host port `8080`:

```text
8080:80
```

The workspace directory is mounted into container at:

```text
/usr/share/nginx/html
```

Nginx uses this directory to serve static content. Volume uses `:ro` mode (read-only inside container).

## Troubleshooting

If default Nginx welcome page appears, recreate container:

```bash
docker compose down
docker compose up -d
```

Verify mounted files inside container:

```bash
docker exec site ls -la /usr/share/nginx/html
```

If host port `8080` is in use, modify port mapping in `docker-compose.yml`:

```yaml
ports:
  - "8081:80"
```

## License

Distributed under the [MIT License](../LICENSE).
