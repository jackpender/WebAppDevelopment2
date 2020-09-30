const aCar = {
    owner : "Joe Bloggs",
    type : {
        make: "Toyota",
        model: "Corolla",
        cc: 1.8
    },
    registration : {
        year: 201,
        county: "WD",
        number: 1058
    },
    mileage: 10000,
    color: {
        exterior: "red",
        interior:{
            texture: "leather",
            shade: "cream"
        }
    }
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make)
console.log("Reg = " + aCar.registration.year + "-" + aCar.registration.county + "-" + aCar.registration.number)
console.log("It is a " + aCar.color.exterior + " car, " 
+ aCar.mileage + " mileage, with " 
+ aCar.color.interior.texture + " interior.")