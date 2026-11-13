# VORAX WEB PAGES

Sitio estático (HTML + CSS + JS). No necesita instalar nada.
Librerías por CDN: GSAP, ScrollTrigger (cdnjs) y Lenis (jsDelivr).

## Estructura
```
index.html
css/styles.css
js/main.js        <- aquí están los datos editables (arriba del archivo)
assets/images  assets/videos  assets/fonts
```

## Probar en tu computadora
Abre `index.html` con doble clic. O, con Python instalado:
`python -m http.server 8000` y entra a http://localhost:8000

## Publicar gratis en GitHub Pages
1. Crea una cuenta en github.com y pulsa **New repository**. Nombre: `vorax-web-pages`, público.
2. Pulsa **uploading an existing file** y arrastra TODO el contenido de esta carpeta
   (incluye `index.html`, `css`, `js`, `assets`, `.nojekyll`, `robots.txt`). Pulsa **Commit changes**.
3. Ve a **Settings → Pages**. En *Branch* elige `main` y carpeta `/ (root)`. Guarda.
4. En 1-2 minutos tu sitio estará en `https://TU-USUARIO.github.io/vorax-web-pages/`.

Para cambios: edita el archivo en GitHub (lápiz) o sube el archivo nuevo; se actualiza solo.
Cuando compres un dominio: Settings → Pages → *Custom domain*.

## Editar datos (arriba de `js/main.js`)
- `WA`: número de WhatsApp con lada (ej. 5215512345678). `WA_TXT`: mensaje inicial.
- `DATA.services`, `DATA.projects`, `DATA.diff`, `DATA.steps`: textos y demos.
- Instagram: en `index.html` busca `EDITABLE` y cambia el bloque por
  `<a href="TU-ENLACE" target="_blank" rel="noopener"><b>Instagram</b><span>@tuusuario ↗</span></a>`
- Colores: variables al inicio de `css/styles.css` (`--ac` es el acento dorado).
- Correo y TikTok: en `index.html`, sección contacto.

## Agregar videos cinematográficos
1. Descarga clips gratis de uso comercial en pexels.com/videos, mixkit.co o coverr.co
   (busca: "dark abstract", "city night", "particles", "smoke", "luxury"). Revisa la licencia.
2. Comprime: 8 a 15 segundos, 1080p, SIN audio, menos de 5 MB. Con HandBrake o con ffmpeg:
   `ffmpeg -i entrada.mp4 -an -vf scale=1920:-2 -c:v libx264 -crf 28 -preset slow -movflags +faststart hero.mp4`
   Haz otra versión de 720p para móviles (`hero-mobile.mp4`).
3. Ponlos en `assets/videos/` y en `js/main.js` completa:
   `var VIDEOS={hero:'assets/videos/hero.mp4',heroMobile:'assets/videos/hero-mobile.mp4',statement:'assets/videos/declaracion.mp4'};`
Si el video falla o el usuario ahorra datos, el sitio sigue funcionando con las partículas.

## Notas
- Los 6 proyectos de la sección Trabajo son demostraciones conceptuales ficticias.
- Respeta `prefers-reduced-motion`. El cursor personalizado sólo aparece en escritorio.
