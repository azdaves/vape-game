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

      default:
        break;
    }
  },
  setPreFight: function() {}
};
