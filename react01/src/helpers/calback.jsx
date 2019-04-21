import React, { Component } from "react";

const cities = [{ id: 1, name: "Istanbul" }, { id: 2, name: "New York" }];
const animals = [{ id: 1, name: "CAT" }, { id: 2, name: "DOG" }, { id: 3, name: "FROG" }];

export default class CalbackComponent extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();

    this.state = {
      textValue: "JOHN",
      city: "Istanbul",
      cityList:[],
      selectedAnimal:''
    };
  }

  changeCity = () => {
    this.setState({
      city: this.state.city === "Istanbul" ? "New York" : "Istanbul"
    });
  };

  changeCityObj = (e,obj) => {
    console.log(JSON.stringify(obj))
    this.setState({
      cityList: obj
    });
  };

  changeAnimalObj = (e,obj) => {
    console.log(JSON.stringify(obj))
    this.setState({
      selectedAnimal: obj
    });
  };

  onChangeAnimal = event => {
    console.log(
      JSON.parse(event.target.value)
    )
    // this.setState({
    //   selectedAnimal: obj
    // });
  };

  render() {
    return (
      <div>
        <Child value={this.state.city} cityList={this.state.cityList} animals={animals}
        selectedAnimal={this.state.selectedAnimal}
        callback={this.changeCity} callbackObj={(e,obj)=>this.changeCityObj(e,obj)}
        callbackAnimalObj={(e,obj)=>this.changeAnimalObj(e,obj)} 
        callbackOnChangeAnimal ={ (e)=>this.onChangeAnimal(e)} />
      </div>
    );
  }
}

export class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <h2 className="bg-primary text-white text-center p-2">
          <div>Props Value: {this.props.value}</div>
          <div>Local Value: {this.state.counter} </div>
        </h2>
        <div className="text-center">
          <button className="btn btn-primary m-2" onClick={this.props.callback}>
            Parent
          </button>
         
          <button
            className="btn btn-primary m-2"
            onClick={this.incrementCounter}
          >
            Local
          </button>
          <br/>
          CityList: {JSON.stringify(this.props.cityList)}
          <br></br><button className="btn btn-primary m-2" onClick={(e,obj) =>this.props.callbackObj(e,cities)}>
            Parent Object
          </button>

          <div>Props Value: {JSON.stringify(this.props.selectedAnimal)}</div>

          <ul className="todos">
            {animals.map((item, index)=>(
            <li key={ index } onClick={(e,a) =>this.props.callbackAnimalObj(e,item)}> 
             <span className="badge">{item.id}</span> - {item.name}</li>
            ))}
          </ul>
          <hr></hr>
          <select onChange={(e) =>this.props.callbackOnChangeAnimal(e)} >
                  {animals.map(item => (
                    <option key={item.name} value={JSON.stringify(item)}>
                      {item.name}
                    </option>
                  ))}
                </select>
        </div>
      </div>
    );
  }
}
