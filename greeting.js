var greeting;
var date = new Date();
var hour = date.getHours();

if (hour >=0 && hour < 12) {
    greeting = "Good morning";
} else if (hour >=12 && hour <= 17) {
    greeting = "Good afternoon";
} else if (hour >=18 && hour <=21) {
    greeting = "Good evening";
} else {
    greeting = "Good night";
}

document.write("<h2>" + greeting );