var express  = require('express'),
    restfull = require('node-restful'),
    mongoose = restfull.mongoose;

var app = express();
app.configure(function(){
    app.use(express.bodyParse());
    app.use(express.methodOverride());
    
});

mongoose.connect('mongodb://127.0.0.1/restful');

var ProductSchema = mongoose.Schema({
    name:String,
    sku:String,
    price:Number
});

var Products= restful.model('products', ProductSchema);
        Products.methods(['get','put','post','delete']);
        Products.register(app,'/api/products');

app.listen(1444);
console.log('Server running pada port 14444');