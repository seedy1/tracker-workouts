const router = require("express").Router();
let Exercise = require("../models/exercise.model");


router.route("/").get( (req, res) => {
    Exercise.find().then( ex => res.json(ex))
                    .catch(err => res.status(400).json("Error: "+err));
} );


router.route("/add").post( (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username, description, duration, date
    });

    newExercise.save().then( ()=> res.json("Exercise added") )
                        .catch(err => res.status(400).json("Error: "+err));;

 } );

router.route("/:id").get( (req, res) =>{
     Exercise.findById(req.params.id).then(ex => res.json(ex))
                            .catch(err => res.status(400).json("Error: "+err));
 } );

 router.route("/:id").delete( (req, res) =>{
    Exercise.findByIdAndDelete(req.params.id).then(() => res.json("Deleted!"))
                           .catch(err => res.status(400).json("Error: "+err));
} );


router.route("/update/:id").post( (req, res) =>{
    Exercise.findById(req.params.id)
    .then(ex =>{
        ex.username = req.body.username;
        ex.description = req.body.description;
        ex.duration = Number(req.body.duration);
        ex.date =  Date.parse(req.body.date );

        ex.save().then( ()=> res.json("Exercise updated") )
        .catch(err => res.status(400).json("Error: "+err));;

    } )
    .catch(err => res.status(400).json("Error: "+err));
} );



 module.exports = router;
