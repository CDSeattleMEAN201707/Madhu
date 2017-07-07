const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "./client")))

// app.HTTP_VERB('URL', function (req, res){});  // HTTP_VERB is either 'get' or 'post' etc...
app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", (request, response) => {
	 
	response.render("index")
})
// app.get("/results/:id", function (req, res){
//     console.log("The user id requested is:", req.params.id);
//     // just to illustrate that req.params is usable here:
//     res.send("You requested the user with id: " + req.params.id);
//     // code to get user from db goes here, etc...
// });
app.post('/results', function (req, res){
    // console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
	res.render('results',{data:req.body});
     
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
