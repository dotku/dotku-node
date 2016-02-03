#dotku-node
## express_4.x_router

I'm trying to switch the default Express template engine from Jade to Handlebars.
The sample from [express-handlebars](https://github.com/ericf/express-handlebars) 
actually runs well, just the router which I don't really like.

The express-handlebars using app.get() to setup the routers, and put all routers in app.js file. It takes some lines in app.js file, so I want to reduce them by using /router/index.js file. And ... I got a error says app.get() can't be found in /router/index.js. I take some code from here: http://stackoverflow.com/questions/25596803/express-4-with-handlebars-add-new-route/25597043#25597043, and I still can't find the way out.

Any helps?!

github: https://github.com/dotku/node-study/tree/express_4.x_router
