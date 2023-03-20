## Instruções

Configure o nosso serviço mysql para utilizar um volume conforme vimos no conteúdo. Utilize o caminho target /var/lib/mysql.
Em vez de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.
Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.

## Comandos utilizados

docker-compose up
docker-compose up -d
docker-compose down