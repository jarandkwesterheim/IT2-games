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
  this.getDateCode = function() {
    let day, month, year;
    day = date.toString();
    month = monthInt.toString();
    year = (year-2000).toString();
    if (day.length > 2) {
      day = '0'+day;
    }
    if (month.length > 2) {
      month = '0'+day;
    }
    if (year.length > 2) {
      year = '0'+day;
    }

    return day+month+year

  }
}
