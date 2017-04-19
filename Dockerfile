# shoppu/shoppu
FROM ruby:2.3.4-slim

RUN apt-get update -qq && apt-get install -y \
  build-essential libpq-dev git

# Node 7.x
RUN apt-get install -y \
  curl \
  && curl -sL https://deb.nodesource.com/setup_7.x | bash - \
  && apt-get update -qq && apt-get install -y \
  nodejs

ENV web_root /web

RUN mkdir -p ${web_root}
WORKDIR ${web_root}

ADD . ${web_root}

RUN bundle
RUN npm i
