var express  = require('express'),
    restfull = require('node-restfull'),
    mongoose = restfull.mongoose;

var app = express();
app.configure(function(){
    app.use(express.bodyParse());
    app.use(express.methodOverride());
    
});

mongoose.connect('mongodb://127.0.0.1/restfull');

var Products = restfull.model('produk', ProductsSchema);
Products.methods(['get', 'put', 'posts', 'delete']);
Products.register(app, '/api/products');

app.listen(1444);
console.log('Server running at port 1444');