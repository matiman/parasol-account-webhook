const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import {Alchemy, Network, WebhookType} from 'alchemy-sdk';

const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('app.properties');
const getProperty = (pty: string) => {
  return prop.get(pty);
};

const settings = {
  authToken: getProperty('alchemy.webhook.authtoken'),
  network: getProperty('network'),
};
const alchemy = new Alchemy(settings);
app.use(bodyParser.json());

app.listen(getProperty('port'), () => {
  console.log('listening on port..' + getProperty('port'));
});

app.post('/register/hook', async (req: any, res: any) => {
  const addressActivityWebhook = await alchemy.notify.createWebhook(
    req.body.webhook,
    WebhookType.ADDRESS_ACTIVITY,
    {
      addresses: req.body.address,
      network: Network.ETH_MAINNET,
    }
  );
  console.log(addressActivityWebhook);
  res.json(addressActivityWebhook);
});
