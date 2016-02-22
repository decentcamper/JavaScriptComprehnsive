function dynamicPropertiesFunc() {
    var person = {};
    person.name = "Vivek";
    person.occupation = "Instructor";
    person.age = 30;

//To loop through all the attributes of an object..
    for (attributes in person) {
        alert(person[attributes]);

    }
    alert(person.name);    //"Vivek"
    alert(person["age"]);    //"Vivek"
}






