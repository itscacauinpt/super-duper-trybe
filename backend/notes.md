RUN vs. ENTRYPOINT vs. CMD

RUN <comando> <argumento1> <argumento2> <argumentoN>:
Indica que o comando dado deve ser executado durante a construção da imagem Docker!
Ou seja, é muito comum utilizar o RUN para fazer instalações de dependências.

ENTRYPOINT <comando> <argumento1> <argumento2> <argumentoN>:
Indica qual é o comando (e seus argumentos) que deve ser executado ao iniciar esta imagem Docker como um container;
Considere o ENTRYPOINT como obrigação de comando a ser executado;
Ele sempre será utilizado como ponto de entrada da imagem.

CMD <comando> <argumento1> <argumento2> <argumentoN>:
Indica qual é o comando (e seus argumentos) que pode ser executado ao iniciar esta imagem Docker como um container;
Conside o CMD como sugestão de comando a ser executado;
Ele pode ser substituído ao executar o comando docker run imagem <comando> <argumento1>.
