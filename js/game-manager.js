let GameManager = {
  setGameStart: function(classType) {
    this.resetStudent(classType);
    this.setPreFight();
  },
  resetStudent: function(classType) {
    switch (classType) {
      case "Astudent":
        student = new Student(classType, 150, 100, 80, 150);
        break;
      case "Bbplayer":
        student = new Student(classType, 100, 120, 150, 100);
        break;
      case "Cheer":
        student = new Student(classType, 200, 120, 90, 50);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML =
      '<img src="images/avatar-players/' +
      classType.toLowerCase() +
      '.png" class="img-avatar"><div><h3>' +
      classType +
      "</h3><p class="health-student">Health: " +
      student.health +
      "</p><p>Lungs: " +
      student.lungs +
      "</p><p>Strength: " +
      student.strength +
      "</p><p>Brain: " +
      student.brain +
      "</p></div>";

      class="health-student"
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getLounge = document.querySelector(".lounge");
    getHeader.innerHTML = "<p>Task: Find A Device!</p>";
    getActions.innerHTML =
      '<a href="#" class="btn-prehit" onclick="GameManager.setFight()">Search For A Device!</a>';
    getLounge.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getDevice = document.querySelector(".device");
    //create vape device
    let device00 = new Device("Juul", 100, 25, 50, 50);
    let device01 = new Device("Drop", 90, 35, 70, 80);
    let chooseRandomDevice = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomDevice) {
      case 0:
        device = device00;

        break;
      case 1:
        device = device01;
        break;
    }
    getHeader.innerHTML = "<p>Task: Hit or Walk Away</p>";
    getActions.innerHTML =
      '<a href="#" class="btn-prehit" onclick="StudentMoves.calcDamage()">Use Device?</a>';
    getDevice.innerHTML =
      '<img src="images/avatar-devices/' +
      device.deviceType.toLowerCase() +
      '.jpeg" alt="' +
      device.deviceType +
      '" class="img-avatar"><div><h3>' +
      device.deviceType +
      "</h3><p="health-device">Health: ' + device.health + '</p><p>Lungs: ' + device.lungs + '</p><p>Strength: ' + device.strength + '</p><p>Brain: ' + device.brain + '</p></div>';
  }

};
