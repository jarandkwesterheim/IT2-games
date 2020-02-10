

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCeLEU-XFLPv_2s4CBvgt8-oGipeJtNv3s",
    authDomain: "registrerexcel.firebaseapp.com",
    databaseURL: "https://registrerexcel.firebaseio.com",
    projectId: "registrerexcel",
    storageBucket: "registrerexcel.appspot.com",
    messagingSenderId: "617832437723",
    appId: "1:617832437723:web:7de229c6cb864e7217f9fe",
    measurementId: "G-P3PSTCYYWE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const db = firebase.database().ref();



var startRunning = document.querySelector('.startRunning');
var statusTarget = document.querySelector('#statusTarget');
status = "Start";
function updateGraphic() {
  if (status == "Start") {
    startRunning.style = 'background-color: rgb(0, 212, 40, 0.1);';
    statusTarget.innerHTML = "START";
  }
  else {
    startRunning.style = 'background-color: rgb(182, 49, 0, 0.1);';
    statusTarget.innerHTML = "TELLER";
  }
}
updateGraphic();

var presetDate = document.querySelector('.preset--date');
var presetHours = document.querySelector('.preset--hours')
var presetGroup = document.querySelector('.select--group');

var hourInp = document.querySelector('.select--hours');


let now, date, hours, minutes, month, montInt, day, year, status, srch;
var dayArr = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
var monthArr = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
var groupArr = [];



db.child("site").child("groups").on("child_added", snap => {
  groupArr.push(snap.val());

  //run site when info is fetched
  getDate();
  displayPresets();
})


function getDate() {
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
  console.log(day, date, month, year);

}

function displayPresets() {
  presetDate.innerHTML = day+' '+date+' '+month+' '+year;

  presetHours.innerHTML = hours+':'+minutes;

  presetGroup.innerHTML = '';

  for(var i = 0; i < groupArr.length; i++) {
    presetGroup.innerHTML += '<option value="'+groupArr[i]+'">'+groupArr[i]+'</option>';
  }
}



startRunning.onclick = function() {
  if (status == "Teller") {
    return;
  }
  status = "Teller";
  updateGraphic();
  var workingHours = hourInp.value;
  var workingMinutes = 0;
  if (workingHours%1 !== 0) {
    workingHours = Math.floor(workingHours);
    workingMinutes = 30;
  }
  var endMin = Number(minutes)+Number(workingMinutes)
  var endHour = Number(hours)+Number(workingHours)
  endHour = endHour%24;
  if (endHour < 10) {
    endHour = '0'+endHour.toString();
  }
  if (endMin < 10) {
    endMin = '0'+endMin.toString();
  }
  if (hours < 10) {
    hours = '0'+hours;
  }
  let newList;
  newList = {
    dato:date+'. '+month,
    dag:day,
    gruppe:presetGroup.value,
    start:hours+':'+minutes,
    slutt:endHour+':'+endMin,
    anttimer:hourInp.value
  }


  if (date < 10) {date = "0"+date}
  if (monthInt < 10) {monthInt = "0"+monthInt}

  var key = date.toString()+monthInt.toString()+(year-2000).toString();
  console.log(newList);
  //pushing to firebase
  db.child(year).child(month.toLowerCase()).child(key).set(newList);
}



//function for loading excel page
function loadHours(dbNewRef) {
  var ref = firebase.database().ref(dbNewRef);
  ref.on('_added', snap => {
    genHTML(snap.val());
  })
}
function genHTML(snap) {
  console.log(snap);
  var hourReg = document.querySelector('#hourReg');
  hourReg.innerHTML += `
  <tr>
    <td>${snap.dato}</td>
    <td>${snap.gruppe}</td>
    <td>${snap.start}</td>
    <td>${snap.slutt}</td>
    <td>${snap.anttimer}</td>
  </tr>
  `
}
function genBarrier(snap) {
  hourReg.innerHTML += `
  <tr>
    <th>${snap}</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  `
}
function makeTopBar() {
  hourReg.innerHTML = `
  <tr>
    <th>DATO</th>
    <th>GRUPPE</th>
    <th>START</th>
    <th>SLUTT</th>
    <th>ANTALL TIMER</th>
  </tr>
  `
}

function loadAll() {
  srch = document.querySelector('#srch');
  loadHours('2019/november');
  loadHours('2019/desember');
  loadHours('2020/januar');
  loadHours('2020/februar');
  loadHours('2020/mars');
  loadHours('2020/april');
  loadHours('2020/mai');
}

function srchPressed(evt) {
  let key = evt.keyCode;
  if (srch.value.length < 1) {
    makeTopBar();
    loadAll();
    return;
  }
  if (key == 13) {
    makeTopBar();
    loadHours(srch.value);
  }
}
