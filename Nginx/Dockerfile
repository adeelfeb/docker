FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y nginx && apt clean

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
