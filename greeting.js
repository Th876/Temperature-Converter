let greeting; //declare greeting variable
let date = new Date(); //declare date variable and save to the value of new date object to get users' current date & time
let hour = date.getHours(); //declare hour variable and save to the value of getHours()method to get the hour of the users' specified date which based on the local time

if (hour >=0 && hour < 12) { //Set condition so that greeting is relevant to the time of day
    greeting = "Good morning";
} else if (hour >=12 && hour <= 17) {
    greeting = "Good afternoon";
} else if (hour >=18 && hour <=21) {
    greeting = "Good evening";
} else {
    greeting = "Good night";
}

console.log("<h2>" + greeting ); //Write the greeting where the h2 tag is placed 
