# 🚀 Zeryoz Webpage Template

Tu sitio web personal básico y profesional.

## 📁 Estructura del Proyecto

```
├── index.html      # Archivo HTML principal
├── styles.css      # Estilos CSS con diseño responsive
├── script.js       # JavaScript para interactividad
└── README.md       # Este archivo de documentación
```

## ✨ Características

- **Diseño Responsive** - Se adapta a móviles, tablets y escritorio
- **Navegación Suave** - Smooth scroll entre secciones
- **Header Fijo** - Menú siempre visible al hacer scroll
- **Animaciones suaves** - Efectos de entrada y hover
- **Fácil de personalizar** - Estructura limpia y comentada

## 🚀 Cómo Usar

### 1. Abrir el sitio web

Simplemente abre `index.html` en tu navegador favorito, o usa un servidor local:

```bash
# Opción A: Servidor con Python (si está instalado)
python -m http.server 8000

# Opción B: Usar Node.js (si tienes npm/node)
npx serve .
```

### 2. Personalizar Contenido

Edita estos archivos directamente:

- **`index.html`** - Cambia textos, secciones y enlaces
- **`styles.css`** - Modifica colores, tipografía o agrega nuevos estilos
- **`script.js`** - Añade funcionalidades interactivas

### 3. Secciones Disponibles

```html
<header id="home">          <!-- Navegación -->
<section class="hero">      <!-- Portada principal -->
<section id="about">        <!-- Sobre mí -->
<section id="projects">    <!-- Galería de proyectos -->
<section id="contact">     <!-- Información de contacto -->
<footer>                   // Pie de página
```

## 🎨 Personalización Básica

### Cambiar Colores Principales

En `styles.css`, modifica las variables:

```css
:root {
    --primary-color: #2563eb;   /* Color principal */
    --secondary-color: #7c3aed; /* Color secundario */
}
```

### Agregar Proyectos

En `script.js`, descomenta la sección "LOAD PROJECTS DYNAMICALLY" y llena tu array de proyectos.

## 📱 Estructura de Secciones Recomendada

1. **Inicio (Hero)** - Tu presentación principal
2. **Sobre Mí** - Breve biografía
3. **Proyectos** - Portafolio o trabajos destacados
4. **Contacto** - Información para conectar contigo

## 🛠️ Tecnologías Usadas

- HTML5 - Estructura semántica
- CSS3 con Grid y Flexbox - Diseño moderno
- JavaScript ES6+ - Interactividad nativa
- Sin dependencias externas - Todo es vanilla!

## 📝 Licencia

Propietario - Zeryoz

---

¡Feliz coddeo! ✨
