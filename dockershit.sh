#!/bin/bash

set -x

docker-compose down
docker volume prune
docker volume rm nodebb-dockerize_mongodata