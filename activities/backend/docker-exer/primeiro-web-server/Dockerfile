# https://hub.docker.com/_/httpd

FROM httpd:2.4
COPY index.html /usr/local/apache2/htdocs/
EXPOSE 80
CMD [ "httpd-foreground" ]

#COPY source dest
#copiar um arquivo no computador local e colocá-lo dentro da imagem, no caminho especificado à frente, index da nossa pasta para o htdocs da imagem.

#OU

#ADD source dest
#ADD Faz o download do conteúdo de uma URL <src> na pasta de destino <dest> e pode descompactar auto arquivos compactados tipo tar, gzip e blah

#EXPOSE port
#recebendo info/conexões para a porta 80

#CMD [ "executable" ]
#especificidade desta imagem, aqui estamos especificando que o programa httpd-foreground seja executado ao iniciar essa imagem como um container.

#docker build -t meu-servidor-web .

#Instruções da nossa imagem:
# Step 1/4 : FROM httpd:2.4
# Step 2/4 : COPY index.html /usr/local/apache2/htdocs/
# Step 3/4 : EXPOSE 80
# Step 4/4 : CMD [ "httpd-foreground" ]

#docker run --rm -d -p 1234:80 --name meu-container meu-servidor-web
#http://localhost:1234/

#ISOLAMENTO flag -p -> exceção, mapeando a nossa porta /local?/ 1234 para a porta 80 que setamos

# docker container ls
# CONTAINER ID   IMAGE         COMMAND              CREATED          STATUS          PORTS                                   NAMES
# 1c2fe363eb1b   minha-webby   "httpd-foreground"   55 seconds ago   Up 47 seconds   0.0.0.0:1234->80/tcp, :::1234->80/tcp   meu-container

#docker rm -f meu-container

#//

#docker build -t novo-servidor .
#docker run -d -p 1601:80 --name novo-container novo-servidor
#docker container run -d -p 1234:80 --name meu-container minha-webby
#http://localhost:1601/ | 1234:80
