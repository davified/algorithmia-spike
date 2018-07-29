# Algorithmia Node.js Client Demo

### Getting started
- Fork and clone repo
- Install dependencies: `npm install`
- Sign up for an [algorithmia](https://algorithmia.com/) account, get an API key
- Place your API key in a `.env` file (in the same format as `.env.sample`)
  - Or you can run this: `sed s/your_api_key/REPLACE_THIS_WITH_YOUR_API_KEY/g .env.sample > .env`
- Run any of the files in `./demos/`: e.g. `node demos/sentiment.js`