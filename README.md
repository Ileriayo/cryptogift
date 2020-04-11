# Cryptogift

### Gift crypto, recharge cards, vouchers, giftcards to individuals based on occasion using BTC, ETH and LTC

## Deployment

### Heroku

One-click Heroku deploy: [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Ileriayo/cryptogift)

### Firebase

##### Ensure you have the firebase cli installed.

Follow the steps below:

- `firebase init`  
   (Select hosting and create a new project)

- Your firebase.json should look like this:

  ```
  {
      "hosting": [
          {
            "target": "app",
            "public": "build",
            "ignore": [
                "firebase.json",
                "**/.*",
                "**/node_modules/**"
            ],
            "rewrites": [
                {
                "source": "**",
                "destination": "/index.html"
                }
            ]
          }
      ]
  }
  ```

- `firebase deploy`
