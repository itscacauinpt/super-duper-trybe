# 19.3 - Docker Compose

_basicamente receita de docker run_
__docker-compose.yaml__

*docker-compose up -d*

##### Política de reinicialização

Dá restart!
O Compose possui quatro políticas de reinicialização, sendo elas:

*no* : define que o container não reiniciará automaticamente (Padrão);
*on-failure*: define que o container será reiniciado caso ocorra alguma falha apontada pelo exit code diferente de zero;
*always*: especifica que sempre que o serviço parar, seja por um falha ou porque ele simplesmente finalizou sua execução, ele deverá ser reiniciado;
*unless-stopped*: define que o container sempre será reiniciado, a menos que utilizemos o comando docker stop ~container~ manualmente.

##### Política de reinicialização

_O serviço depende de..._

*depends-on:*

# 19.3 - Aula ao Vivo

_surpresa, é isso aqui tudo que o docker compose faz :v_

docker run -dit --name containe01 busybox

docker run -dit --name containe02 busybox

docker exec -it container01 sh
cat /etc/hosts *f4fd9ec3c3d5*
ping container02 *bad address*

//

docker network ls

docker network create -d bridge trybe-network

docker network connect trybe-network container01

docker network connect trybe-network container02

docker inspect trybe-network

docker exec -it container01 sh
ping container02 *container02 ping statistics*

//

docker run -dit --name container03 --network trybe-network busybox

docker network disconnect trybe-network container03

docker exec -it container03 sh
wget www.google.com *network is unreachable*

## Comandos

##### lista de redes_
docker network ls

##### verificando uma rede_
docker inspect *nome do container*

##### criando rede_
docker network create -d bridge *nome da rede*

##### inserindo e retirando containers de uma rede_
docker network connect *nome da rede* *nome do container*
docker network disconnect *nome da rede* *nome do container*

(quando criamos um container, uma rede é criada para este mesmo container, mas ao retirar um container de uma rede, ele está perdido na vida, não está conectado a nenhuma rede)

## Outros comandos

docker images | grep -i *palavra de busca*
docker run -d -p 3000:80 *imagem*

*Volumes* -> persistir dados, save the changes that i might add
Databases? stateful app? docker volumes!

##### mapeando volumes
docker run -v *pwd*:*destino* -p 3001:80 --name *outro container* *mesma imagem*

docker run -v /home/mount/data*host dir*:/var/lib/mysql/data*container dir* _host volumes_
docker run -v name:/var/lib/mysql/data*container dir* _named volumes_

##### in docker-compose_

*docker-compose up* (na pasta do .yaml)
*docker-compose logs nome-do-serviço*
*docker-compose down*