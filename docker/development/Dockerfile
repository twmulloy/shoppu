# shoppu/shoppu
FROM ruby:2.3.4-slim

RUN apt-get update -qq && apt-get install -y \
  build-essential libpq-dev git curl

# Node 7.x
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash - \
  && apt-get update -qq && apt-get install -y \
  nodejs

# Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update -qq && apt-get install -y \
  yarn

ENV web_root /web

RUN mkdir -p ${web_root}
WORKDIR ${web_root}

ADD . ${web_root}

RUN bundle
RUN npm i
