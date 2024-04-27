const hospitals = [
    {
        name: "Lagos University Teaching Hospital",
        address: "Idi-Araba, Lagos",
        type: "GENERAL",
        specialties: ["Cardiology", "Oncology", "Neurology", "Pediatrics"],
        facilities: ["O2", "Dialysis", "Radiography", "Laboratory"],
        latitude: 6.5244,
        longitude: 3.3792,
        wards: {
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                STROKE: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                ICU: {
                    GENERAL: { total: 10, free: 2 }
                },
                LABOUR: { GENERAL: { total: 10, free: 2, seeking: 0 } },
                GYNAE: { GENERAL: { total: 10, free: 2 } }
            }
        }
    },
    {
        name: "Reddington Hospital",
        address: "Victoria Island, Lagos",
        type: "PRIVATE",
        specialties: ["Orthopedics", "Gynecology", "Urology", "Dermatology"],
        facilities: ["O2", "Radiography", "Laboratory"],
        latitude: 6.4338,
        longitude: 3.4235,
        wards: {
            MEDICAL: {
                ADULT: {
                    MALE: { total: 8, free: 1 },
                    FEMALE: { total: 8, free: 1 },
                    GENERAL: { total: 8, free: 1 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 8, free: 1 },
                    FEMALE: { total: 8, free: 1 },
                    GENERAL: { total: 8, free: 1 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 8, free: 1 },
                    FEMALE: { total: 8, free: 1 },
                    GENERAL: { total: 8, free: 1 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Gbagada General Hospital",
        address: "Gbagada, Lagos",
        type: "GENERAL",
        specialties: ["Emergency Medicine", "Internal Medicine", "Surgery"],
        facilities: ["O2", "Dialysis", "Radiography", "Laboratory"],
        latitude: 6.5678,
        longitude: 3.3901,
        wards: {
            MEDICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                STROKE: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                ICU: {
                    GENERAL: { total: 8, free: 2 }
                },
                LABOUR: { GENERAL: { total: 8, free: 2, seeking: 0 } },
                GYNAE: { GENERAL: { total: 8, free: 2 } }
            }
        }
    },
    {
        name: "Lagoon Hospitals",
        address: "Apapa, Lagos",
        type: "PRIVATE",
        specialties: ["Cardiology", "Neurosurgery", "Gastroenterology"],
        facilities: ["O2", "Radiography", "Laboratory"],
        latitude: 6.4456,
        longitude: 3.3678,
        wards: {
            MEDICAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Ikorodu General Hospital",
        address: "Ikorodu, Lagos",
        type: "GENERAL",
        specialties: ["Pediatrics", "Obstetrics and Gynecology", "Family Medicine"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.6178,
        longitude: 3.5012,
        wards: {
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Epe General Hospital",
        address: "Epe, Lagos",
        type: "GENERAL",
        specialties: ["Emergency Medicine", "Family Medicine", "Pediatrics"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.5901,
        longitude: 3.9802,
        wards: {
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Alimosho General Hospital",
        address: "Alimosho, Lagos",
        type: "GENERAL",
        specialties: ["Internal Medicine", "Surgery", "Obstetrics and Gynecology"],
        facilities: ["O2", "Radiography", "Laboratory"],
        latitude: 6.6345,
        longitude: 3.2456,
        wards: {
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Isolo General Hospital",
        address: "Isolo, Lagos",
        type: "GENERAL",
        specialties: ["Family Medicine", "Pediatrics", "Obstetrics and Gynecology"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.5123,
        longitude: 3.3012,
        wards: {
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Randle General Hospital",
        address: "Surulere, Lagos",
        type: "GENERAL",
        specialties: ["Internal Medicine", "Surgery", "Orthopedics"],
        facilities: ["O2", "Radiography", "Laboratory"],
        latitude: 6.4901,
        longitude: 3.3456,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    //   
    {
        name: "Massey Street Children's Hospital",
        address: "Lagos Island, Lagos",
        type: "GENERAL",
        specialties: ["Pediatrics", "Neonatology", "Pediatric Surgery"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.4456,
        longitude: 3.4012,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SURGICAL: {
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            GENERAL: {
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Onikan Health Center",
        address: "Lagos Island, Lagos",
        type: "GENERAL",
        specialties: ["Family Medicine", "Maternal and Child Health"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.4567,
        longitude: 3.4123,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            SPECIAL: {
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Ajeromi General Hospital",
        address: "Ajegunle, Lagos",
        type: "GENERAL",
        specialties: ["Internal Medicine", "Surgery", "Obstetrics and Gynecology"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.4789,
        longitude: 3.3456,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Ifako-Ijaiye General Hospital",
        address: "Ifako-Ijaiye, Lagos",
        type: "GENERAL",
        specialties: ["Family Medicine", "Pediatrics", "Obstetrics and Gynecology"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.6012,
        longitude: 3.2789,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Badagry General Hospital",
        address: "Badagry, Lagos",
        type: "GENERAL",
        specialties: ["Family Medicine", "Obstetrics and Gynecology", "Pediatrics"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.4123,
        longitude: 2.8901,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    //   here
    {
        name: "Eko Hospital",
        address: "Victoria Island, Lagos",
        type: "PRIVATE",
        specialties: ["Cardiology", "Neurology", "Oncology"],
        facilities: ["O2", "Radiography", "Laboratory", "Dialysis"],
        latitude: 6.4345,
        longitude: 3.4234,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                STROKE: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                ICU: {
                    GENERAL: { total: 8, free: 2 }
                },
                LABOUR: { GENERAL: { total: 8, free: 2, seeking: 0 } },
                GYNAE: { GENERAL: { total: 8, free: 2 } }
            }
        }
    },
    {
        name: "St. Nicholas Hospital",
        address: "Lagos Island, Lagos",
        type: "PRIVATE",
        specialties: ["Cardiology", "Neurosurgery", "Orthopedics"],
        facilities: ["O2", "Radiography", "Laboratory"],
        latitude: 6.4456,
        longitude: 3.4012,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Havana Specialist Hospital",
        address: "Ikeja, Lagos",
        type: "PRIVATE",
        specialties: ["Oncology", "Nephrology", "Gastroenterology"],
        facilities: ["O2", "Dialysis", "Radiography", "Laboratory"],
        latitude: 6.5901,
        longitude: 3.3456,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                STROKE: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                ICU: {
                    GENERAL: { total: 8, free: 2 }
                },
                LABOUR: { GENERAL: { total: 8, free: 2, seeking: 0 } },
                GYNAE: { GENERAL: { total: 8, free: 2 } }
            }
        }
    },
    {
        name: "Clinix Health Services",
        address: "Lekki, Lagos",
        type: "PRIVATE",
        specialties: ["Family Medicine", "Pediatrics", "Dermatology"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.4567,
        longitude: 3.5012,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    //   here
    {
        name: "Vedic Lifecare Hospital",
        address: "Ikeja, Lagos",
        type: "PRIVATE",
        specialties: ["neurology", "orthopaedics surgery", "general surgery"],
        facilities: ["O2", "Radiography", "Laboratory"],
        latitude: 6.5901,
        longitude: 3.3456,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Evercare Hospital Lekki",
        address: "Lekki, Lagos",
        type: "PRIVATE",
        specialties: ["neurosurgery", "cardiothoracic surgery", "oncology"],
        facilities: ["O2", "Radiography", "Laboratory", "Dialysis"],
        latitude: 6.4567,
        longitude: 3.5012,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                STROKE: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                ICU: {
                    GENERAL: { total: 8, free: 2 }
                },
                LABOUR: { GENERAL: { total: 8, free: 2, seeking: 0 } },
                GYNAE: { GENERAL: { total: 8, free: 2 } }
            }
        }
    },
    {
        name: "Clinix Health Services Ikeja",
        address: "Ikeja, Lagos",
        type: "PRIVATE",
        specialties: ["general practice", "pediatrics", "dermatology"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.5901,
        longitude: 3.3456,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Lagoon Hospitals Ikoyi",
        address: "Ikoyi, Lagos",
        type: "PRIVATE",
        specialties: ["cardiothoracic surgery", "neurosurgery", "gastroenterology"],
        facilities: ["O2", "Radiography", "Laboratory"],
        latitude: 6.4456,
        longitude: 3.4234,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Clinix Health Services Surulere",
        address: "Surulere, Lagos",
        type: "PRIVATE",
        specialties: ["general practice", "pediatrics", "dermatology"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.4901,
        longitude: 3.3456,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Vedic Lifecare Hospital Lekki",
        address: "Lekki, Lagos",
        type: "PRIVATE",
        specialties: ["neurology", "orthopaedics surgery", "general surgery"],
        facilities: ["O2", "Radiography", "Laboratory"],
        latitude: 6.4567,
        longitude: 3.5012,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
    {
        name: "Evercare Hospital Ikeja",
        address: "Ikeja, Lagos",
        type: "PRIVATE",
        specialties: ["neurosurgery", "cardiothoracic surgery", "oncology"],
        facilities: ["O2", "Radiography", "Laboratory", "Dialysis"],
        latitude: 6.5901,
        longitude: 3.3456,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SURGICAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 12, free: 3 },
                    FEMALE: { total: 12, free: 3 },
                    GENERAL: { total: 12, free: 3 }
                },
                PAEDIATRIC: {
                    MALE: { total: 10, free: 2 },
                    FEMALE: { total: 10, free: 2 },
                    GENERAL: { total: 10, free: 2 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                STROKE: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                ICU: {
                    GENERAL: { total: 8, free: 2 }
                },
                LABOUR: { GENERAL: { total: 8, free: 2, seeking: 0 } },
                GYNAE: { GENERAL: { total: 8, free: 2 } }
            }
        }
    },
    {
        name: "Clinix Health Services Victoria Island",
        address: "Victoria Island, Lagos",
        type: "PRIVATE",
        specialties: ["general practice", "pediatrics", "dermatology"],
        facilities: ["O2", "Laboratory"],
        latitude: 6.4338,
        longitude: 3.4235,
        wards: {
            // Suggest data for wards
            MEDICAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            GENERAL: {
                ADULT: {
                    MALE: { total: 8, free: 2 },
                    FEMALE: { total: 8, free: 2 },
                    GENERAL: { total: 8, free: 2 }
                },
                PAEDIATRIC: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                }
            },
            SPECIAL: {
                BURNS: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                STROKE: {
                    MALE: { total: 6, free: 1 },
                    FEMALE: { total: 6, free: 1 },
                    GENERAL: { total: 6, free: 1 }
                },
                ICU: {
                    GENERAL: { total: 6, free: 1 }
                },
                LABOUR: { GENERAL: { total: 6, free: 1, seeking: 0 } },
                GYNAE: { GENERAL: { total: 6, free: 1 } }
            }
        }
    },
]