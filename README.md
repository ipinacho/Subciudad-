## Subir cambios a Github

- Crear una rama de trabajo a partir de tu rama principal (main): 
```bash
git checkout main; git checkout -b {nombre-de-tu-rama-de-trabajo}
```
Ejemplo: 
```bash
git checkout main; git checkout -b add-misfunciones
```

- Agrega, haz commit de tus cambios y súbelos a tu repositorio: 
```bash
git add .
```
```bash
git commit -m 'mensaje'
```
```bash
git push --set-upstream origin {nombre-de-tu-rama-de-trabajo}
```
Ejemplo: 
```bash
git push --set-upstream origin add-misfunciones
```

- Crear un pull request en Github: [visita este sitio](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request)

- Unir los cambios (merge) a la rama principal (main): [visita este sitio](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request#merging-a-pull-request)


## Arrancar servidor
- Para arrancar el serviror corre el comando `npm run dev` en la terminal de VSCode