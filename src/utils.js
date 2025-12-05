// // Your code here
//telling the test file to export this function and passing the previously defined word as a parameter. but how will it be accessible and it is function scoped? ama it's cause we've called the function, here and it remembers. God, help?
export function pointsForWord (word){
//initializing the value of points to start at 0
let points = 0
//using a for of loop to dictate the point giving conditions
for (const char of word){
    if (["a", "e", "i", "o", "u"].includes (char)){
        points +=1
    }
    else { points+=2;

    }
}
return points;
}