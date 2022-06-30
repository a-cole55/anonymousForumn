const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PostModel = require('./models/Posts')

//DATABASE CONNECTION
mongoose.connect(
    "mongodb://127.0.0.1:27017/anonymousForumn?readPreference=primary&appname=MongoDB%20Compass&ssl=false", 
    { useNewUrlParser: true,
    useUnifiedTopology: true
     }
);

app.get('/insert', async (req, res) => {
    const post = new PostModel({name: "Mario", postDescription: "I love you"});
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