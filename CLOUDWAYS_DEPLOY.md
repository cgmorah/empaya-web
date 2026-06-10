# Deploy de EmpaYa Web en Cloudways

Esta app Next.js esta configurada como export estatico. El build genera `out/`, que puede subirse a `public_html` de una aplicacion PHP/custom en Cloudways.

## Build

```bash
npm ci
npm run build
```

Resultado:

```text
out/
```

## Cloudways

1. Crear una aplicacion nueva en el servidor de Cloudways.
2. Tipo recomendado: PHP/custom app para servir archivos estaticos.
3. Conectar el repo GitHub de `empaya-web`.
4. Configurar deploy hacia `public_html`.
5. Asegurarse de que el contenido de `out/` sea lo que queda publicado en `public_html`.

## Dominio y SSL

1. Apuntar el dominio de EmpaYa al servidor Cloudways.
2. En Cloudways, agregar el dominio a la aplicacion.
3. Activar SSL automatico/Lets Encrypt.

