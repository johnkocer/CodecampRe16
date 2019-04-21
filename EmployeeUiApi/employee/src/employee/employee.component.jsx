import React, { Component } from 'react';
import { EmployeeService } from '../service/employee.service'

class EmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      employee: Object
    };

    this.searchByName = React.createRef();
    this.searchById = React.createRef();
    this.inputName = React.createRef();
    this.inputGender = React.createRef();
    this.inputSalary = React.createRef();
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees() {
    EmployeeService.get()
      .then(res => {
        this.setState({
          employeeList: res.data
        });
      })
      .catch(error => {
        console.log("There is an error in getEmployees API call." + error);
      });
  }

  searchEmployeesByName(e) {
    console.log('In searchEmployees')
    EmployeeService.searchEmployees(this.searchByName.current.value)
      .then(res => {
        console.log('In searchEmployees')
        console.dirxml(res.data)

        this.setState({
          employeeList: res.data
        });
      })
      .catch(error => {
        console.log("There is an error in Get API call." + error);
      });
  }

  searchEmployeesById(e) {
    console.log('In searchEmployeesById')
    EmployeeService.getEmployee(this.searchById.current.value)
      .then(res => {
        console.dirxml(res.data)

        this.setState({
          employee: res.data
        });
      })
      .catch(error => {
        console.log("There is an error in Get API call." + error);
        this.setState({ employee: null })
      });
  }

  handleChange(index, dataType, value) {
    const newState = this.state.employeeList.map((item, i) => {
      if (i === index) {
        return { ...item, [dataType]: value };
      }
      return item;
    });

    this.setState({
      employeeList: newState
    });
  }

  updateEmployee(e, row) {
    console.dirxml(row)
    console.dirxml(this.state.employeeList)
    let findEmployee = this.state.employeeList.find(
      t => t.id === row.id
    );
    if (findEmployee) {
      EmployeeService.put(findEmployee)
        .then(res => {
          const todoRes = res.data;
          console.dir(todoRes);
          this.getEmployees()
        })
        .catch(error => {
          console.log("There is an error in Put API call." + error);
        });
    }
    console.dirxml(findEmployee)
  }

  deleteEmployee = (e, row) => {
    console.dirxml(row)
    EmployeeService.delete(row)
      .then(res => {
        this.getEmployees()
      })
      .catch(error => {
        console.log("There is an error in Put API call." + error);
      });
  };

  addEmployee = (e, item) => {
    const newEmployee = { name: this.inputName.current.value, gender: this.inputGender.current.value, salary: this.inputSalary.current.value };
    EmployeeService.post(newEmployee)
      .then(res => {
        console.dir(res.data);
        this.setState({
          employeeList: [...this.state.employeeList, res.data],
          addItemName: ""
        });
      })
      .catch(error => {
        console.log("There is an error in Post API call." + error);
      });
  }

  render() {
    //console.clear();
    console.log(JSON.stringify(this.state.employeeList));
    return (
      <div>
        <br></br> Find Employee by Name: <input type="text" ref={this.searchByName} />
        <button className="btn btn-sm btn-primary ml-1" onClick={(e) => this.searchEmployeesByName(e)} >Search</button>

        <table className="table table-striped  table-hover table-sm small table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Salary ($)</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th> </th>
              <th>
                <input id="newName" type='text' ref={this.inputName} placeholder="newName" />
              </th>
              <th>
                <input type="text" ref={this.inputGender} placeholder="newGender" />
              </th>
              <th>
                <input type='number' ref={this.inputSalary} placeholder="newSalary" />
              </th>
              <th>
                <button className="btn btn-sm btn-primary" onClick={(e) => this.addEmployee(e, this.newEmployee)}>Add </button>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.employeeList.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>
                    <input onChange={(e) => this.handleChange(index, 'name', e.target.value)}
                      type='text'
                      className='form-control'
                      step='1' min="1"
                      value={this.state.employeeList[index].name} />
                  </td>
                  <td>
                    <input onChange={(e) => this.handleChange(index, 'gender', e.target.value)}
                      type='text'
                      className='form-control'
                      value={this.state.employeeList[index].gender} />
                  </td>
                  <td>
                    <input onChange={(e) => this.handleChange(index, 'salary', e.target.value)}
                      type='text'
                      className='form-control'
                      placeholder='5000.00'
                      value={this.state.employeeList[index].salary} />
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary" onClick={(e) => this.updateEmployee(e, row)}>Update</button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary" onClick={(e) => this.deleteEmployee(e, row)}>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        Find Employee by Id: <input type="text" ref={this.searchById} />
        <button className="btn btn-sm btn-primary ml-1" onClick={(e) => this.searchEmployeesById(e)} >Search</button>
        <br></br>{JSON.stringify(this.state.employee)}
      </div>

    );
  }
}

export default EmployeeComponent;