# ショップ 「shoppu」
## Development
### Dependencies
#### MacOS
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

```
# .env
SPREE_API_TOKEN=
```
#### Database
##### MacOS
```
$ gem install bundler
$ gem install foreman
$ bundle
$ yarn

$ rails db:setup
```

##### Docker
```
$ docker-compose run --rm web rails db:setup
```
### Work
Each time you pull, the following will likely need to be done.

#### MacOS
```
# Bundler
$ bundle

# Npm
$ yarn

# Migrate
$ rails db:migrate

# Run
$ yarn start
```

#### Docker
```
# Build
$ docker-compose build

# Bundler
$ docker-compose run --rm web bundle

# Npm
$ docker-compose run --rm web yarn

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

## Deployment
### Google
#### Dependencies
* [Google Cloud SDK](https://cloud.google.com/sdk/downloads)

#### Production
```
$ gcloud app deploy
```
