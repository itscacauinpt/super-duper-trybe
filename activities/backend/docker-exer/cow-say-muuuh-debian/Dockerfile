FROM debian:stable-slim
WORKDIR /usr/local
# RUN apt-get install cowsay -y
RUN apt-get update && apt-get install -y cowsay

ENTRYPOINT [ "/usr/games/cowsay" ]
CMD [ "muuuh", "deu", "bom" ]

#docker build -t debian:stable-slim .
#docker run --name cowsay-deu-bom debian:stable-slim