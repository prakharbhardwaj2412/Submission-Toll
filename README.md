View the demo application 

Getting started https://samyak3009.github.io/frontend-live/#/home_page

Clone repo
npm install
gulp
Make sure you have gulp installed globally (npm install -g gulp)

Making requests to the backend API
For convenience, we have a live API server running at https://conduit.productionready.io/api for the application to make requests against. You can view the API spec here which contains all routes & responses for the server.

The source code for the backend server (available for Node, Rails and Django) can be found in the main RealWorld repo.

If you want to change the API URL to a local server, simply edit src/js/config/app.constants.js and change api to the local server's URL (i.e. localhost:3000/api)
