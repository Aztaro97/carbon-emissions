let express =require('express');
let app = express();
let dotenv = require('dotenv')
let bodyParser = require('body-parser');


dotenv.config()
let PORT = process.env.PORT || 3000;

//  ENGINE TEMPLATE
app.set('view engine', 'ejs')



//   MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(express.static('public'))


//  ROUTE
app.get('/', (req, res, next) => {
    res.render('index')
})


app.listen(PORT, ()=> {
    console.log("Listening on port 3000")
})