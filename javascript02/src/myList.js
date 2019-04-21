import React, { Component } from "react";

class MyList extends Component {
  state = {};

  myList() {
    class Student {
      id;
      name;
    }

    var students = [{ id: 1, name: "James" }, { id: 2, name: "Amy" }];
    console.log(JSON.stringify(students));
    // [{"id":1,"name":"James"},{"id":2,"name":"Amy"}]
    // add
    students.push({ id: 3, name: "James3" });
    console.log(JSON.stringify(students));
    // [{"id":1,"name":"James"},{"id":2,"name":"Amy"},{"id":3,"name":"James3"}]
    // removes the last element from array and returns it
    students.pop();
    console.log(JSON.stringify(students));
    // [{"id":1,"name":"James"},{"id":2,"name":"Amy"}]

    // delete an item with filtered
    students = students.filter(s => s.id != 1);
    console.log(JSON.stringify(students));
    // [{"id":2,"name":"Amy"}]

    students.push({ id: 3, name: "James3" });
    students.push({ id: 4, name: "James4" });
    const index = students.findIndex(s => s.id === 3);
    // returns -1 if not find

    // remove item using splice
    students.splice(index, 1);
    console.log(JSON.stringify(students));
    // [{"id":2,"name":"Amy"},{"id":4,"name":"James4"}]

    // find an item in a list
    const find2 = students.find(s => s.id === 2);
    // returns undefined if not find
    console.log(JSON.stringify(find2));

    let TODO_API = "http://localhost:5000/api/todos";
    let id=5;
    let url = `${TODO_API}/${id}`;
    console.log(url)
    // http://localhost:5000/api/todos/5
  }

  render() {
    return (
      <div>
        {
            this.myList()
        }
      </div>
    );
  }
}

export default MyList;
