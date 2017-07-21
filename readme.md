# Intro


# Intro

A brief guide on how to build a simple React and Redux website with Express backend, from start to end.

Demo: https://resumefront.shopshop.space/

## Buy a domain name
Yes, you need a domain name. I know you can run from you machine. Some domain name is cheap, like $1 that cheap. Go to namecheap.com and buy one. Paypal is supported. Here is a video demo: https://www.youtube.com/watch?v=Zbcn4skYXqM

## Buy a server
Head to vpsdime.com, and buy a Ubuntu server.
* Ubuntu 16.04, 64 bit
* 4 CPUs
* 12G Memory
* 60G SSD (You can use 30G in $7/month, but when you keep installing stuff. It gets full easily.)
* $14/month

Paypal is supported. Once you got your server, write down your ip address. Because you need to login into namecheap.com and point your new domain (by creating a A record) to that ip.

## Build the server
* Login into the server with ssh
* Install Nginx, NVM, MongoDB, Letsencrypt, etc.....
* Basically, the flow is Nginx -> fontend (React/Redux) -> backend (Express server) -> Json web token -> MongoDB. There are lots of things to install, if necessary I will put more instructions here.

## About the front end
* Git clone https://github.com/kenpeter/resumefront
* It uses ```nwb``` https://github.com/insin/nwb. It is zero configuration for React and others. I am very lazy, so this is the best tool ever.
* ```yarn start``` will launch the app in http://localhost:8016
* ```yarn build``` will compile the source into dist/ dir. See more in ```pakcage.json```
* How to [install yarn](https://yarnpkg.com/lang/en/docs/install/), in case you don't know.
* The front end uses Json Web Token to communicate with backend. The token is appended on url.

### About redux
![alt img](https://raw.githubusercontent.com/kenpeter/resumefront/master/misc/redux.png)

* So the Page, Menu, Home are you React components.
* Image you still user jQuery, then on those Page, Menu, etc you click on a button, then something
will popup/change.
* So the "Action" on the diagram is like "Click", while the "Reducer" on the diagram is like "Listener".
* "State" on the diagram contains smaller states, e.g. like TV, light, air-condition, door, windows. They can be open or close. "State" represents the entire attributes of your App.
* Redux has a root reducer. This root reducer contains many smaller reducers. Reducer A can control TV on/off, Reducer B can control door open or close, etc....
* Because TV is on, door is close, etc... That means your entire view is changed now.

## About the back end
* Git clone https://github.com/kenpeter/resumeback
* ```yarn start``` will launch the backend and listening to port 8014.
* It uses Express, Json web token and Moogose to connect to MongoDB.
* There are 3 routes here.
  * /setup, this url needs to be hit first. After hit, it imports some data to your mongodb. This means you need to configure your MongoDB instance and change the connection detail in config.js
  * /, home route, nothing here.
  * /api/defaultUser, this will join 3 collections and pull out an entire json object for you.

## A diagram for the entire simple site

![alt img](https://raw.githubusercontent.com/kenpeter/resumefront/master/misc/resume_front_back.png)

# Ref
* https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3#.44hlq3vvt
* https://github.com/stowball/dummys-guide-to-redux-and-thunk-react
* https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react
* https://medium.com/@kkomaz/react-to-async-await-553c43f243e2

* https://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native
* https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
* https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8
* https://enable-cors.org/server_expressjs.html
