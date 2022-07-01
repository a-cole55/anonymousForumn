const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PostModel = require('./models/Posts');


app.use(cors());
//middleware to receive JSON data
app.use(express.json());


//DATABASE CONNECTION
mongoose.connect(
    "mongodb://127.0.0.1:27017/anonymousForumn?readPreference=primary&appname=MongoDB%20Compass&ssl=false", 
    { useNewUrlParser: true,
    useUnifiedTopology: true
     }
);

app.post('/addPost', async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const title = req.body.title;

    const post = new PostModel({name: name, title: title, postDescription: description});
    await post.save()
    res.send("Inserted Data")
}), 

app.get("/read", async (req, res) => {
    PostModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }else{
            res.send(result)
        }
    });
})

app.listen(4000, () => {
    console.log("running on port 4000")
});