# Tasks Master ✅

**Pequeña aplicación web para gestionar tareas (SPA)** — Interfaz en español, desarrollada con Vite, Tailwind CSS y DaisyUI. Permite añadir, listar, buscar por prioridad y ver la cantidad de tareas (los datos se almacenan en memoria en el cliente).

---

## ✨ Características

- Añadir tareas (nombre, fecha límite, prioridad)
- Mostrar la lista de tareas
- Buscar tareas por prioridad
- Ver la cantidad total de tareas
- Interfaz responsiva con Tailwind CSS y DaisyUI
- Construcción y despliegue vía Vite y Docker

## 🧰 Tecnologías

- Vite (bundler / dev server)
- Vanilla JavaScript (módulos ES)
- Tailwind CSS
- DaisyUI
- Nginx (para imagen Docker de producción)

## 🔧 Requisitos

- Node.js >= 20
- npm >= 10

## 🚀 Uso local (desarrollo)

1. Clonar el repositorio

```bash
git clone https://github.com/thisfeeling/tasks-master.git
cd tasks-master
```

2. Instalar dependencias

```bash
npm install
```

3. Iniciar servidor de desarrollo

```bash
npm run dev
```

4. Abrir en el navegador: http://localhost:5173 (o la URL que indique Vite)

## 🏗️ Compilación y vista previa (producción)

```bash
npm run build
npm run preview
```

Esto generará la carpeta `dist/` con los archivos estáticos listos para servir.

## 🐳 Docker (opcional)

El `Dockerfile` construye la aplicación y la sirve con Nginx.

```bash
# Construir la imagen
docker build -t tasks-master .

# Ejecutar el contenedor (puerto 8080)
docker run -p 8080:80 tasks-master
```

Después, abrir http://localhost:8080

## 📁 Estructura principal

- `index.html` — HTML principal (español)
- `src/main.js` — Lógica de la SPA (añadir, listar, buscar, contar)
- `src/styles/` — Estilos (Tailwind + DaisyUI)
- `public/` — Recursos estáticos (imágenes)
- `Dockerfile`, `nginx.conf` — Para construcción y despliegue en contenedor
- `package.json` — Scripts y dependencias

## 📝 Scripts disponibles

- `npm run dev` — servidor de desarrollo (Vite)
- `npm run build` — construir para producción
- `npm run preview` — previsualizar build
- `npm run lint` — ejecutar ESLint y arreglar (`--fix`)
- `npm run format` — formatear con Prettier
- `npm run test` — ejecutar pruebas (Vitest)

## Contribuciones

Issues y PRs son bienvenidos. Para cambios importantes, crea primero un issue describiendo la propuesta.

---