class House implements IHouse {
  doors: Door[];
  windows: Opening[];
}

class Opening implements IOpening {
  // Note that the `super()` function is not needed here
  isOpen: boolean;
}

class Door extends Opening implements IDoor {
}

// interface is the implementation of a class. It checks that the class "meets a particular contract" in its definition.
// They are optional, and useful for superficially prototyping classes
// Note that semantically, an interface will be named `I<respective class>`
interface IHouse {
  // Door[] = array of Door objects
  doors: Door[];
  windows: Opening[];
}

interface IOpening {
  isOpen: boolean;
}

interface IDoor {

}