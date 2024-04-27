const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config(); // Load environment variables from .env file

const { findSpecialist, wardType, filterHospitals } = require("./filteredHospitals");
const hospitals = require("./hospitals");
const { convertArea } = require("geolib");
const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("connected to db");
    })
    .catch(function (err) {
        console.log(err);
    });

// Define schema for patients
const patientSchema = new mongoose.Schema({
    age: Number,
    gender: String,
    is_pregnant: Boolean,
    complaints: [String]
});

// Create model for patients collection
const PatientModel = mongoose.model("Patient", patientSchema);

// Middleware to parse JSON data
app.use(express.json());


// POST endpoint to add a new patient
app.post("/patient", (req, res) => {
    // Extract patient information from request body
    const { age, gender, is_pregnant, complaints } = req.body;

    // Create a new patient document
    const newPatient = new PatientModel({
        age,
        gender,
        is_pregnant,
        complaints
    });

    // Save the new patient to the database
    newPatient.save()
        .then((patient) => {
            // Send a response with a personalized message
            const specialists = findSpecialist(patient);
            const patientWard = wardType(patient);
            const patientType = patient.age > 14 ? "ADULT" : "PAEDIATRIC";

            // Filter hospitals based on required specialist and ward
            const filteredHospitals = filterHospitals(hospitals, specialists, patientWard, patientType, gender);

            // res.json({ message: `Hi! Your information has been received. Specialists: ${specialists.join(", ")}. Ward: ${patientWard.join(", ")}. Hospitals: ${filteredHospitals.join(", ")}` });
            res.json({
                message: `Hi! Your information has been received.`,
                data: { specialists: specialists, wards: patientWard, Hospitals: filteredHospitals }
            });
        })
        .catch((err) => {
            // Handle any errors and send an error response
            res.status(500).json({ error: "An error occurred while saving the patient information." });
        });
});

// GET request to retrieve hospital details
app.get('/hospitals/:name', (req, res) => {
    const hospitalName = req.params.name;
    const hospital = hospitals.find(h => h.name.toLowerCase() === hospitalName.toLowerCase());

    if (hospital) {
        res.json(hospital);
    } else {
        res.status(404).json({ message: 'Hospital not found' });
    }
});



app.listen(3001, () => {
    console.log("server is running");
})