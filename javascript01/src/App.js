import React, { Component } from "react";
import "./App.css";
import MyArraysObjects from './arrayOfObject';
import MyForLoops from './myForLoops';

class App extends Component {
  variable_Types() {
    // simple tru/false value
    let isDone = false;
    let isSuccess = true;
    let foo; // undefined
    console.log("foo :" + foo);
    //default value= undefined
  }

  numbers() {
    let decimal = 6;
    let hex = 0xf00d;
    let binary = 0b1010;
    let octal = 0o744;
    let numberDefault;
    let age = 100;
    let payment = 50.5;

    console.log("decimal :" + decimal);
    console.log("hex :" + hex);
    console.log("binary :" + binary);
    console.log("octal :" + octal);
    console.log("numberDefault :" + numberDefault);
    console.log("age :" + age);
    console.log("payment :" + payment);
    /*output:
      decimal :6
      hex :61453
      binary :10
      octal :484
      numberDefault :undefined
      age :100
      payment :50.5
   */
  }

  templateString() {
    //Template String
    let name = "John";
    let state = "CA";
    let text = `My name is ${name} and I live in ${state}`;
    console.log("Template EX: " + text);
    //Template EX: My name is John and I live in CA
  }

  stringToNumber() {
    let value1 = "2";
    let value2 = "3";
    let result = Number(value1) + Number(value2);
    console.log("Result: " + result);
    // Result: 5
  }
  ifElseSwitch() {
    let color = "red";
    if (color === "blue") {
      console.log("color is blue");
    } else if (color === "green") {
      console.log("color is green");
    } else {
      console.log("color is neither blue or green");
    }

    switch (color) {
      case "blue":
        console.log("color is blue");
        break;
      case "green":
        console.log("color is green");
        break;
      default:
        console.log("color is neither blue or green");
        break;
    }

    // color is neither blue or green
    // color is neither blue or green
  }

  objectAssign() {
    const target = { a: "John", b: "James" };
    const source = { b: "Mary", c: "Elizabeth" };

    const returnedTarget = Object.assign(target, source);

    console.log(target);
    // expected output: {a: "John", b: "Mary", c: "Elizabeth"}
    console.log(returnedTarget);
    // expected output: {a: "John", b: "Mary", c: "Elizabeth"}

    // Cloning an Object
    var obj = { a: 1 };
    var copy = Object.assign({}, obj);
    console.log(copy); // { a: 1 }
  }
  arrrays() {
    let list = [1, 2, 3, 4];
    let myArray = new Array();
    myArray[0] = 10;
    myArray[1] = "John";
    myArray[2] = true;

    let myArray1 = [10, "John", true];
    console.log(`Index of 1: ${myArray1[1]}`);
    // output: Index of 1: John

    myArray1[0] = "James";
    console.log(`Index of 0: ${myArray1[0]}`);
    // output: Index of 0: James

    // add a new user using spread operator
    let users = ["John", "James", "Mike"];
    let allUsers = [...users, "Amy", "Cindy"];
    console.log("allUsers");
    console.log(allUsers);
    //output: allUsers
    //        ["John", "James", "Mike", "Amy", "Cindy"]

    // merge two or more arrays
    let girls = ["Nancy", "Jen", "Mary"];
    let boysAndGirls = [...users, ...girls];
    console.log(boysAndGirls);
    // output:  ["John", "James", "Mike", "Nancy", "Jen", "Mary"]
  // Accessing the array element using forEach
    boysAndGirls.forEach((value, index) => console.log(`Index ${index}: ${value}`));
    // output:
    // Index 0: John
    // Index 1: James
    // Index 2: Mike
    // Index 3: Nancy
    // Index 4: Jen
    // Index 5: Mary
  }
  render() {
    return (
      <div className="App">
        {//this.variable_Types()
        //this.numbers()
        // this.templateString()
        //this.stringToNumber()
        //this.ifElseSwitch()
       // this.arrrays()
        //this.objectAssign()
        //<MyArraysObjects></MyArraysObjects>
        <MyForLoops></MyForLoops>
      
      }
      </div>
    );
  }
}

export default App;
