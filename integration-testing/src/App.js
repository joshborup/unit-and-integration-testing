import React, { Component } from 'react';
import promises from './promises';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cars:[],
      make: '',
      model:'',
      year:'',
      color:''
    }
  } 

  componentDidMount(){
    promises.getCars('/api/cars').then(response => {
      this.setState({
        cars: response
      })
    })
  }

  changeHandler = (key, val) => {
    this.setState({
      [key]:val
    })
  }

  sumbit = () => {
    const newCar = {
      make: this.state.make,
      model: this.state.model,
      year:this.state.year,
      color:this.state.color
    }
    promises.postCars('/api/cars', newCar).then(response => {
      this.setState({
        cars: response
      })
    })
  }


  render() {

    const myCarList = this.state.cars.map((car) => {
      return  <div className='car-details' key={car.id}>
                <ul>
                  <li>Make: {car.make}</li>
                  <li>Model: {car.model}</li>
                  <li>Year: {car.year}</li>
                  <li>Color: {car.color}</li>
                </ul>
              </div>
    }).reverse();

    return (
      <div className='App'>
        <header>
          <h1>Car Inventory</h1>
        </header>
        <div className='form'>
          <div>
            Make: <input name='make' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} value={this.state.make}/>
          </div> 
          <div> 
          Model: <input name='model' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} value={this.state.model}/>
          </div>
          <div> 
          Year: <input name='year' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} value={this.state.year}/>
          </div> 
          <div> 
          Color: <input name='color' onChange={(e) => this.changeHandler(e.target.name, e.target.value)} value={this.state.color}/>
          </div>
          <button onClick={this.sumbit}>Submit</button>
        </div>
        <div className='inventory'>
          {myCarList}
        </div>
      </div>
    );
  }
}

export default App;
