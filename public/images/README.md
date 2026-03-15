# Imagenes

Reemplaza los archivos en esta carpeta con las fotos que quieras usar.

## Archivos esperados

| Archivo        | Uso                                    | Tamaño sugerido |
|----------------|----------------------------------------|-----------------|
| subject.jpg    | Foto de fondo + card + lluvia          | 800x1000 px     |

## Como cambiar las imagenes

1. Copia tu imagen a esta carpeta como `subject.jpg`.
2. Si queres usar imagenes distintas para fondo, card y lluvia,
   renames (ej: bg.jpg, card.jpg, rain.jpg) y actualizas
   las variables al inicio de src/pages/index.astro:

     const BG_IMAGE   = '/images/bg.jpg';
     const RAIN_IMAGE = '/images/rain.jpg';
     const PHOTO_SRC  = '/images/card.jpg';

## Formatos soportados
.jpg .jpeg .png .webp .avif
