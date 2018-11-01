let student;

function Student(classType, health, lungs, strength, brain) {
  this.classType = classType;
  this.health = health;
  this.lungs = lungs;
  this.strength = strength;
  this.brain = brain;
}

let StudentMoves = {
  calcAttack: function() {
    //who attack first
    let getPlayerBrain = player.brain;
    let getDeviceBrain = device.brain;
  }
  //player attacks - hits vape
  let studentAttack = function() {
    let calcBaseDamage;
    if(player.lungs > 0) {
        calcBaseDamage = student.strength * student.lungs / 1000;
    } else {
        calcBaseDamage = student.strength * student.health / 1000;
    }
    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    //number of hits
    let numberOfHits = Math.floor(Math.random() * Math.floor(student.health / 10) / 2) + 1;
    let attackValues = [calcOutputDamage, numberOfHits];
    return attackValues;
  }

    //device attacks - hits vape
    let deviceAttack = function() {
        let calcBaseDamage;
        if(device.lungs > 0) {
            calcBaseDamage = device.strength * device.lungs / 1000;
        } else {
            calcBaseDamage = device.strength * device.health / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        //number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(device.health / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
      }
      
      let getStudentHealth = document.querySelector(".health-student");
      let getDeviceHealth = document.querySelector(".health-device");
};
