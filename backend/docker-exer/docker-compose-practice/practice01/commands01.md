## Instruções

Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
Após criar o container, acesse a página HTML que está rodando no servidor em seu browser.
Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto: "Nosso negócio é GENTE! #VQV";
Obtenha o id do container httpd:2.4;
Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse container no Docker Host;
Agora pare o container httpd:2.4;
Exclua o seu container;
Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;
Obtenha o IMAGE ID do servidor;
Depois de obter o IMAGE ID, exclua a imagem.

## Comandos

docker pull httpd:2.4
docker images
docker run -d -p 4545:80 -v "/home/cacau/super-duper-trybe/backend/docker-exer/docker-compose-practice/pratica01:/usr/local/apache2/htdocs/" httpd:2.4
docker container ls

Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host.
docker inspect *id*

docker stop 
docker rm *id*

docker images
docker rmi *image*
docker system prune -af
