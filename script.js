const salon = {
    name: "Fashion pets",
    phone: "8675309",
    address: {
        street: "Hope Ave",
        number: "1313-5"
    },
    workingHours: {
        days: 'Mon-Fri',
        open: '8:00 am',
        close: '5:00 pm'
    },
    pets: [],
    count: function () {
       // alert("you have registered " + this.pets.length);
    }

}

let { name, phone, address: { street, number }, workingHours: { days, open, close } } = salon;

document.querySelector('.info').innerHTML = `<h1> Welcome to ${name} Salon </h1> <br> <p> Contact us ${phone}, ${street} ${number} <br> It is open from ${open} to ${close} </p>`;

document.querySelector('footer .info').innerHTML = `<p> Contact us ${phone}, ${street} ${number} <br> It is open from ${open} to ${close} </p>`;

class Pet {
    constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {
        this.hunger = 10;
        this.happiness = 5;
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
    }
    status = function () {
        console.log("happiness:" + this.happiness + "hunger:" + this.hunger);
    }
    feed = function () {
        this.hunger -= 10;
        this.happiness += 10;
        console.log("Feeding...");
    }
    ownerContact = function () {
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact phone:" + this.contactPhone);
    }

}

var txtname = document.getElementById('name');
var txtage = document.getElementById('age');
var txttype = document.getElementById('type');
var txtgender = document.getElementById('gender');
var txtbreed = document.getElementById('breed');
var txtservice = document.getElementById('service');
var txtOwnerName = document.getElementById('ownerName');
var txtContactPhone = document.getElementById('contactPhone');

function register(){
    const pet1 = new Pet(txtname.value,txtage.value,txttype.value,txtgender.value,txtbreed.value,txtservice.value,txtOwnerName.value,txtContactPhone.value);
    console.log(txtname.value);

}


// const pet2 = new Pet("Ozzy", 7, "dog", "Male", "boxer", "shower", "Samantha", "987684");
// const pet3 = new Pet("Janis", 2, "dog", "female", "boxer", "shower", "Sabrina", "0490554");

// salon.pets.push(pet1);
// salon.pets.push(pet2);
// salon.pets.push(pet3);

//document.getElementById('petsInfo').innerHTML=`You have ${salon.pets.length} pets: ${salon.pets[0].name}, ${salon.pets[1].name}, ${salon.pets[2].name}`;

salon.count();

//pet1.status();
//pet1.feed();
//pet1.status();
//pet1.ownerContact();
//console.table(salon.pets);

