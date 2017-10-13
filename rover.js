//so we want to create the first object(robot)
var myRover = {
  position: [0,0],
  direction: 'S',
  simbol: '&#3456',
};
//and here we are the obstacle which the robot could came across
var obstacle = {
  position : [ Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1],
  simbol: 'X'

};
//we need to perfomr the movements
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      if(rover.position[0] - 1 === obstacle.position[0] && rover.position[1] === obstacle.position[1]) { //dont let the movement of rover if it run into the obstacle
        alert("just can't go ahead, there is an obstacle!");
        console.log("just cant go ahead, there is an obstacle!");


      }else if(rover.position[0] > 0){ //let move the rover, wrapping the grid in case if get outside
        rover.position[0]--;
        return rover.position[0];
      }else{
        return rover.position[0];
      }

      // rover.position[0]++
      break;

    case 'E':
      if(rover.position[1] + 1  === obstacle.position[1] && rover.position[0] === obstacle.position[0]){ //dont let the movement of rover if it run into the obstacle
        alert("just can't go ahead, there is an obstacle!");
        console.log("just cant go ahead, there is an obstacle!");

      }else if(rover.position[1] < 9){ //let move the rover, wrapping the grid in case if get outside
        rover.position[1]++;
      }
      else{
        return rover.position[1];
      }

      // rover.position[1]++
      break;

    case 'S':
      if(rover.position[0] + 1 === obstacle.position[0] && rover.position[1] === obstacle.position[1]){ //dont let the movement of rover if it run into the obstacle
        alert("just can't go ahead, there is an obstacle!");
        console.log("just cant go ahead, there is an obstacle!");

      }else if(rover.position[0] < 9){ //let move the rover, wrapping the grid in case if get outside

          rover.position[0]++;
        // rover.position = rover.position[0] + 1;
      }else{
        return rover.position[0];
      }
      // rover.position[0]--
      break;

    case 'W':
    if(rover.position[1] - 1 === obstacle.position[1] && rover.position[0] === obstacle.position[0]){ //dont let the movement of rover if it run into the obstacle
      alert("just can't go ahead, there is an obstacle!");
      console.log("just cant go ahead, there is an obstacle!");

    }else if(rover.position[1] > 0){ //let move the rover, wrapping the grid in case if get outside
      rover.position[1]--;
    }else{
      return rover.position[1];
    }
      // rover.position[1]--
      break;
  }
}

  function goBackward(rover) {
    switch(rover.direction) {
      case 'N':
        if(rover.position[0] + 1  === obstacle.position[0] && rover.position[1] === obstacle.position[1]){ //dont let the movement of rover if it run into the obstacle
          alert("just can't go ahead, there is an obstacle!");
          console.log("just cant go ahead, there is an obstacle!");

        }else if(rover.position[0] < 9){ //let move the rover, wrapping the grid in case if get outside
          rover.position[0]++;
        }else{
          return rover.position[0];
        }
        // rover.position[0]++
        break;

      case 'E':
      if(rover.position[1] - 1 === obstacle.position[1] && rover.position[0] === obstacle.position[0]){ //dont let the movement of rover if it run into the obstacle
        alert("just can't go ahead, there is an obstacle!");
        console.log("just cant go ahead, there is an obstacle!");

      }else if(rover.position[1] > 0){ //let move the rover, wrapping the grid in case if get outside
        rover.position[1]--;
      }else{
        return rover.position[1];
      }
        //rover.position[1]++
        break;

      case 'S':
      if(rover.position[0] - 1  === obstacle.position[0] && rover.position[1] === obstacle.position[1]){ //dont let the movement of rover if it run into the obstacle
        alert("just can't go ahead, there is an obstacle!");
        console.log("just cant go ahead, there is an obstacle!");

      }else if(rover.position[0] > 0){ //let move the rover, wrapping the grid in case if get outside
        rover.position[0]--;
      }else{
        return rover.position[0];
      }
        // rover.position[0]--
        break;

      case 'W':
      if(rover.position[1] + 1  === obstacle.position[1] && rover.position[0] === obstacle.position[0]){ //dont let the movement of rover if it run into the obstacle
        alert("just can't go ahead, there is an obstacle!");
        console.log("just cant go ahead, there is an obstacle!");

      }else if(rover.position[1] >= 0){ //let move the rover, wrapping the grid in case if get outside
        rover.position[1]++;
      }else{
        return rover.position[1];
      }
        // rover.position[1]--
        break;
    }
}

//set up the turnrigth and turnleft
function turnRight(rover){
  switch (rover.direction) {
    case 'N':
        rover.direction = 'E';
        rover.simbol= '>';
      break;

      case 'E':
        rover.direction = 'S';
        rover.simbol= 'v';
      break;
      case 'S':
          rover.direction = 'W';
        rover.simbol= '<';
      break;
      case 'W':
        rover.direction = 'N';
        rover.simbol= '^';
      break;

    default:

  }
}
function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
        rover.direction = 'W';
        rover.simbol= '<';
      break;

      case 'E':
        rover.direction = 'N';
        rover.simbol= '^';
      break;
      case 'S':
        rover.direction = 'E';
        rover.simbol= '>';
      break;
      case 'W':
        rover.direction = 'S';
        rover.simbol= 'v';
      break;

    default:

  }
}

//we need to create a grid based by rows and columns using a loop
function drawGrid(){
  document.write('<div style = "height:100%; ">');
  for(var row = 0; row < 10 ; row++){
    for( var column = 0; column < 10 ; column++){
      if(myRover.position[0] === row  && myRover.position[1] === column ){ //rover will display into grid if it's inside the 10x10 grid
        document.write("|" + myRover.simbol);
      }else if (obstacle.position[0] === row && obstacle.position[1] === column){ //obstacle will display into grid if it's inside the 10x10 grid
        document.write("|"+ obstacle.simbol);
      }else{
        document.write("|" + "<span style='color: white;'>H</span>");
      }
    }
    document.write("|" + "<br>");
  }
  document.write('<div>');
}

//we display the new position into console
function loginPosition(){
  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] +"]" + myRover.direction);
}

//here we have the value of the commands
function moveRover(value){
  if(value === "f"){
    goForward(myRover);
    loginPosition();
    drawGrid();
  }else if(value === "b"){
    goBackward(myRover);
    loginPosition();
    drawGrid();
  }else if(value === "r"){
    turnRight(myRover);

    drawGrid();
  }else if(value === "l"){
    turnLeft(myRover);

    drawGrid();
  }else{
    console.log("This value doesnt work!");
  }
}


//we need to submit this values and start off the movements
var fullCordinate;
function submitCordinates(){
  var coordinates = document.getElementById("submit1").value;

  for( var i = 0; i < coordinates.length; i++){ // for each commands we write rover will move
    fullCordinate = coordinates[i];
    moveRover(fullCordinate);
  }
  drawGrid();

}

drawGrid();
