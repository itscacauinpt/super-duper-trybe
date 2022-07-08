#um pensamento aleatório aqui, os comandos são quase frases completas em inglês o.O
#Primeiro estágio/imagem
FROM alpine:3.14 AS primeiro-estagio

WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
#instalando hugo na nossa imagem;
RUN hugo --minify --gc
#gera novas páginas finais em html, baseados nos arquivos de template/index.html/ e conteúdos/_index.md/

#Segundo estágio/imagem
FROM nginx:1.21-alpine AS segundo-estagio
#Cada linha de FROM significa o início de um novo estágio;

COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
#flag --from=stage
# RUN mv /site/public/* /usr/share/nginx/html
#mv para mover as páginas resultantes do hugo para o caminho onde o nginx espera que tenha páginas html para serem servidas

ENTRYPOINT ["nginx", "-g", "daemon off;"]

#docker run -p 1234:80 -d --name <nome_container> <nome_imagem>

#AS para renomear o estágio atual, com podemos ter vários estágios é bom renomeá-los
#WORKDIR é o diretorio no qual o docker sabe que vai trabalhar, quando esse build for executado como container, estaremos no path espeficidado no wrokir
#COPY configuração do hugo, copiando arquivos necessários
#RUN indica o comando a ser executado, dã, durante o processo de build
#ENTRYPOINT indica para o docker qual comando dver ser executado ao iniciar o container

#//

#docker build -t site-hugo .
# Step 1/9 : FROM nginx:1.21-alpine AS primeiro-estagio
# Step 2/9 : WORKDIR /site
# Step 3/9 : COPY config.toml config.toml
# Step 4/9 : COPY index.html /site/layouts/index.html
# Step 5/9 : COPY _index.md /site/content/_index.md
# Step 6/9 : RUN apk add hugo
# Step 7/9 : RUN hugo --minify --gc
# Step 8/9 : RUN mv /site/public/* /usr/share/nginx/html
# Step 9/9 : ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Nós instalamos a ferramenta Hugo, que foi útil apenas durante a execução do comando RUN hugo --minify --gc.
# Após isso, a gente não precisou mais dessa ferramenta, porém ela ainda ficou instalada em nossa imagem Docker, ocupando espaço.

#NEW MISSION -> não instalar nada extra, só aquilo que precisamos para rodar o nosso site simplão
# Instalar a ferramenta Hugo;
# Executar o comando hugo --minify --gc;
# Obter as páginas HTML resultantes;
# Criar uma nova imagem limpa baseada no nginx;
# Copiar apenas as páginas HTML geradas pelo Hugo para esta nova imagem;
# Pronto! Vamos ter uma imagem Docker apenas com o nginx e as páginas geradas pelo Hugo.
#ANSWER -> imagens intermediárias
#não precisamos usar o nginx no primeiro estágio só precisamos instalar o hugo

#docker build -t multi-stage-site-hugo .

