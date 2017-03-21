// this is called the constructor

var Person = function(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.insertDiv();
    
}
Person.prototype.insertDiv = function() {
    this.div = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = this.name;
    var h3 = document.createElement('h3');
    h3.innerHTML = this.age + ', ' + this.email;
    var wakeButton = document.createElement('button');
    wakeButton.innerHTML = 'Wake me';
    wakeButton.addEventListener('click', this.wakeUp);
    var sleepButton = document.createElement('button');
    sleepButton.innerHTML = 'Go to sleep';
    sleepButton.addEventListener('click', this.sleep);
    var helloButton = document.createElement('button');
    helloButton.innerHTML = 'Say Hello';
    helloButton.addEventListener('click', this.sayHello.bind(this));
    this.div.appendChild(h1);
    this.div.appendChild(h3);
    this.div.appendChild(wakeButton);
    this.div.appendChild(helloButton);
    this.div.appendChild(sleepButton);
    document.body.appendChild(this.div);
}
Person.prototype.wakeUp = function() {
    console.log(this.name);
    console.log("I'm up already");
}

Person.prototype.sleep = function() {
    console.log(this.name);
    console.log('zzzzzz');
}

Person.prototype.sayHello = function() {
    alert('Hello, my name is ' + this.name + ' and I am ' + this.age + '. My email address is ' + this.email + '.');
}

document.addEventListener('DOMContentLoaded', function() {
    var d = new Person('David', 27, 'david@depotu.io');
    var k = new Person('Kelsey', 26, 'kelsey@depotu.io');
})



// console.log(d.email);
// console.log(k.email);

// d.wakeUp();
// d.sayHello();
// d.sleep();

// k.wakeUp();
// k.sayHello();
// k.sleep();

