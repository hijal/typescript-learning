"use strict";
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
const formCourse = document.querySelector('form');
formCourse.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.querySelector('#title');
    const priceEl = document.querySelector('#price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const course = new Course(title, price);
    console.log(course);
});
//# sourceMappingURL=app.js.map