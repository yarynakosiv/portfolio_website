// const jsonServer = require('json-server');
// const auth = require('json-server-auth');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults({
//     noCors: true,
// });
// server.db = router.db;
// server.use(auth);
// server.use(middlewares);
// server.use(router);
//
// server.listen(4000, () => {
//     console.log('JSON Server is running')
// });
//

const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

// /!\ Bind the router db to the app
app.db = router.db;

app.use(cors());
app.use(auth);
app.use(router);

app.listen(4000);
