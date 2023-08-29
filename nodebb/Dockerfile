FROM node:latest

WORKDIR /home/node/nodebb

RUN git clone -b v3.x https://github.com/NodeBB/NodeBB.git .
COPY ./nbb_setup.exp /home/node/nodebb/
# COPY ./nodebb/ .
# COPY ./config.json /home/node/nodebb/config.json

RUN apt update && apt install -y expect
RUN chmod +x /home/node/nodebb/nbb_setup.exp
RUN expect nbb_setup.exp
# RUN ./nodebb setup config.json

EXPOSE 4567

# CMD ["./nodebb", "start"]
CMD ["sleep", "infinity"]