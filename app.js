const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
   },
   get appetizers() {
     return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  get mains() {
  return this._courses.mains;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  get desserts() {
     return this._courses.desserts;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName,dishName,dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    };
     this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];  
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains')
    const desserts = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + mains.price + desserts.price;
 
    return `Your meal is ${appetizer.name}, ${mains.name} and ${desserts.name}. The price is ${totalPrice}`
  }
};

menu.addDishToCourse('appetizers', 'Salad', 4.25);
menu.addDishToCourse('appetizers', 'Wings', 3.75);
menu.addDishToCourse('appetizers', 'Juice', 4.25);
menu.addDishToCourse('mains', 'Fufu', 7.25);
menu.addDishToCourse('mains', 'Kokonte', 8.65);
menu.addDishToCourse('mains', 'Kenkey', 9.50);
menu.addDishToCourse('desserts', 'Coffee', 6.25);
menu.addDishToCourse('desserts', 'Ice Cream', 4.75);
menu.addDishToCourse('desserts', 'Tea', 3.70);


let meal = menu.generateRandomMeal();
console.log(meal);
