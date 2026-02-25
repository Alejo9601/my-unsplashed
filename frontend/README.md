# My Unsplashed - Frontend

Frontend de la app para subir, listar, buscar, previsualizar y eliminar imágenes.

## Requisitos

## Requirements

- Node.js 18+ (recomendado)
- npm

## Configuración

Crear un archivo `.env` en `frontend/` con:

```env
VITE_API_URL=http://localhost:3000/api/v1
```

Ajusta la URL según tu backend.

## Scripts

Desde `frontend/`:

```bash
npm install
npm run dev
```

Otros scripts:

```bash
npm run build
npm run preview
npm run lint
```

## Estructura rápida

- `src/pages`: pantallas principales (`Home`, `Login`, `Register`)
- `src/components`: UI reutilizable (header, grid, modales, upload)
- `src/context`: estado global de usuario e imágenes
- `src/services`: llamadas HTTP al backend
- `src/styles`: estilos globales y por feature

## Notas

- El proyecto usa React + Vite.
- El despliegue del frontend está pensado para Vercel.
