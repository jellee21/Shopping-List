var i = 0;

function addMe() {
  var newlist = document.createElement('li');
  var newText = document.createTextNode(document.getElementById('addNum').value);
  //append text to the list
  newlist.appendChild(newText);
  if (i < 7) {
    i++
    
    if (newText === undefined || newText.length === 0) {
      document.getElementById('empty').innerHTML = "please input an item";
      // array empty or does not exist
    }
    else {
      var position = document.getElementsByTagName('ol')[1];
    }
  

  }
  else {
    document.getElementById('sample').innerHTML = "list is full";
  }
  
  //var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newlist);
  document.getElementById('addNum').value = "";
}

function removeMe() {
  //get the value of removeNum
  var newNum = document.getElementById('removeNum').value;
  //convert to integer
  var x = parseInt(newNum);
  //get child based on number - 1
  var child = document.getElementsByTagName('li')[x - 1];
  //get parent
  var parent = child.parentNode;
  //remove child from parent
  parent.removeChild(child);
}