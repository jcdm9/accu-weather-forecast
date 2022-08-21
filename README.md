# accu-weather-forecast
Back-end examination


# system requirement
* NodeJS - https://nodejs.org/en/
* Docker - https://www.docker.com/
* Git - https://github.com/


# deployment
Once all system requirements are installed, you may proceed here:

Clone repositories
```bash
git clone https://github.com/jcdm9/accu-weather-forecast.git
```

In root directory, use docker to setup the environment
```bash
docker-compose up -d
```

# environment variable
To update API key in accuWeather API, you may update the file: 

/back-end/.env.production

Update the value of ACCU_WEATHER_API and use your desired API key

You may get an API Key by registering at https://www.accuweather.com/

# api documentation

Once the application is up and running, you may view api documentation at http://localhost:3000//api-docs