function Time() {

  let now, date, hours, minutes, month, montInt, day, year;
  var dayArr = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
  var monthArr = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];


  this.getDate = function() {
    now = new Date();
    year = now.getFullYear();
    monthInt = now.getMonth()+1;
    date = now.getDate();
    day = now.getDay()-1;
    hours = now.getHours();
    minutes = now.getMinutes();



    //standarizing months and days


    // rounds hours up
    if (minutes > 45) {
      hours++;
    }
    //rounds minutes
    if (minutes >= 15 && minutes <=45) {
      minutes = "30";
    }
    else {
      minutes = "00";
    }

    //converts monthInt to month
    month = monthArr[monthInt-1];

    //converts dayInt to day
    day = dayArr[day];



    timeObj = {
      year:year,
      month:month,
      date:date,
      day:day,
      hours:hours,
      minutes:minutes
    }


    return timeObj;

  }
}
