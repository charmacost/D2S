document.title = "D2S";

let time = new Date();
console.log(time);

//For Weekday
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[time.getDay()];
console.log(day);

//For month
let abbMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let month = abbMonth[time.getMonth()];
console.log(month);

//For monthDay
let monthDay = time.getDate();
if(monthDay == 1 || monthDay == 21 || monthDay == 31 )
{
    monthDay += "st"
}
else if (monthDay == 2 || monthDay == 22)
{
    monthDay += "nd";
}
else if (monthDay == 3 || monthDay == 23)
{
    monthDay += "rd";
}
else if ((monthDay >= 4 && monthDay <= 20) || (monthDay >=24 && monthDay <=30))
{
    monthDay += "th"
}
console.log(monthDay);

//Full Date
let fullDate = day + ", " + month + " " +  monthDay
console.log(fullDate);

//Output the date
document.getElementById("DateTest").onclick = function()
{
    document.getElementById("DateTest").innerHTML = fullDate;
}

