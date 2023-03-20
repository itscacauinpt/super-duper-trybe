## Instruções

Crie um novo serviço para o nosso banco de dados. Nesse caso, podemos utilizar um mysql, portanto use a imagem mysql:5.7;
Precisamos definir uma senha root para o nosso bd. Para isso, utilize a variável MYSQL_ROOT_PASSWORD e lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host para a env do container;
Agora precisamos configurar nosso service com o ghost para utilizar o MySQL. Para isso, defina a variável database__client para mysql;
Defina o nome ghost para o nome do database utilizando a variável database__connection__database;
Então, indique a conexão para o nosso MySQL na env database__connection__host;
Para definir a pessoa usuária (root) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password.
Utilize a opção depends_on para criar relações de dependências entre os serviços.
Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.

## Comandos usados

docker-compose up