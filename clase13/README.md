# Comando basicos de git

## Pasos para crear un nuevo repositorio
1. Crear el repositorio remoto en Github o Gitlba o lo que sea.
2. En la carpeta local(En mi maquina) del proyecto ejecutar en la terminal:
``` shell
git init
```
3. En la raiz del proyecto crear el `.gitignore` con los nombres de los archivos o capetas que se quiere ignorar.
4. Luego en la terminal ejecutar:
``` shell
git add .
```
5. Despues ejecutar:
``` shell
git commit -m "first commit"
```
6. Cambiar el nombre del branch por main:
``` shell
git branch -M main
```
7. Asociar el repositorio remoto con el local:
``` shell
git remote add origin <<REMPLAZAR POR LA RUTA DEL REMOTO>>
```
8. subir los cambios al remoto, como es la primeravez y el branch `main` no existe en el remoto tengo que ejecutar el push con la opcion `-u`, seria algo como:
``` shell
git push -u origin main
```

## Clonar el proyecto
>> En el caso que el repositorio sea publico cualquiera puede ver los cambios y puede clonarlo con https pero no puedo subir cambios nuevos.
Si el repositorio es privado si o si debo tener acceso como colaborador.
1. En una teminal debo hacer, este comando ya me crea una carpeta nueva con el nombre del repositorio:
``` shell
git clone <<REMPLAZAR POR LA URL DEL REPOSITORIO>>
```
2. Abrir con `VSCode`

## Traer los cambios del repositio remoto a mi local
1. En una terminal hacer:
``` shell
git pull
```

## Para confirmar y subir nuevos cambios al repositorio
1. En una terminal ejecutar:
``` shell
git add .
git commit -m "Mensaje de commit"
git push
```