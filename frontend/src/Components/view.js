import React, {Component} from 'react';
import axios from 'axios';

class View extends Component{
  constructor(props){
    super(props);
    this.state = {
      datas:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/users')
      .then(res=>{
        this.setState({
          datas: res.data
        })
      })
    console.log(this.state.datas);
  }
  render(){
    return(
      <div>
        <h1>Welcome to View Component!!</h1>
        <ul className="list">
          {this.state.datas.map((person, key) =><div> <li className="listItem"><b>Name : </b>{person.name}<br/><b>Password : </b>{person.password}</li></div>)}
        </ul>
      </div>
    )
  }
}

export default View;
