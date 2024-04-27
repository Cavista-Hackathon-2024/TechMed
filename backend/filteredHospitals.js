// specialist.js

const conditionSpecialistsMap = {
    "broken bone": ["orthopaedic surgeon"],
    "car accident": ["general practitioner", "orthopaedic surgeon"],
    "car accident with head trauma": ["orthopaedic surgeon", "neurosurgeon"],
    "bullet wound": ["general surgeon"],
    "unknown": ["general practitioner"],
    "sudden paralysis": ["neurologist"],
    "burn": ["plastic surgeon"],
    "severe vomiting": ["general practitioner"]
};

function findSpecialist(patient) {
    let specialists = [];

    let complaints = patient.complaints;
    complaints.forEach(complaints => {
        if (conditionSpecialistsMap[complaints]) {
            specialists.push(...conditionSpecialistsMap[complaints])
        }
    })
    if (patient.is_pregnant) {
        specialists.push("obstetrician");
    }
    return specialists;
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

function filterHospitals(hospitals, requiredSpecialists, requiredWards, patientType, gender) {
    const results = [];
    for (const hospital of hospitals) {
        const foundWardTypes = [];
        let foundAllSpecialists = true;

        // Check ward types
        for (const wardType of requiredWards) {
            let foundWardType = false;
            for (const [category, wards] of Object.entries(hospital.wards)) {
                if (category.toLowerCase() === 'special') {
                    for (const [specialWard, specialWardDetails] of Object.entries(wards)) {
                        if (specialWard.toLowerCase() === wardType.toLowerCase()) {
                            foundWardType = true;
                            break;
                        }
                    }
                }
                if (category.toLowerCase() === wardType.toLowerCase()) {
                    if (patientType.toLowerCase() === 'adult' && wards.ADULT) {
                        foundWardType = true;
                        break;
                    } else if (patientType.toLowerCase() === 'paediatric' && wards.PAEDIATRIC) {
                        foundWardType = true;
                        break;
                    }
                }
            }
            foundWardTypes.push(foundWardType);
        }

        // Check specialists
        for (const specialist of requiredSpecialists) {
            if (!hospital.specialists.includes(specialist.toLowerCase())) {
                foundAllSpecialists = false;
                break;
            }
        }


        // Check gender and free space for all ward types
        let hasFreeSpace = false;
        for (const wardType of requiredWards) {
            let ward = null;
            if (hospital.wards[wardType.toUpperCase()]) {
                ward = hospital.wards[wardType.toUpperCase()][patientType.toUpperCase()][gender.toUpperCase()];
            } else {
                for (const [category, wards] of Object.entries(hospital.wards)) {
                    if (category.toLowerCase() === 'special') {
                        for (const [specialWard, specialWardDetails] of Object.entries(wards)) {
                            if (specialWard.toLowerCase() === wardType.toLowerCase()) {
                                ward = specialWardDetails[gender.toUpperCase()];
                                break;
                            }
                        }
                    }
                }
            }
            if (ward && ward.free > 0) {
                hasFreeSpace = true;
                break;
            }
        }

        if (foundWardTypes.includes(true) && foundAllSpecialists && hasFreeSpace) {
            results.push({
                "name": hospital.name,
                "location": hospital.location,
                "compatibilty": "yes"
                
            });
        }
        else {
            results.push({
                "name": hospital.name,
                "location": hospital.location,
                "compatibilty": "no"   
            });
        }
    }
    return results;
}



module.exports = { findSpecialist, wardType, filterHospitals};

