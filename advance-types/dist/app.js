"use strict";
function movieAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'penguin':
            speed = animal.swimmingSpeed;
            break;
    }
    console.log('------------------------------');
    console.log('Move at speed:' + speed);
    console.log('------------------------------');
}
movieAnimal({ type: 'bird', flyingSpeed: 10 });
//# sourceMappingURL=app.js.map