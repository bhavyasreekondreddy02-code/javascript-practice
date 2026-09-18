class Student {
    constructor(name, marks) {
        this._name = name;
        this._marks = marks;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get marks() {
        return this._marks;
    }
    set marks(value) {
        this._marks = value;
    }
}

let std = new Student("Bhavya", 90);
console.log(std.name, std.marks); // ✅ Bhavya 90
