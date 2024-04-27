const geolib = require("geolib");

const conditionSpecialtiesMap = {
    "broken bone": ["orthopaedic surgery"],
    "car accident": ["general practice", "orthopaedic surgery"],
    "car accident with head trauma": ["orthopaedic surgery", "neurosurgery"],
    "bullet wound": ["general surgery"],
    "unknown": ["general practice"],
    "sudden paralysis": ["neurology"],
    "burn": ["plastic surgery"],
    "severe vomiting": ["general practice"]
};


function findSpecialty(patient) {
    let specialties = [];

    let complaints = patient.complaints;
    complaints.forEach(complaints => {
        if (conditionSpecialtiesMap[complaints]) {
            specialties.push(...conditionSpecialtiesMap[complaints])
        }
    })
    if (patient.is_pregnant) {
        specialties.push("obstetrician");
    }
    return specialties;
}


const condition_ward_map = {
    MEDICAL: ["severe vomiting", "sudden paralysis"],
    SURGICAL: ["broken bone", "car accident", "bullet wound"],
    BURNS: ["burn"],
    STROKE: ["sudden paralysis"],
}


function wardType(patient) {
    let wards = [];
    if (patient.is_pregnant) {
        return "LABOUR";
    }
    patient.complaints.forEach(complaint => {
        Object.entries(condition_ward_map).forEach(([wardType, symptoms]) => {
            if (symptoms.includes(complaint) && !wards.includes(wardType)) {
                wards.push(wardType);
            }
        });
    });
    return wards.length > 0 ? wards : ["UNKNOWN"];
}

// function filterHospitals(hospitals, requiredSpecialties, requiredWards, patientType, gender, location) {
//     const results = [];
//     for (const hospital of hospitals) {
//         const wards = [];
//         const foundWardTypes = [];
//         let foundAllSpecialties = true;

//         // Check ward types
//         for (const wardType of requiredWards) {
//             let foundWardType = false;
//             for (const [category, wards] of Object.entries(hospital.wards)) {
//                 if (category.toLowerCase() === 'special') {
//                     for (const [specialWard, specialWardDetails] of Object.entries(wards)) {
//                         if (specialWard.toLowerCase() === wardType.toLowerCase()) {
//                             foundWardType = true;
//                             break;
//                         }
//                     }
//                 }
//                 if (category.toLowerCase() === wardType.toLowerCase()) {
//                     if (patientType.toLowerCase() === 'adult' && wards.ADULT) {
//                         foundWardType = true;
//                     } else if (patientType.toLowerCase() === 'paediatric' && wards.PAEDIATRIC) {
//                         foundWardType = true;
//                         break;
//                     }
//                 }
//             }
//             foundWardTypes.push(foundWardType);
//         }

//         // Check specialties
//         for (const specialty of requiredSpecialties) {
//             if (!hospital.specialties.includes(specialty)) {
//                 foundAllSpecialties = false;
//                 break;
//             }
//         }


//         // Check gender and free space for all ward types
//         let hasFreeSpace = false;
//         for (const wardType of requiredWards) {
//             let ward = null;
//             if (hospital.wards[wardType.toUpperCase()]) {
//                 if(hospital.wards[wardType.toUpperCase()]){
//                     if( hospital.wards[wardType.toUpperCase()]?.[patientType.toUpperCase()]){
//                         ward = hospital.wards[wardType.toUpperCase()]?.[patientType.toUpperCase()]?.[gender.toUpperCase()];
//                         if(!ward){
//                             continue
//                         }
//                     }
//                 }
//             } else {
//                 for (const [category, wards] of Object.entries(hospital.wards)) {
//                     if (category.toLowerCase() === 'special') {
//                         for (const [specialWard, specialWardDetails] of Object.entries(wards)) {
//                             if (specialWard.toLowerCase() === wardType.toLowerCase()) {
//                                 ward = specialWardDetails[gender.toUpperCase()];
//                                 break;
//                             }
//                         }
//                     }
//                 }
//             }
//             if (ward && ward.free > 0) {
//                 hasFreeSpace = true;
//                 break;
//             }
//         }

