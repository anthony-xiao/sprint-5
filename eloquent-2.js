//looping a triangle:
let triangle = "#"

for (let hashTagCount=0; hashTagCount<7; hashTagCount++) {
    console.log(triangle);
    triangle = (triangle + '#');
}

//FizzBuzz
for (numb=1; numb < 101; numb++) {
    if (numb % 3 ===0) {
        console.log("fuzz");
    } else if (numb % 5 ===0) {
        console.log("buzz");
    } else {
        console.log(numb);
    }
}

//Chess Board: was not able to come up with the solution by myself.

for (y=0; y<=8; y++)
    for (i=0; i<=8; i++) {
        if (i % 2 === 0) {
            console.log(" ");
        } else {
            console.log("#");
        }
    }

//correct answer
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
        board += " ";
    } else {
        board += "#";
    }
    }
    board += "\n";
}

console.log(board);