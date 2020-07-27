let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

// a list of crew roles and names in the following format 'chief officer: Dan'.

for (let key in spaceship.crew) {
  console.log(key+": "+spaceship.crew[key].name);
}

// a list of crew roles and names in the following format 'Clementine: Physics'.


for (let key in spaceship.crew) {
  console.log(spaceship.crew[key].name+": "+spaceship.crew[key].degree);
}