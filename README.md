# lts-release-for-github

## Descripción

Este paquete permite obtener la última versión publicada de un repositorio en GitHub de manera sencilla y eficiente. Utiliza la biblioteca `jsdom` para analizar el contenido HTML de la página de lanzamientos de GitHub y extraer la información relevante.

## Casos de uso

### 1. Obtener la última versión de un repositorio

Si necesitas conocer cuál es la última versión publicada de un repositorio en GitHub, este paquete te proporciona una función que realiza esta tarea automáticamente.

```typescript
import fetchReleases from "lts-release-for-github";

(async () => {
  const creator = "facebook";
  const repository = "react";

  const latestRelease = await fetchReleases(creator, repository);
  console.log(`La última versión publicada es: ${latestRelease}`);
})();
```

### 2. Automatización de procesos

Este paquete es útil para integrarlo en flujos de trabajo automatizados donde se requiera verificar la última versión de un repositorio antes de realizar alguna acción, como actualizaciones o despliegues.

### 3. Monitoreo de versiones

Puedes usar este paquete para monitorear las versiones de repositorios importantes y asegurarte de estar siempre actualizado con las últimas novedades.

## Instalación

```bash
npm install lts-release-for-github
```

## API

### `fetchReleases(creator: string, repository: string): Promise<string>`

- **Parámetros:**
  - `creator`: Nombre del usuario o organización propietaria del repositorio.
  - `repository`: Nombre del repositorio.
- **Retorno:**
  - Una promesa que se resuelve con un string que representa la última versión publicada del repositorio.
