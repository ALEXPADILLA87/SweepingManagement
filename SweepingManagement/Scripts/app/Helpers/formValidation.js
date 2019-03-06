var validator = new class Validator {
    constructor() {
    }

    Required(name, value) {
        return value && value.length > 0 ? "" : name + ' is required';
    }
    GreaterThanZero(name, value) {
        var x = value && value > 0 ? "" : name + ' is required';
        return x;
    }
    Password(name, value) {
        return value.length > 5 ? "" : name + ' is too short';
    }
    Email(name, value) {
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? "" : name + " is invalid";
    }
    ZipCode(name, value) {
        return value.match(/^[0-9]{5}(?:-[0-9]{4})?$/i) ? "" : name + " is invalid";
    }
    Phone(name, value) {
        return value.match(/^\d{10}$/i) ? "" : name + " is invalid";
    }
}
