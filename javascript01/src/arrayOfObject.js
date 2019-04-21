import React, { Component } from "react";

  export class Todo {
    constructor(){
    this.id = 0;
    this.name = '';
    }
  }
  
class MyArraysObjects extends Component {
    constructor(){
        super();
        this.todos= [
            { id: 1, name: "Go to the shopping" },
            { id: 2, name: "Feed the cat" },
            { id: 3, name: "Walk the dog" },
          ];
        this.arrayList=[];
    }
    //state = {  }
    deleteItemFromArray() {
     this.arrayList = this.todos.splice(1, 1);
        console.log("after delere row 1: " + JSON.stringify(this.arrayList));
        console.log("after delere row 1 todos: " + JSON.stringify(this.todos));
    }
    
    insertItemIntoArray() {
        console.log("befire new  row 1 todos" + JSON.stringify(this.todos));
    
        this.todos.push({id:11,name:"New Guy"});
        console.log("after delere row 1" + JSON.stringify(this.arrayList));
        console.log("after new  row 1 todos" + JSON.stringify(this.todos));
        // output:
        // after delere row 1: [{"id":2,"name":"Feed the cat"}]
        // after delere row 1 todos:
        // [{"id":1,"name":"Go to the shopping"},{"id":3,"name":"Walk the dog"},
       
    }
    
    foreachArrayItems() {
        console.log("for each todos" + JSON.stringify(this.todos));
        
        this.todos.forEach(t => {
          console.log(t.id + " - " + t.name);
        });
        // output: for each todos[{"id":1,"name":"Go to the shopping"},
        // {"id":2,"name":"Feed the cat"},{"id":3,"name":"Walk the dog"}]
        // 1 - Go to the shopping
        // 2 - Feed the cat
        // 3 - Walk the dog
    }
     
    arrowFuntion01() {
        //let myFunc=(nameFunction)=>("Hi "+ nameFunction() + ".");
        //let printName=(nameFunction, printFunction) => printFunction(myFunc(nameFunction));
       
        let products = [
          { name: "Pen", price: 1.0, stock: 10 },
          { name: "Ice", price: 2.0, stock: 1 },
          { name: "Ballon", price: 10, stock: 0 },
          { name: "Candy", price: 3.0, stock: 1 }
        ];
        let totalValue = products
          .filter(item => item.stock > 0)
          .reduce((prev, item) => prev + item.price * item.stock, 0);
        console.log("Total value: $" + totalValue.toFixed(2));
        //Total value: $15.00
      }
    
      render() { 
        return (
            <div>
            {
                //this.deleteItemFromArray()
                //this.foreachArrayItems()
                this.arrowFuntion01()
            }
            </div>
          );
    }
}
 
export default MyArraysObjects;

  
  
  