const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://amal:amal2001@cluster0.ss5kt1w.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))
const busSchema = new mongoose.Schema({
    Prenom: String,
    Tele: String,
    Matricule: String,
    PDP: String,
    PDA: String,
    adress: { type: String },
    ligne: { type: String }
})
const bus = new mongoose.model("bus", busSchema)
module.exports = bus