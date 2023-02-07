
This application let you register a webhook for account activities you wanted to listen to on Ethereum and other networks using Alchemy sdk. 

The app requires you to register on alchemy and get an auth token. For this demo I created a dummy free account for you to use w/o setting up an alchemy account. You can change the auth token and network on app.properties file.

# alchemy
https://docs.alchemy.com/reference/sdk-create-webhook 

Steps to run the project: 
Clone the project using git to your local director. 
CD to the main dir.

npm install express
npm i body-parser
npm install alchemy-sdk

```bash
ts-node index.ts
```
