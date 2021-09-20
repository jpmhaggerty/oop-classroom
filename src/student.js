class Student {
  constructor(name, skillLevel) {
    this.name = name;
    this.skillLevel = skillLevel;
    this.assignments = [];
  }

  study() {
    if (this.skillLevel < 100) {this.skillLevel += 1;}
    return this;
  }

  doHomework(studentObj) {
    if(arguments.length) {
      studentObj.completed = (this.skillLevel > studentObj.skillLevel);

      if (studentObj.skillLevel >= 1 && studentObj.skillLevel <= 100) {
        this.assignments.push(studentObj);
      }

    } else {
        for (let index = 0; index < this.assignments.length; index++) {
          this.assignments[index].completed = (this.skillLevel >= this.assignments[index].skillLevel);
        }
      }
  }
}

module.exports = Student
