## Instruções

Utilize a versão "3" no arquivo;
Crie um service para subir a plataforma. Para isso, utilize a imagem ghost:1-alpine;
Publique a porta 2368, fazendo bind também para a 2368;
Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.

## Comandos utilizados
docker-compose up -d
docker-compose down