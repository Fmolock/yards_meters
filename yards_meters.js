function convertToMeters(yards){
    return yards * 0.9144;
}

function createMessage(yards, meters){
    let message = '';
    const numYards = yards * 1;

    if(numYards === 1760){
        message = 'Thats as long as a mile!';
    } else  if(numYards === 100){
        message = 'Thats as long as a football field';
    } else if(numYards === 26){
        message = 'Thats as long as a Tennis court';
    } else if(numYards === 1){
        message = 'Thats as long as a washing machine!';
    } else if(numYards === 3){
        message = 'Thats an orgy';
    } else if(numYards === 7){
        message = 'lucky number 7';
    }

    return `${yards} yards is ${meters} meters. ${message}`;
};

function rand(limit){
    return Math.round(Math.random()*limit);
}

let inputYards = prompt('how many yards would you like to convert to meters?');

let convertedMeters = convertToMeters(inputYards);

let output = createMessage(inputYards, convertedMeters);

console.log(output);

let randomYards = rand(100);
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);

randomYards = rand(100);
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);

console.log("Input yards: ", inputYards);

console.log("convertedMeters :", convertedMeters);





 

