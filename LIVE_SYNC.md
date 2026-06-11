# Sincronizacion en vivo con Cloudways

Este proyecto tiene un workflow de GitHub Actions en `.github/workflows/deploy-static.yml`.

Cada push a `main` hace dos cosas:

1. Construye la web estatica con `npm run build`.
2. Actualiza la rama `cloudways-static` con el contenido de `out/`.

Opcionalmente, tambien puede subir `out/` directo a Cloudways por SSH en el mismo push. Para activar ese deploy automatico, crea estos secretos en GitHub:

`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`

## Secretos requeridos

```text
CLOUDWAYS_HOST=170.64.191.181
CLOUDWAYS_USER=usuario_sftp_o_ssh
CLOUDWAYS_SSH_PRIVATE_KEY=clave_privada_ssh
CLOUDWAYS_PATH=/home/master/applications/TU_APP_ID/public_html
```

## Flujo recomendado

1. Crear un usuario SSH/SFTP para la app en Cloudways.
2. Agregar una SSH public key a ese usuario.
3. Guardar la private key correspondiente como `CLOUDWAYS_SSH_PRIVATE_KEY` en GitHub.
4. Confirmar el path real de `public_html`.
5. Hacer push a `main`.

Con esos secretos, GitHub Actions sincroniza el sitio directamente al servidor con `rsync --delete`, dejando `public_html` igual que el build estatico.

