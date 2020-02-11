const mongoose = require('mongoose');

const playListSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    songs: [String] 

});

var playListModel = mongoose.model("PlayLists", playListSchema);

module.exports = playListModel;