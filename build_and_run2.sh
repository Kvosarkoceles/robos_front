#!/bin/bash

# Nombre de la imagen Docker
IMAGE_NAME="my-app"

# Verificar si la imagen Docker existe
IMAGE_EXISTS=$(docker images -q $IMAGE_NAME)

if [ -n "$IMAGE_EXISTS" ]; then
    echo "La imagen $IMAGE_NAME ya existe. Buscando contenedores activos..."
    
    # Obtener los ID de los contenedores en ejecución basados en la imagen
    CONTAINERS=$(docker ps -q --filter "ancestor=$IMAGE_NAME")

    if [ -n "$CONTAINERS" ]; then
        echo "Deteniendo y eliminando contenedores activos..."
        docker stop $CONTAINERS
        docker rm $CONTAINERS
    else
        echo "No hay contenedores activos basados en la imagen $IMAGE_NAME."
    fi
else
    echo "La imagen $IMAGE_NAME no existe."
fi

# Construir la nueva imagen Docker
echo "Construyendo la imagen Docker..."
docker build -t $IMAGE_NAME .

# Verificar si la construcción fue exitosa
if [ $? -ne 0 ]; then
    echo "Error al construir la imagen Docker."
    exit 1
fi

# Ejecutar el contenedor Docker
echo "Ejecutando el contenedor Docker..."
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules $IMAGE_NAME

# Verificar si el contenedor se inició correctamente
if [ $? -ne 0 ]; then
    echo "Error al ejecutar el contenedor Docker."
    exit 1
fi
