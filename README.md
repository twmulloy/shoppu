# ショップ 「shoppu」
## Development
### Dependencies
#### OSX
* [Homebrew](https://github.com/Homebrew/brew)
* [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* [Dinghy](https://github.com/codekitchen/dinghy)
* [Docker Compose](https://docs.docker.com/compose)
### Setup
One time setup steps.
#### Files
Create `.env` for sensitive environment variables that should not be committed.
```
$ touch .env
```
#### Database
```
$ docker-compose run web rails db:setup
```
### Work
Each time you pull, the following will likely need to be done.
```
# Build
$ docker-compose build

# Bundler
$ docker-compose run --rm web bundle

# Npm
$ docker-compose run --rm web npm i

# Migrate
$ docker-compose run --rm web rails db:migrate

# Run
$ docker-compose up
```
### Docker
`./Dockerfile`, `./docker-compose.yml`

```
# Build development image
$ docker build -t shoppu/shoppu .

# Update Docker Hub image
$ docker login
$ docker push shoppu/shoppu
```

#### SSL
`~/.dinghy/certs`
```
openssl req -x509 -newkey rsa:2048 -keyout shoppu.dev.key \
-out shoppu.dev.crt -days 365 -nodes \
-subj "/C=US/ST=Washington/L=Seattle/O=Shoppu/OU=Development/CN=*.shoppu.dev"
```
