# Starting the project

## Requirements:

- Node.js >= 12.6 ([get it here](https://nodejs.org/en/download/))
- Internet Access (which you obviously have)
- Proxy disabled or no proxy
- No VPN, else tunneling might not work as expected
- [ngrok](https://ngrok.com/) for connecting cloud services to localhost

## Setup environment:

- Create `.env`-file in project root
- Insert `MONGODB_CONN_STRING` pointing to a valid [MongoDB-Atlas Instance](https://www.mongodb.com/cloud/atlas), failing to insert a correct string **WILL** result in failure

## Connecting Local Development and Web NLP Service:

1. Set `ngrok` to point to dev computer's port `3000`
2. Insert HTTPS URL from ngrok into SAP CAI's target webhooks
3. Run `yarn install` from the project's root directory
4. Run `yarn start-dev` to start the service with hot reloading enabled
5. Load provided data into the MongoDB instance (found under _/models/data_)
6. Start local chatbot window _OR_ use provided test window, does not matter as ngrok handles traffic redirection

# URLs

- [SAP CAI Project](https://cai.tools.sap/theeny53/intsem/)
- [MongoDB Atlas Instance for Production Use](https://cloud.mongodb.com/v2/5d6c0dd9cf09a28b6f3d68cc#clusters/detail/Cluster0)

#

© 2020 Enzo Hilzinger
