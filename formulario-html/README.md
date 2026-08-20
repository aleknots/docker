## Overview

This project is a responsive HTML, CSS, and JavaScript web form hosted inside an Apache Docker container. The form collects user input and logs data to the browser console, designed for easy adaptation to backend integration APIs.

***

## File Structure

- **index.html**: Main form web page.
- **formulario.css**: Modern, responsive form styling stylesheet.
- **script.js**: DOM manipulation and form data capture script.
- **README.md**: Usage instructions.
- **Public-HTML/**: Directory containing all web assets (HTML, CSS, JS) served by Apache.

***

## Prerequisites

- Docker Engine installed.
- Directory `Public-HTML` in current workspace with form files (`index.html`, `formulario.css`, `script.js`).

***

## How to Run

### 1. Launch Apache Container

```bash
docker run -d --name apache-container -p 8000:80 -v $(pwd)/Public-HTML/:/usr/local/apache2/htdocs/ httpd
```

- Starts Apache web server on host port 8000, serving files from `Public-HTML`.

### 2. Access Form in Browser

Open:

```
http://localhost:8000
```

### 3. Open Container Terminal Shell

```bash
docker exec -it apache-container /bin/bash
```

***

## Container Management

- **Start**:
```bash
docker start apache-container
```

- **Stop**:
```bash
docker stop apache-container
```

- **Restart Policy**:
```bash
docker update --restart=always apache-container
docker update --restart=no apache-container
```

***

## Form Features

- Form submission captures field data including multi-selection checkboxes.
- Submissions log data into browser developer console and display a confirmation alert.
- Easily adapt submission logic to call a backend API by updating `script.js`.

***

## Customization & Styling

- CSS uses CSS variables and responsive media queries for optimal mobile and desktop rendering.
- Edit `formulario.css` to adjust colors, padding, and layout rules.

***

## License

Distributed under the [MIT License](../LICENSE).
