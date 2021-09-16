class Computer {
  constructor(name, operatingSystem, processor, memory, graphics) {
    this.name = name;
    this.operatingSystem = operatingSystem;
    this.processor = processor;
    this.memory = memory;
    this.graphics = graphics;
    this.on = false;
  }

}

module.exports = Computer
