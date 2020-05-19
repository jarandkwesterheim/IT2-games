function Collision() {
  this.test = function(obj1, obj2, alp, bet) {
    var distx = Number(obj1.pos.x - obj2.pos.x); // distance in x axis
    var disty = Number(obj1.pos.y - obj2.pos.y); // distance in y axis
    var r = Math.hypot(distx,disty); // combines to figure out actual dist
    var rmin = (obj1.radius + obj2.radius)/2;

    if (r < rmin) { // if collision is true
      var indexArr = [alp,bet];
      indexArr.sort(); // sort arr to prevent ordering mistakes later


      var newplanet = {
        pos:force.half((obj.list[alp].pos.add(obj.list[bet].pos))), // begge posisjonsvektorene lagt sammen og halvert
        vel:force.comb(alp, bet), // adds valocities with new masses in thought
        radius:obj.list[alp].radius + obj.list[bet].radius, // combines radiuses
        color:this.color(obj.list[alp].color, obj.list[bet].color),
        mass:obj.list[alp].mass + obj.list[bet].mass, // combines masses
        name:obj.list[indexArr[0]].name // gives combined planet the earlier name
      }
      obj.list.push(newplanet);


      obj.list.splice(indexArr[1],1); // deletes later item in planet list
      obj.list.splice(indexArr[0],1); // deletes earlier item in planet list
    }
  }

  this.color = function(clr1, clr2) {
    clr1Arr = clr1.slice(4,clr1.length-1); // removes first and last letters of string
    clr1Arr = clr1Arr.split(',').map(item => Number(item)); // turns remaining string to numbers

    clr2Arr = clr2.slice(4,clr1.length-1); // "rgb(214,103,12)" to "21,103,12"
    clr2Arr = clr2Arr.split(',').map(item => Number(item)); // and sorts them in array
    var newClr = [];
    for (var clr in clr1Arr) {
      newClr[clr] = Math.round(clr1Arr[clr] - (clr1Arr[clr] - clr2Arr[clr])/2);
    }

    return "rgb("+newClr[0]+","+newClr[1]+","+newClr[2]+")";
  }
}
