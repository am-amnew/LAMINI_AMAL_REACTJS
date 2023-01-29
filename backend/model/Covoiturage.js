const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://amal:amal2001@cluster0.ss5kt1w.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))
const covoiturageSchema = new mongoose.Schema({
    Prenom: String,
    Tele: String,
    Matricule: String,
    tarif: String,
    PDR: String,
    condition: String,
    offre: { type: String }
})
const Covoiturage = new mongoose.model("covoiturage", covoiturageSchema)
module.exports = Covoiturage