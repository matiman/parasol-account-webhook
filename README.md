
This application let you register a webhook for account activities you wanted to listen to on Ethereum and other networks using Alchemy sdk. 

The app requires you to register on alchemy and get an auth token. For this demo I created a dummy free account for you to use w/o setting up an alchemy account. You can change the auth token and network on app.properties file.

# alchemy
https://docs.alchemy.com/reference/sdk-create-webhook 

Steps to run the project: 
Clone the project using git to your local director. 
cd to the main dir.

npm install express

npm i body-parser

npm install alchemy-sdk

npm i properties-reader

In order to have the request come to your localhost, you can use ngrok https://dashboard.ngrok.com/get-started/setup but you can also see the requests on https://webhook.site/ 

Make sure to validate your webhook works before registering it.

Finally run your application

ts-node index.ts

#What I would change
1) The API isn't secure and can take any incoming request through the port. So I would secure the API.

2) I would do validations on wether the contract addresses being submitted are ethereum contracts. Alchemy does it for us already but we can add another layer of protection.
3) I would also test wether the webhook we are registering works.
The same way you can do it from Alchemy UI.
4) Deploy the application on the cloud that is scalable and can handle many incoming requests.
5) Make a generic API gateway that can register any webhooks but depending on the request we can delegate it to other methods. That way we don't create many gateways(i.e more REST APIs to secure) for attacks.