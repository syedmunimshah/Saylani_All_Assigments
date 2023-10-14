

// var cars = {

//     honda: {
//         civic: {
//             reborn: {
//                 name: "Civic Rebon",
//                 model: "1234",
//                 price: "2000",
//                 colors: ["red", "black", "White"]

//             }
//         }
//     }

// }

// for(var company in cars){
//     for(var model in cars[company])
//     for(var variant in cars[company][model])
//     console.log(cars[company][model][variant].name);
// }



// var cars={
//     name:"ALi",
//     FName:"Azam",
//     Gender:"10",


// }
// cars.color="red";
// console.log(cars.school)
// practice data end 






// Start data 
var carVariants = {
    honda: {
        civic: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIokCSIvhcnANbOpF1M-VSizsGuW-EMB3rEXwe_CVFHX6OeNL8h7amZTj5mRL75G77Y1U&usqp=CAU",
                name: "Honda Civic Reborn",
                year: 2006,
                price: 1500000,
                colors: ["red", "black", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        crv: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOuYf2mGMaTtjflN4UzxID1tehxvRPcPbiEmcwYyK9t-K7XdHLx28otWFezfEBQ8yLi8&usqp=CAU",
                name: "Honda CR-V",
                year: 2023,
                price: 35000,
                colors: ["blue", "gray", "white"],
                doors: 4,
                wheels: 4
            }
        },
        accord: {
            type: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2014_Honda_Accord_2.4_i-VTEC_sedan_%282016-01-07%29_01.jpg/1200px-2014_Honda_Accord_2.4_i-VTEC_sedan_%282016-01-07%29_01.jpg",
                name: "Honda Accord",
                year: 2022,
                price: 28000,
                colors: ["silver", "black", "blue"],
                doors: 4,
                wheels: 4,
            }
        },
        fit: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbaCED1hJ7-zhLUowSBeeDPUG6sVesOoj-4fWTU9hwCuoCPmXXJ3TpzVvdaTu9JiRzfgU&usqp=CAU",
                name: "Honda Fit",
                year: 2023,
                price: 22000,
                colors: ["red", "white", "gray"],
                doors: 4,
                wheels: 4,
            }
        },
        hrv: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGG_SSUFYcB1SpgV-Mmw38Vy8OunrPn7LoQXXeh0o2-NS8MWXFHN_wAhJ0a10iRZWo2I&usqp=CAU",
                name: "Honda HR-V",
                year: 2022,
                price: 25000,
                colors: ["blue", "black", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        pilot: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchflRF1ZZVYkQJ2GKx5gJq19H1wpz3PcRZs7_h0ac4_Pq1vs2coGSFRK9SiRlUPSScYU&usqp=CAU",
                name: "Honda Pilot",
                year: 2023,
                price: 35000,
                colors: ["gray", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        }
    },
    toyota: {
        camry: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMr_8EdyMkgJeQexREo6x6PCUkSjnKp_wQpPT3T2sD3TRu7RU1-zv7KQtAqk4k1Kt_2A&usqp=CAU",
                name: "Toyata Camry",
                year: 2022,
                price: 30000,
                colors: ["silver", "black", "blue"],
                doors: 4,
                wheels: 4
            }
        },
        corolla: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAXQ-l3CkoyACniiPNNK2tpvomxacgTsARW1AFRQ5pPNkBNr6fM-21fxp9eVSL8HkJSg&usqp=CAU",
                name: "Toyota Corolla",
                year: 2023,
                price: 25000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        rav4: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EHH34MWD4iv7mXk_PvjwF1PPHYYohZ_Xs09RFC0kJglSiJfEU27dPg0HxdzBD1yOmeI&usqp=CAU",
                name: "Toyota RAV4",
                year: 2022,
                price: 28000,
                colors: ["blue", "gray", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        highlander: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2D6W3c3bcP3Rd8caxKM1Q0zkWBZFHLntKyo9ntDCYMUzATVxOH6UV1vugjIAfJKqEUbk&usqp=CAU",
                name: "Toyota Highlander",
                year: 2022,
                price: 35000,
                colors: ["gray", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        tacoma: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYsHzF9DR8YOi2Bh16eTErvhcJ6N4kttcwPXCaEthdAp9Jtnio2xaHm_I5uKsSJMS9JiM&usqp=CAU",
                name: "Toyota Tacoma",
                year: 2022,
                price: 32000,
                colors: ["silver", "black", "blue"],
                doors: 2,
                wheels: 4,
            }
        }
    },
    suzuki: {
        baleno: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwGhlZUwcB6QKVXTUkdy85y4pgVWoYAZ8pqV2NQf_QKMWIXHL4rCTst83lfju-uIbCvw&usqp=CAU",
                name: "Suzuki Baleno",
                year: 2023,
                price: 29000,
                colors: ["blue", "silver", "black"],
                doors: 5,
                wheels: 4
            }
        },
        ignis: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xZh65YuG0WJcjfpgfolMx0rDwqZRa34GwH9sB1Mr2dhPGSOMHqHGBLmm0weSoacwBy8&usqp=CAU",
                name: "Suzuki Ignis",
                year: 2023,
                price: 27000,
                colors: ["orange", "white", "gray"],
                doors: 5,
                wheels: 4
            }
        },
        sx4: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpONcDJ1Y0oDuijEGAg2wYYncmSjSR3Tbsw2kGArPdPWTqdvM8OfDM_edd3E_C4xoTYzE&usqp=CAU",
                name: "Suzuki SX4",
                year: 2023,
                price: 31000,
                colors: ["red", "black", "silver"],
                doors: 4,
                wheels: 4
            }
        },
        celerio: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_FRkkkgPWb4lODgQM-QKxVT97MudhLzvgfSMgwCb_PYs3A2WDESAu3Z3nhA6avnuc8o&usqp=CAU",
                name: "Suzuki Celerio",
                year: 2023,
                price: 25000,
                colors: ["white", "gray", "blue"],
                doors: 5,
                wheels: 4
            }
        },
        sCross: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBL4ekQqqDL4H0j5y5uwlBOFTBxm7QpJKL7cEmgfiM_fjoZAjNBnRR9I8halM_QhtvJnA&usqp=CAU",
                name: "Suzuki S-Cross",
                year: 2023,
                price: 33000,
                colors: ["green", "blue", "black"],
                doors: 5,
                wheels: 4
            }
        },
        swift: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMTYshSnkcLR6x5wBVXAjFOEwtgZYCG7we5XIqlz_4JdWjNAu_gX_rUUIYpz7YhKGKD0&usqp=CAU",
                name: "Suzuki Swift",
                year: 2023,
                price: 32000,
                colors: ["red", "white", "gray"],
                doors: 5,
                wheels: 4
            }
        },
        vitara: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GvuYBZNPEYZDO12IAo8TjtLxRzlm8Io276KzqHQNqW6KwUYMiY-RaB_wW6O5garm-J4&usqp=CAU",
                name: "Suzuki Vitara",
                year: 2023,
                price: 35000,
                colors: ["green", "silver", "blue"],
                doors: 5,
                wheels: 4
            }
        },
        jimny: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLINYB0bAsUywkWbneBLIROQn47ystXgHA6myPZl6foVOfELbdC5qWkeANuKGK2xc0oFU&usqp=CAU",
                name: "Suzuki Jimny",
                year: 2023,
                price: 28000,
                colors: ["black", "yellow", "white"],
                doors: 3,
                wheels: 4
            }
        },
        alto: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYRWpr2DP5Gsbsf7gW4oi8SJCNYw6lOW0OqFk-pdOQiL64sAa848PbwrRS2jrJ6zcjiY&usqp=CAU",
                name: "Suzuki Alto",
                year: 2022,
                price: 30000,
                colors: ["silver", "black", "blue"],
                doors: 4,
                wheels: 4
            }
        }
    },
    ford: {
        mustang: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHdISAhLL5Bfnzs1O0I28bLOBhIV5QPhdNqnoQCBrJMh9q-elzCHQlYSQ_G6-FsyRGKw&usqp=CAU",
                name: "ford Mustang",
                year: 2021,
                price: 45000,
                colors: ["red", "white", "black"],
                doors: 2,
                wheels: 4
            }
        },
        focus: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSip4C2bnHFxGa9T-5lG4r0VDgtbkeLilrX5_gxYPZQFoMGDEZrKDuJCU1JJvhBpTIi1k&usqp=CAU",
                name: "Ford Focus",
                year: 2023,
                price: 24000,
                colors: ["blue", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        escape: {
            type: {

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48YvBGqLuNtMbi8TIdziZ9qY2WWPONugmTpfWVJ18cVIERbCZZ2-V1gZ99MCGcqVLuxQ&usqp=CAU",
                name: "Ford Escape",
                year: 2022,
                price: 28000,
                colors: ["gray", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        explorer: {
            type: {

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6ndOAvQ1mI36dvlSSNrLj6HvrgmzpafN6tLmnq_AHkY_5TJRNeFaUtKlaW6SfOSxYlc&usqp=CAU",
                name: "Ford Explorer",
                year: 2022,
                price: 35000,
                colors: ["red", "silver", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        f150: {
            type: {

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0d94bhWHbr-KenPtO5HB3eyHKHjalN3LnMs3_P8QzFqXUE0qLAEaT7zl1OGliyIQREwc&usqp=CAU",
                name: "Ford F-150",
                year: 2022,
                price: 40000,
                colors: ["blue", "black", "gray"],
                doors: 2,
                wheels: 4,
            }
        }
    },
    chevrolet: {
        camaro: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6dWeBtuYDpG8yJvJOc2Gak5TbwfygQ3iexxsVzJdaWmZIhwco7a8mxNKN5175Hsi_KA&usqp=CAU",
                name: "Chevrolet Camaro",
                year: 2022,
                price: 50000,
                colors: ["yellow", "black", "white"],
                doors: 2,
                wheels: 4
            }

        }
    },
    bmw: {
        thirdSeries: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOafqdpr7GvbQy2jv9c20MF-MFA5h_asybaa44_7AYb7Kz2qC9RjPxyAqBxzjfR5oxv3s&usqp=CAU",
                name: "BMW-3-Series",
                year: 2022,
                price: 45000,
                colors: ["gray", "blue", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    audi: {
        a4: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwWOweguFgWq4_3y9xv-1oqyJI-AL7UkyFFrio0UkM1kNmbXI5VxF4Rw32d6Bb357XFU&usqp=CAU",
                name: "Audi-A4",
                year: 2023,
                price: 48000,
                colors: ["white", "silver", "black"],
                doors: 4,
                wheels: 4
            }
        },
        q5: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrK_MDMmGmCg6sxZY7q8giYuyHo3pqst9ags1CxUt5QaR9D-3JYC_gFeCJTKIAMUUEOg&usqp=CAU",
                name: "Audi Q5",
                year: 2023,
                price: 52000,
                colors: ["blue", "gray", "black"],
                doors: 4,
                wheels: 4
            }
        },
        a6: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhMfR7ON3BhiFTS4mTgCDMoyM6Fhlor_SiEfU4fy8roLqeITSu05f1Sm2fOlk-QXnib6o&usqp=CAU",
                name: "Audi A6",
                year: 2023,
                price: 56000,
                colors: ["white", "silver", "gray"],
                doors: 4,
                wheels: 4
            }
        },
        tt: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iL8hgiRJ4VxZkcDT_uhBe-BCiQggeJ8DkESBCEAGwQThBzQJISlKanJCuf6z6-4-d90&usqp=CAU",
                name: "Audi TT",
                year: 2023,
                price: 51000,
                colors: ["black", "white", "red"],
                doors: 2,
                wheels: 4
            }
        }
    },
    mercedes: {
        cClass: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQKnsKkpnj15H05RaBeIYPoNUH_Aqxfpu_bsrl0IXv2-c8wjeB2eTguQeLPmmrBXE7ZA&usqp=CAU",
                name: "Mercedes-Benzs C-Class",
                year: 2022,
                price: 52000,
                colors: ["silver", "blue", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    nissan: {
        altima: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQEK5DpWDxubaQwnNWIyfbsht-L-xf9-KIoW3sKec2dlSY2z6vrQVUmBLHt_L6nSJ1-k&usqp=CAU",
                name: "Nissan Altima",
                year: 2023,
                price: 32000,
                colors: ["blue", "gray", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    hyundai: {
        elantra: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAS3WL8Nr1Bd9DHTkwHBNifIqs8xiYZs5HplMn2WZ9dlD_NPUusQwYiFrEWkyeGGOT_M&usqp=CAU",
                name: "Hyundi Elantra",
                year: 2022,
                price: 25000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    kia: {
        optima: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mhygVaI_Qq3VFo0zBu0dnb7Hgo_wIgfJ3NXTLbeS_1Mk8ZeWvvnYxPs4ZoL85YgCH7c&usqp=CAU",
                name: "Kia Optima",
                year: 2022,
                price: 28000,
                colors: ["blue", "gray", "white"],
                doors: 4,
                wheels: 4
            }
        }
    },
    volkswagen: {
        jetta: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeilUE92_nZtfGgUM1iO9uGCZyajCgsVWhkmCmkgbpXQ39U2C9--JyAHFD1dy7xdynjo&usqp=CAU",
                name: "Volkswagen Jetta",
                year: 2023,
                price: 27000,
                colors: ["white", "gray", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    subaru: {
        impreza: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHb4jnGewgitMqZE9iQ3HkD3Ds_gj0UHbdptoWA9mydbqKQVwhLHCdJjzR4746T-jBqo&usqp=CAU",
                name: "Subaru Impreza",
                year: 2022,
                price: 26000,
                colors: ["blue", "gray", "white"],
                doors: 4,
                wheels: 4
            }
        }
    },
    mazda: {
        mazda3: {
            type: {

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kUSPolYOEPDXyOCCfLC0o0lC4VPGQHBoKrcvpEYQEb5Dp8K_ltfBTaqpN0541vzK7bA&usqp=CAU",
                name: "Mazda3",
                year: 2023,
                price: 29000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    lexus: {
        es: {
            type: {

                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CQ8z2uwhL6wjQ2flOynDEt-0K2gs0RCA4kMBgTO3aXp82SsTJP9TJjpjNuT-_OCdoLY&usqp=CAU",
                name: "Lexus ES",
                year: 2022,
                price: 48000,
                colors: ["silver", "blue", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    infiniti: {
        q50: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15KBKt5rIwOpRYLkuACHCmUTfeA983lNRBF4nsDhLP2AE6CoROVQ4gk82WJYtgJAlNO8&usqp=CAU",
                name: "Infiniti Q50",
                year: 2022,
                price: 50000,
                colors: ["white", "black", "gray"],
                doors: 4,
                wheels: 4
            }
        }
    },
    tesla: {
        model3: {
            type: {
                image: "https://cdn.motor1.com/images/mgl/P3oekW/s3/model-3.jpg",
                name: "Tesla Model 3",
                year: 2023,
                price: 50000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    volvo: {
        s60: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2M9m9EIebeoiKHE9Jf5oxuXf8QfYNt1hlR8JjtCaBLvU3jA5IgYVCEgztAanlMloJlCc&usqp=CAU",
                name: "Volvo S60",
                year: 2022,
                price: 47000,
                colors: ["gray", "blue", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    porsche: {
        panamera: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_L8noKylYOKOZEOnv0FAhT2ee0b8uY9tOTuYL8z5P6sOmVdspdpoTuAMK2_hgtDMPTc&usqp=CAU",
                name: "Porsche Panamera",
                year: 2023,
                price: 95000,
                colors: ["white", "black", "gray"],
                doors: 4,
                wheels: 4
            }
        }
    },
    jaguar: {
        xe: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUc8IS0C-dPC7bylrHj8HOl4o1z9g5is6k5TIfcuAlqgUYrnf0IW9jSdrQWy_UdgBzO0&usqp=CAU",
                name: "Jaguar XE",
                year: 2022,
                price: 54000,
                colors: ["blue", "gray", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    landRover: {
        discovery: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMh70L7Teqy0RSi9f-FWf5yPc8JA_pm9Bz3_FLFfEXDV93vCfLGKbuWgoIGx2gEvAWOY4&usqp=CAU",
                name: "Land-Rover Discovery",
                year: 2023,
                price: 65000,
                colors: ["green", "black", "white"],
                doors: 4,
                wheels: 4
            }
        }
    },
    acura: {
        tlx: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcA8HrTGVuT_M7QWvXhJkRal5gDmTSk7U_4jVj0Bh0OWCYzmnpHRsggwapEA4V2V8ruiQ&usqp=CAU",
                name: "Acura TLX",
                year: 2022,
                price: 45000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    mitsubishi: {
        outlander: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOLSOG1GJ0wBuKGf787QANfaUtj4ogaJD-qpRLc8N0VNfyiRZrC2RMuLknvFGqUJxz6Y&usqp=CAU",
                name: "Mitsubishi Outlander",
                year: 2023,
                price: 35000,
                colors: ["blue", "gray", "white"],
                doors: 4,
                wheels: 4
            }
        }
    },
    jeep: {
        cherokee: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX_VsG1x9MfHbTLgBtz4OY7agAlyqasjlrDv7_Fa3w_emE-0WN1EZkJImmv-vHqwYD8ts&usqp=CAU",
                name: "Jeep Cherokee",
                year: 2022,
                price: 37000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    buick: {
        regal: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41VURLkPtkhq-UXwJ9EzdpdgLW_gBKwg9AuLsM6xs8IJxF8_ac_XqDUerxoOFUbpUq7E&usqp=CAU",
                name: "Buick Regal",
                year: 2022,
                price: 40000,
                colors: ["blue", "gray", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
}



var company = document.getElementById("company");
var brand = document.getElementById("brand");
var allCard = document.getElementById("allCard");

for (var key in carVariants) {
    // console.log(key)

    company.innerHTML += `
   
    <option value="${key}">${key.toUpperCase()}</option>
   

    `
    for (var key1 in carVariants[key]) {
        for (var key2 in carVariants[key][key1]) {
            var CarData = carVariants[key][key1][key2];
            var ColorDiv = "";
            for (var i = 0; i < CarData.colors.length; i++) {

                ColorDiv += `
                <div class="me-2  " style="border: 1px solid; width: 20px; height: 20px; border-radius: 10px; background-color:${CarData.colors[i]}"></div>

                `
            }
            // console.log(ColorDiv);

            allCard.innerHTML += `

                   
       
                    <div class="col-4 mb-5">
                      <div class="card" style="">
                        <img src="${CarData.image}" class="card-img-top">
                        <div class="card-body">
                          <h5 class="card-title">${CarData.name}</h5>
                          <p class="card-text d-flex justify-content-between"><span class="sub_title">Year</span>  ${CarData.year} <i class="bi bi-calendar2-check"></i></p>
                          <p class="card-text d-flex justify-content-between"><span class="sub_title">Price</span> ${CarData.price} <i class="bi bi-tags"></i></p>
                          
                          <p class="card-text d-flex justify-content-between"><span class="sub_title">Doors</span>${CarData.doors}<i class="bi bi-door-open-fill"></i></p>
                          <p class="card-text d-flex justify-content-between"><span class="sub_title">Wheel</span>${CarData.wheels} <i class="bi bi-record-circle-fill"></i></p>
                          <div class= d-flex justify-content: center;>
                          ${ColorDiv}
                          </div>
          
                        </div>
                      </div>
                    </div>
          
          
               
               
                    `
            // console.log(carVariants[key][key2][key3])
        }

    }
}



function Oncompanychange() {
    brand.innerHTML = "";
    brand.innerHTML = `
<option selected  disabled>Open this select Brand</option>
`
    for (var key in carVariants[company.value]) {
        brand.innerHTML += `
      <option value="${key}">${key.toUpperCase()}</option>
     
      `
        // console.log(key);
    }
}

function filterCar() {
    var CarData = carVariants[company.value][brand.value].type
    for (var i = 0; i < CarData.colors.length; i++) {

        ColorDiv += `
        <div class="me-2 colorCard" style="border: 1px solid; width: 20px; height: 20px; border-radius: 10px; background-color:${CarData.colors[i]}"></div>

        `
    }
    // console.log(ColorDiv);
    allCard.innerHTML = `

                   
       
    <div class="col-12">
      <div class="card" style="">
        <img src="${CarData.image}">
        <div class="card-body">
          <h5 class="card-title">${CarData.name}</h5>
          <p class="card-text d-flex justify-content-between"><span class="sub_title">Year</span>  ${CarData.year} <i class="bi bi-calendar2-check"></i></p>
          <p class="card-text d-flex justify-content-between"><span class="sub_title">Price</span> ${CarData.price} <i class="bi bi-tags"></i></p>
          
          <p class="card-text d-flex justify-content-between"><span class="sub_title">Doors</span>${CarData.doors}<i class="bi bi-door-open-fill"></i></p>
          <p class="card-text d-flex justify-content-between"><span class="sub_title">Wheel</span>${CarData.wheels} <i class="bi bi-record-circle-fill"></i></p>
          <div class= d-flex justify-content: center;>
          ${ColorDiv}
          </div>
        </div>
      </div>
    </div>




    `
}


// text area start
// function submit(){
// var textArea=document.getElementById("textArea").value
// console.log(event.target.value);
// console.log(textArea);
// }




