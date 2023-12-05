// Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner!
// In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cookbook.
// You have four tasks related to the time spent cooking the lasagna.

// 1. Define the expected oven time in minutes
// Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna should be in the oven. According to the cooking book, the expected oven time in minutes is 40.
// Define the PREPARATION_MINUTES_PER_LAYER constant that represents how many minutes it takes to prepare a single layer of the lasagna. According to the cooking book, the expected number of minutes per layer is 2.

const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;

// 2. Calculate the remaining oven time in minutes
// Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.

function remainingMinutesInOven (actualMinutes) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutes

}
console.log(remainingMinutesInOven (30))

// 3. Calculate the preparation time in minutes
// Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

console.log(preparationTimeInMinutes(2))

// 4. Calculate the total working time in minutes
// Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. 
// The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

console.log(totalTimeInMinutes(3, 20));