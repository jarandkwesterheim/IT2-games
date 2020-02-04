var photosrc = "https://pbs.twimg.com/media/DeOSlwlXkAEzbaw.png";
var string = "Ninja Fortnite";
function changePic() {
  var photo = document.querySelector('#LearnerPhoto');
  if (photo.src != photosrc) {
    photo.src = photosrc;
  }
  var name = document.  querySelector('#displayName');
  if (name != string) {
    name.innerHTML = string;
  }

  photo.onclick = changeSource;
}
function changeSource() {
  document.body.innerHTML += `
  <div class="container_addon48888" style="z-index:1;width:400px;position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);border:2px solid grey;border-radius:4px; background-color:rgb(157, 157, 157);padding:40px;">
    <input type="text" id="photoSource" name="" placeholder="Source for image..." value=""><br>
    <input type="text" id="nameString" name="" placeholder="String for name..." value=""><br>
    <button type="button" id="btnRefresh" name="button">Refresh</button>
  </div>
  `;
  var inpSource = document.querySelector('#photoSource');
  var inpName = document.querySelector('#nameString');
  var btn = document.querySelector('#btnRefresh');

  btn.onclick = function() {
    photosrc = inpSource.value;
    string = inpName.value;

    var element = document.querySelector('.container_addon48888');
    element.parentNode.removeChild(element);
  }
}

setInterval(changePic, 500)
