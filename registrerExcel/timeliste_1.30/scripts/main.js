

function checkLogin() {
  var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
    window.alert(user.email)
  } else {
    // No user is signed in.
    window.alert('logged out')
  }
}
checkLogin();

function logOut() {
  console.log('loggin out');
  firebase.auth().signOut().then(function() {
    //window.location.href = 'file:///Users/jarandwesterheim/Documents/IT2/registrerExcel/timeliste_1.2/html/login.html'
  }).catch(function(error) {
    // An error happened.
    window.alert(error.message);
  });

































}
var dateDisplay = document.querySelector('.date--display');
var groupDisplay = document.querySelector('#select-container-group');
var timeDisplay = document.querySelector('#select-container-time');
var groupCont = document.querySelector('#option-container-group');
var timeCont = document.querySelector('#option-container-time');
var gliderRange = document.querySelector('.glider--range');
var gliderDisplay = document.querySelector('.glider--display');

var redirect = document.querySelector('#redirect');

let groupArr;
let yearToBePushed, monthToBePushed, hoursToBePushed, dayToBePushed, dateToBePushed, groupToBePushed, endToBePushed, startToBePushed;

groupDisplay.onclick = function() {
  fillGroup();
  groupCont.style.visibility = 'visible';
  groupCont.style.top = '100%';
}
timeDisplay.onclick = function() {
  timeCont.style.visibility = 'visible';
  timeCont.style.top = '100%';
}
groupCont.onclick = function(e) {
  var group = e.target.getAttribute('value');
  if (group == 'Create') {
    //push new group
  }
  else {
    groupDisplay.innerHTML = group;
    groupToBePushed = group;
  }
  groupCont.style.visibility = 'hidden';
  groupCont.style.top = '-20%';
}
timeCont.onclick = function(e) {
  var time = e.target.getAttribute('value');
  timeDisplay.innerHTML = time;
  timeCont.style.visibility = 'hidden';
  timeCont.style.top = '-20%';
  startToBePushed = time;
}


function fillGroup() {
  groupArr = online.getGroup();

  groupCont.innerHTML = "";
  for (var i = 0; i < groupArr.length; i++) {
    groupCont.innerHTML += '<div value="'+groupArr[i]+'" class="option">'+groupArr[i]+'</div>';
  }
  groupCont.innerHTML += '<div value="Create" class="option option-bottom option-special"><i class="far fa-plus-square"></i>Create</div>';
}
function fillTime() {
  //define time if not to be changed
  startToBePushed = time.getDate().hours;
  //date display
  var dateObj = time.getDate();
  dateDisplay.innerHTML = ' '+dateObj.date +'. '+ dateObj.month +' '+dateObj.year;
  dateToBePushed = dateObj.date;
  monthToBePushed = dateObj.month;
  yearToBePushed = dateObj.year;



  //time select
  var dateObj = time.getDate();
  var min = dateObj.minutes;
  var hours = dateObj.hours;
  let time1,time2,time3;

  if (min == '30') {
    time1 = hours+':00';
    time2 = hours+':'+min;
    time3 = Number(hours+1)+':00';
    console.log(time1,time2,time3);
  }
  else {
    time1 = Number(hours-1)+':30';
    time2 = hours+':'+min;
    time3 = hours+':30';
    console.log(time1,time2,time3);
  }

  timeDisplay.innerHTML = time2;
  timeCont.innerHTML = '<div value="'+time1+'" class="option">'+time1+'</div>';
  timeCont.innerHTML += '<div value="'+time2+'" class="option">'+time2+'</div>';
  timeCont.innerHTML += '<div value="'+time3+'" class="option option-bottom">'+time3+'</div>';
  startToBePushed = time2;

}
gliderRange.onchange = function() {
  var gliderVal = gliderRange.value/2+0.5;
  gliderDisplay.innerHTML = gliderVal +' hours'
  hoursToBePushed = gliderVal;
}


function push() {
  let newList;

  //push anttimer og endHour
  var gliderVal = gliderRange.value/2+0.5;
  var timeConv = startToBePushed.split(':');
  let endHour, endMin;

  if (gliderVal%1 == 0.5) {
    gliderVal = Number(gliderVal) - 0.5;
    endHour = Number(timeConv[0]) + gliderVal;
    endMin = ':30';
  }
  else {
    endHour = String(Number(timeConv[0])+gliderVal);
    endMin = ':00';
  }
  endToBePushed = endHour + endMin;



  //done product
  newList = {
    date:time.getDate().date+'. '+time.getDate().month,
    day:time.getDate().day,
    group:groupToBePushed,
    start:startToBePushed,
    end:endToBePushed,
    hourcount:(gliderRange.value/2+0.5)
  }
  for (var item in newList) {
    if(newList.hasOwnProperty(item)) {
        var value = newList[item];
        if (value == undefined) {
          alert(item +' is undefined')
        }
    }
  }
  console.log(newList);
  online.pushTime(newList);
}
//redirect to table

redirect.onclick = function() {
  var url = online.getUrl();
  window.location.assign(url)
}
