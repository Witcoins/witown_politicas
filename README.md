# witown_politicas

Políticas legales de i'Witown (Gain Money Group SAS), publicadas en **https://politicas.iwitown.com**.

| Ruta | Página |
|---|---|
| `/` | Política de tratamiento de datos personales |
| `/terminos-y-condiciones` | Términos y condiciones |
| `/terminos-y-condiciones-servicio-premium` | Términos y condiciones servicio premium |
| `/codigos-de-activacion` | Códigos de activación |

Reemplaza al sitio anterior (`politicasprivacidadwitcoins.com`, dominio perdido). Dos rutas viejas cambiaron y
`firebase.json` las redirige: `/politica-de-tratameinto-de-datos-personales` → `/` y `/códigos-de-activación`
(con tildes) → `/codigos-de-activacion`. Las demás son iguales. Las páginas "YouTube" y "Catálogo" se eliminaron.

## Cómo está hecho

HTML estático en `public/`, sin compilación. Cada página es un archivo `.html`; Firebase sirve las rutas sin extensión
(`cleanUrls`). Lo compartido:

- `public/estilos.css`: paleta de marca (la misma de `ecosistema-landing`), cabecera y menú flotante.
- `public/redes.js`: abre y cierra el menú circular de redes. `/#redes` lo abre directamente.
- `public/img/`: logo blanco, isotipo y favicons.
- `public/fuentes/`: Space Grotesk alojada aquí (no se carga de Google Fonts, para no enviar la IP del lector a Google).

La cabecera, el pie y el menú de redes se repiten en las cuatro páginas: si se cambian, hay que cambiarlos en las cuatro.

**Al cambiar el texto de una política, actualizar la fecha de "Última actualización".**

## Desplegar

Sitio `witown-politicas` del proyecto Firebase `witcoins`:

```bash
firebase deploy --only hosting:witown-politicas --project witcoins
```