//         const { latitude, longitude } = location
//         const destination = { latitude: hospital.latitude, longitude: hospital.longitude }; // Destination coordinates

//         const distanceInMeters = geolib.getDistance(
//         { latitude, longitude },
//         destination
//         );
//         if (foundWardTypes.includes(true) && foundAllSpecialties && hasFreeSpace) {
//             results.push({
//                 "name": hospital.name,
//                 "latitude": hospital.latitude,
//                 "longitude": hospital.longitude,
//                 "type": hospital.type,
//                 "compatibilty": "true",
//                 "distance": distanceInMeters,
//                 "facilities": hospital.facilities
//             });
//         }
//         // else {
//         //     results.push({
//         //         "name": hospital.name,
//         //         "latitude": hospital.latitude,
//         //         "longitude": hospital.longitude,
//         //         "type": hospital.type,
//         //         "compatibilty": "false"   
//         //     });
//         // }
//     }
//     return results;
// }

function filterHospitals(hospitals, requiredSpecialties, requiredWards, patientType, gender, location) {
    const results = [];
    for (const hospital of hospitals) {
        const wards = [];
        const foundWardTypes = [];
        let foundAllSpecialties = true;

        // Check ward types
        for (const wardType of requiredWards) {
            let foundWardType = false;
            let totalBeds = 0;
            let freeBeds = 0;
            for (const [category, wards] of Object.entries(hospital.wards)) {
                if (category.toLowerCase() === 'special') {
                    for (const [specialWard, specialWardDetails] of Object.entries(wards)) {
                        if (specialWard.toLowerCase() === wardType.toLowerCase()) {
                            if (specialWardDetails[gender.toUpperCase()]) {
                                totalBeds += specialWardDetails[gender.toUpperCase()].total;
                                freeBeds += specialWardDetails[gender.toUpperCase()].free;
                            }
                            foundWardType = true;
                            break;
                        }
                    }
                }
                if (category.toLowerCase() === wardType.toLowerCase()) {
                    if (patientType.toLowerCase() === 'adult' && wards.ADULT) {
                        if (wards.ADULT[gender.toUpperCase()]) {
                            totalBeds += wards.ADULT[gender.toUpperCase()].total;
                            freeBeds += wards.ADULT[gender.toUpperCase()].free;
                        }
                        foundWardType = true;
                    } else if (patientType.toLowerCase() === 'paediatric' && wards.PAEDIATRIC) {
                        if (wards.PAEDIATRIC[gender.toUpperCase()]) {
                            totalBeds += wards.PAEDIATRIC[gender.toUpperCase()].total;
                            freeBeds += wards.PAEDIATRIC[gender.toUpperCase()].free;
                        }
                        foundWardType = true;
                        break;
                    }
                }
            }
            foundWardTypes.push(foundWardType);
            wards.push({ wardType, totalBeds, freeBeds });
        }

        // Check specialties
        for (const specialty of requiredSpecialties) {
            if (!hospital.specialties.includes(specialty)) {
                foundAllSpecialties = false;
                break;
            }
        }

        // Check gender and free space for all ward types
        let hasFreeSpace = false;
        for (const ward of wards) {
            if (ward.freeBeds > 0) {
                hasFreeSpace = true;
                break;
            }
        }

        const { latitude, longitude } = location;
        const destination = { latitude: hospital.latitude, longitude: hospital.longitude };
        const distanceInMeters = geolib.getDistance(
            { latitude, longitude },
            destination
        );

        if (foundWardTypes.includes(true) && foundAllSpecialties && hasFreeSpace) {
            results.push({
                "name": hospital.name,
                "latitude": hospital.latitude,
                "longitude": hospital.longitude,
                "type": hospital.type,
                "compatibility": "true",
                "distance": distanceInMeters,
                "facilities": hospital.facilities,
                "wards": wards
            });
        }
    }
    return results;
}

const hospitals = require("./hospitals")
const ft = filterHospitals(hospitals, ["orthopaedic surgery"], ["SURGICAL"], "ADULT", "male", {latitude:6.5187, longitude: 3.3966})
console.log(ft)
module.exports = { findSpecialty, wardType, filterHospitals};

