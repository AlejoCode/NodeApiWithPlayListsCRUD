
const express = require('express');
const PlayLists = require('../schema/PlayList');
const mongoose = require('mongoose');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message:"Serving Playlists on the Endpoint."
    });   
});

router.get("/list", (req, res, next) => {
    PlayLists.find({})
        .exec()
        .then(docs => {
            res.status(200).json({
                docs
            });
        })
        .catch(err => {
            console.log(err)
    });
});

router.post("/add", (req, res, next) => {
    console.log("entered to add")
    let songsArray = req.body.songs.split(',');
    const playList = new PlayLists({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        songs: songsArray
    });

    playList.save()
    .then(result => {
        res.status(200).json({
            docs:[playList]
        });
    })
    .catch(err => {
        console.log(err);
    });
});

router.post("/delete", (req, res, next) => {
    const rid = req.body.id;

    PlayLists.findById(rid)
        .exec()
        .then(docs => {
            docs.remove();
            res.status(200).json({
                deleted:true
            });
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;