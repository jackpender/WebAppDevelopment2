const aCar = {
    owner : "Joe Bloggs",
    // previous_owners: [
    //     "Pat Smith - 1 Main Street",
    //     "Sheila Dwyer - 2 High Street"
    // ],
    previous_owners: [
        {name: "Pat Smith", address: "1 Main Street"},
        {name: "Sheila Dwyer", address: "2 High Street"}
    ],
    type : {
        make: "Toyota",
        model: "Corolla",
        cc: 1.8
    },
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
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
console.log("First Owner: " + aCar.previous_owners[0].name + " - " + aCar.previous_owners[0].address)
for( let i = 0; i < aCar.features.length; i += 1){
    console.log(aCar.features[i]);
}
for(let j = 0; j < aCar.previous_owners.length; j += 1){
    console.log(aCar.previous_owners[j].name);
}