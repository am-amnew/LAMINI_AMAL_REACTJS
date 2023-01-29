const express = require('express')
const app = express();
const User = require("./model/User");
const Motor = require("./model/Motor");
const bus = require("./model/bus");
const Admin = require("./model/Admin");
const Taxi = require("./model/Taxi");
const Covoiturage = require("./model/Covoiturage");
const Comment = require("./model/Comment");

const cors = require("cors")
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors());

app.get('/signin', cors(), (req, res) => {})
app.get('/signup', cors(), (req, res) => {})
app.get('/reservermotor', cors(), (req, res) => {})





app.get('/users', async(req, res) => {
    const product = await User.find()
    res.json(product)
})
app.get('/showtablebus', async(req, res) => {
    const product2 = await bus.find()
    res.json(product2)
})
app.get('/showtaxi', async(req, res) => {
    const product = await Taxi.find()
    res.json(product)
})
app.get('/showcovoi', async(req, res) => {
    const product = await Covoiturage.find()
    res.json(product)
})
app.get('/showmotor', async(req, res) => {
    const product = await Motor.find()
    res.json(product)
})
app.get('/showcomment', async(req, res) => {
    const product = await Comment.find()
    res.json(product)
})






app.delete('/delete/User/:id', async(req, res) => {

    try {
        const deleteduser = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
app.delete('/delete/motor/:id', async(req, res) => {

    try {
        const deleteduser = await Motor.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
app.delete('/delete/taxi/:id', async(req, res) => {

    try {
        const deleteduser = await Taxi.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})


app.delete('/delete/bus/:id', async(req, res) => {

    try {
        const deleteduser = await bus.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
app.delete('/delete/covoi/:id', async(req, res) => {

    try {
        const deleteduser = await Covoiturage.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
app.delete('/delete/comment/:id', async(req, res) => {

    try {
        const deleteduser = await Comment.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})



app.patch('/edit/:id', async(req, res) => {

    try {
        const updateduser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

app.patch('/edit/bus/:id', async(req, res) => {

    try {
        const updateduser = await bus.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})
app.patch('/edit/taxi/:id', async(req, res) => {

    try {
        const updateduser = await Taxi.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})
app.patch('/edit/covoi/:id', async(req, res) => {

    try {
        const updateduser = await Covoiturage.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})
app.patch('/edit/motor/:id', async(req, res) => {

    try {
        const updateduser = await Motor.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})






app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.json("list")
            } else {
                res.json("error")
            }
        } else {
            res.json("error")
        }
    })
});


app.post("/signinAdmin", (req, res) => {
    const { email, password } = req.body;
    Admin.findOne({ email: email }, (err, admin) => {
        if (admin) {
            if (password === admin.password) {
                res.json("list")
            } else {
                res.json("error")
            }
        } else {
            res.json("error")
        }
    })
});






app.post("/signup", (req, res) => {
    const { Matricule, Prenom, name, Tele, email, password } = req.body
    const re = /^[a-zA-Z0-9+_.-]+@+gmail.com+$/;
    if (re.test(email)) {
        User.findOne({ email: email }, (err, user) => {
            if (user) {
                res.json("userexist")
            } else {
                const user = new User({ Matricule, Prenom, name, Tele, email, password })
                user.save(err => {
                    if (err) {
                        res.send(err.message)
                    } else {
                        res.json("good")
                    }
                })
            }
        })
    } else {
        res.json("invalidgmail")

    }

})



app.post("/reservermotor", (req, res) => {
    const { Prenom, nom, Matricule, Tele, heure, mat } = req.body

    Motor.findOne({ Matricule: Matricule }, (err, motor) => {
        if (motor) {
            res.json("userexist")
        } else {
            const motor = new Motor({ Prenom, nom, Matricule, Tele, heure, mat })
            motor.save(err => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.json("good")
                }
            })
        }
    })


})
app.post("/comment", (req, res) => {
    const { name, comment } = req.body

    Comment.findOne({ name: name }, (err, com) => {
        if (com) {
            res.json("userexist")
        } else {
            const com = new Comment({ name, comment })
            com.save(err => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.json("good")
                }
            })
        }
    })


})




app.post("/reserverbus", (req, res) => {
    const { Prenom, Matricule, Tele, email, PDP, PDA, adress, ligne } = req.body

    bus.findOne({ Matricule: Matricule }, (err, Bus) => {
        if (Bus) {
            res.json("userexist")
        } else {
            const Bus = new bus({ Prenom, Matricule, Tele, email, PDP, PDA, adress, ligne })
            Bus.save(err => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.json("good")
                }
            })
        }
    })


})




app.post("/reservertaxi", (req, res) => {
    const { Prenom, Matricule, Tele, destination, num } = req.body

    Taxi.findOne({ Matricule: Matricule }, (err, taxi) => {
        if (taxi) {
            res.json("userexist")
        } else {
            const taxi = new Taxi({ Prenom, Matricule, Tele, destination, num })
            taxi.save(err => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.json("good")
                }
            })
        }
    })


})




app.post("/reservercovoi", (req, res) => {
    const { Prenom, Matricule, Tele, tarif, PDR, condition, offre } = req.body

    Covoiturage.findOne({ Matricule: Matricule }, (err, covoiturage) => {
        if (covoiturage) {
            res.json("userexist")
        } else {
            const covoiturage = new Covoiturage({ Prenom, Matricule, Tele, tarif, PDR, condition, offre })
            covoiturage.save(err => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.json("good")
                }
            })
        }
    })


})


app.post("/signuPadmin", (req, res) => {
    const { Prenom, Tele, email, password } = req.body

    Admin.findOne({ email: email }, (err, admin) => {
        if (admin) {
            res.json("userexist")
        } else {
            const admin = new Admin({ Prenom, Tele, email, password })
            admin.save(err => {
                if (err) {
                    res.send(err.message)
                } else {
                    res.json("good")
                }
            })
        }
    })


})




app.listen(8000, () => {
    console.log("Server started and running on port 5000")
})