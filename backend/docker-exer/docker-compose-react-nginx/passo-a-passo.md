# Servir aplicação React

### Gerar a build - primeiro estágio

- 1. Usar um sistema com npm instalado
FROM node

- 2. Baixar o código do projeito
COPY

- 3. Rodar comandos para a bbuild do react
RUN npm run build

### Servir a build - segundo estágio

- 4. Usar um sistema com um servidor web instalado
FROM nginx AS web-server

- 5. Baixar código da build que foi gerado na camada anterior
COPY --from=react-build /app/build /usr/share/nginx/html

- 6. Expor a porta necessária
EXPOSE 80

- 7. Build a image


- 8. Rode o container mapeando a porta necessária
