FROM node AS react-build
# imagem base
WORKDIR /app
# definindo a pasta de trabalho, dir principal, referência
COPY ./frontend .
# copiando a pasta do frontend para a nossa pasta de trabalho
RUN npm install
# garantindo o node_module
RUN npm run build
# criando a pasta build, aquele arq todo bunitinho pronto pra servir
# RUN construir == ENTRYPOINT play

FROM nginx AS web-server
WORKDIR /usr/share/nginx/html
COPY --from=react-build /app/build .
# from para o copy não procurar na local, mas sim saber de onde copiar o arq
# documentação, dest de onde o nginx vai servir, conteúdo estatico, sem backend
EXPOSE 80


# docker build . -t react-docker
