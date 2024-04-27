const hospitals = [
    {
    name: "LASUTH",
    address: "1-5 Oba akinjobi street",
    specialists: ["orthopaedic surgeon", "obstetrician", "general practitioner", "neurosurgeon", 
    "obstetrician","plastic surgeon"],
    wards: {
        MEDICAL: {
            ADULT: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            PAEDIATRIC: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            }
        },
        SURGICAL: {
            ADULT: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            PAEDIATRIC: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            }
        },
        GENERAL: {
            ADULT: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            PAEDIATRIC: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            }
        },
        SPECIAL: {
            BURNS: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            STROKE: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            ICU: {
                GENERAL: { total: 10, free: 2 },
            },
            LABOUR: { GENERAL: { total: 10, free: 2, seeking: 0 } },
            GYNAE: { GENERAL: { total: 10, free: 2 } },
        },
    },
    facilities: {
        oxygen: true,
        dialysis: true,
    },
    location: {
        LAT: 2,
        LONG: 2
    }
},
{
    name: "LUTH",
    address: "1-5 Oba akinjobi street",
    specialists: ["orthopaedic surgeon", "obstetrician", "general practitioner", "neurosurgeon", 
    "obstetrician","plastic surgeon"],
    wards: {
        MEDICAL: {
            ADULT: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            PAEDIATRIC: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            }
        },
        SURGICAL: {
            ADULT: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            PAEDIATRIC: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            }
        },
        GENERAL: {
            ADULT: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            PAEDIATRIC: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            }
        },
        SPECIAL: {
            BURNS: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            STROKE: {
                MALE: { total: 10, free: 2 },
                FEMALE: { total: 10, free: 2 },
                GENERAL: { total: 10, free: 2 },
            },
            ICU: {
                GENERAL: { total: 10, free: 2 },
            },
            LABOUR: { GENERAL: { total: 10, free: 2, seeking: 0 } },
            GYNAE: { GENERAL: { total: 10, free: 2 } },
        },
    },
    facilities: {
        oxygen: true,
        dialysis: true,
    },
    location: {
        LAT: 2,
        LONG: 2
    }
}
];

module.exports = hospitals;