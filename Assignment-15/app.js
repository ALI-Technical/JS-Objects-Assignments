/* Q.NO.1*/

var itemsArray = [
    {
        name: "Juice",
        price: 50,
        quantity: 3
    },
    {
        name: "Cookie",
        price: 30,
        quantity: 9
    },
    {
        name: "Shirt",
        price: 880,
        quantity: 1
    },
    {
        name: "Pen",
        price: 100,
        quantity: 2
    },
]

var juicePrcTotl = itemsArray[0].price * itemsArray[0].quantity;
var cookiePrcTotl = itemsArray[1].price * itemsArray[1].quantity;
var shirtPrcTotl = itemsArray[2].price * itemsArray[2].quantity;
var penPrcTotl = itemsArray[3].price * itemsArray[3].quantity;
var totalAll = juicePrcTotl + cookiePrcTotl + shirtPrcTotl + penPrcTotl;

var table = `<table class="myTable" border="2px">
    <th>${itemsArray[0].name}</th>
    <th>${itemsArray[1].name}</th>
    <th>${itemsArray[2].name}</th>
    <th>${itemsArray[3].name}</th>
    <tr>
        <td>${juicePrcTotl}</td>
        <td>${cookiePrcTotl}</td>
        <td>${shirtPrcTotl}</td>
        <td>${penPrcTotl}</td>
    </tr>
    <tr>
        <td colspan = "4">Total Price is:  ${totalAll}</td>
    </tr>
</table>`

document.write(table);
/*We Can Use for loop also*/


/* Q.NO.2*/

var std = {
    Name: "M.ALI",
    Email: "name@gmail.com",
    Password: "1234567",
    Age: 17,
    Gender: "Male",
    City: "Karachi",
    Country: "Pakistan"
}
var check_age = "Age" in std;
var check_country = "Country" in std;
var checkFrstName = std.hasOwnProperty("FirstName");
var checkLastName = std.hasOwnProperty("lastName");
console.log(check_age);
console.log(check_country);
console.log(checkFrstName);
console.log(checkLastName);


/* Q.NO.3*/

function Student(name, rollnumber, age, cls) {
    this.name = name;
    this.rollnumber = rollnumber;
    this.age = age;
    this.class = cls;
}

var student1 = new Student("M.Ali", 7, 17, 11,);
var student2 = new Student("Ahmed", 12, 17, 10,);

console.log(student1);
console.log(student2);


/* Q.NO.4*/



function Population(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function result() {
    var selectBox = document.getElementById("selectBox");
    var selectBox_2 = document.getElementById("selectBox-2");
    var Gender = document.getElementsByClassName("Gender");
    var user = new Population("ALI",Gender[0].ariaValueText,"Sab bata de kia",selectBox_2.value,selectBox.value);
    var table = `<table border="1">
    <tr>
        <th>Name:</th>
        <th>Gender:</th>
        <th>Adress:</th>
        <th>Education:</th>
        <th>Profession:</th>
    </tr>
    <tr>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>Chrome</td>
        <td>${user.education}</td>
        <td>${user.profession}</td>
</table>`
document.write(table);
}