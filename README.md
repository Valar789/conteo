# 📦 Conteo - Gestión de Productos

Este proyecto es una aplicación de gestión de productos desarrollada con **Next.js, TypeScript y Tailwind CSS**. Permite agregar, visualizar, ordenar y eliminar productos de manera eficiente.

## 🚀 Despliegue

El proyecto está disponible en: [https://conteo-prueba.vercel.app/](https://conteo-prueba.vercel.app/)

## 📌 Características

- 🛠 **Creación de productos** con código, nombre, descripción, cantidad y fecha de creación.
- 🔍 **Búsqueda y filtrado** de productos por código, nombre o descripción.
- 📊 **Ordenación** por código, nombre, cantidad y fecha de creación.
- ❌ **Eliminación de productos** 


## 📂 Estructura del Proyecto

```
conteo/
├── app/
│   ├── (modules)/products/  # Módulo de gestión de productos
│   ├── components/          # Componentes reutilizables
│   ├── hooks/               # Hooks personalizados
│   ├── types/               # Tipos de TypeScript
│   ├── utils/               # Funciones auxiliares
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales
├── public/                  # Recursos estáticos
├── .eslintrc.js             # Configuración de ESLint
├── next.config.ts           # Configuración de Next.js
├── package.json             # Dependencias y scripts
└── README.md                # Documentación del proyecto
```

## 🛠 Instalación y Uso

### 🔹 Requisitos previos

- **Node.js** (v18 o superior)
- **npm** 

### 🔹 Clonar el repositorio

```bash
git clone https://github.com/Valar789/conteo.git
cd conteo
```

### 🔹 Instalar dependencias

```bash
npm install 
```

### 🔹 Ejecutar en desarrollo

```bash
npm run dev  
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

### 🔹 Construir para producción

```bash
npm run build
npm start
```

## 🔗 Tecnologías Utilizadas

- **Next.js 15** - Framework de React para aplicaciones web
- **React 19** - Biblioteca para interfaces de usuario
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS 4** - Estilos rápidos y responsivos
- **React Hook Form** - Manejo eficiente de formularios
- **Zod** - Validaciones de formularios con TypeScript
- **React Hot Toast** - Notificaciones interactivas
- **date-fns** - Manipulación de fechas en JavaScript

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.
