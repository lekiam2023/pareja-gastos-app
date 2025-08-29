#!/bin/bash

# Comprobar que se paso un argumento
if [ -z "$1" ]; then
   echo "Uso: ./start.sh [dev|prod|qa] [--reset-volumes]"
   exit 1
fi

ENV=$1
RESET_VOLUMES=$2

#Determinar rama según entorno
case $ENV in
    dev)
       BRANCH="dev"
       COMPOSE_FILE="-f docker-compose.yml -f docker-compose.dev.yml"
       ENV_FILE="./config/.env.dev"
       ;;
    prod)
       BRANCH="main"
       COMPOSE_FILE="-f docker-compose.yml -f docker-compose.prod.yml"
       ENV_FILE="./config/.env.prod"
       ;;
    qa)
       BRANCH="qa"
       COMPOSE_FILE="-f docker-compose.yml -f docker-compose.qa.yml"
       ENV_FILE="./config/.env.qa"
       ;;
    *)
       echo "Opcion no válida. Usa: dev, prod o qa"
       exit 1
       ;;

esac

#Cambiar a la rama correcta
echo "Cambiando a la rama $BRANCH..."
git fetch

git checkout $BRANCH
 if [$? -ne 0]; then 
  echo "Error: No se pudo cambiar a la rama $BRANCH"
  exit 1
 fi  

git pull origin $BRANCH
 if [$? -ne 0]; then
  echo "Error: No se pudo hacer pull de $BRACNCH"
  exit 1
 fi 

#Detener contenedores existentes
echo "Deteniendo contenedores existentes del proyecto...."
if [ "$RESET_VOLUMES" == "--reset-volumes" ]; then
    docker-compose $COMPOSE_FILE --env-file $ENV_FILE down -v
else
   docker-compose $COMPOSE_FILE --env-file $ENV_FILE down
fi       

#Levantar entorno
echo "Levantando entorno: $ENV..."
docker-compose $COMPOSE_FILE --env-file $ENV_FILE up --build -d

#Verifica si falló
if [$? -ne 0];then
  echo "Error: No se pudieron levantar los contenedores"
  exit 1 
fi

#Comprobar estado de los contenedores
echo "Comprobando contenedores...."
docker-compose $COMPOSE_FILE --env-file $ENV_FILE ps

echo "Contenedores levantados para $ENV"
echo "Frontend: http://localhost:3000 (dev/qa)"
echo "Backend: http://localhost:4000 (dev/qa)"   