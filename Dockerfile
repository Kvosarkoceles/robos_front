
FROM node:22


WORKDIR /usr/src/app


COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build


EXPOSE 3000


CMD ["npm", "start"]




# FROM alpine:${ALPINE_VERSION}
# # Create app directory
# WORKDIR /usr/src/app
# # Add required binaries
# RUN apk add --no-cache libstdc++ dumb-init \
#   && addgroup -g 1000 node && adduser -u 1000 -G node -s /bin/sh -D node \
#   && chown node:node ./
# COPY --from=builder /usr/local/bin/node /usr/local/bin/
# COPY --from=builder /usr/local/bin/docker-entrypoint.sh /usr/local/bin/
# ENTRYPOINT ["docker-entrypoint.sh"]
# USER node
# # Update the following COPY lines based on your codebase
# COPY --from=builder /build-stage/node_modules ./node_modules
# COPY --from=builder /build-stage/dist ./dist
# # # Run with dumb-init to not start node with PID=1, since Node.js was not designed to run as PID 1
# CMD ["dumb-init", "node", "dist/index.js"]



# FROM node:18-bullseye as bot
# WORKDIR /app
# COPY package*.json ./
# RUN npm i
# COPY . .
# ARG RAILWAY_STATIC_URL
# ARG PUBLIC_URL
# ARG PORT
# CMD ["npm", "start"]