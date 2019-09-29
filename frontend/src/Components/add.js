import React,{Component} from 'react';
import axios from 'axios';

class Add extends Component{
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);

    this.state = {
      name:'',
      password:''
    }
  }

  nameChange(e){
    this.setState({
      name:e.target.value
    })
  }

  passwordChange(e){
    this.setState({
      password:e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const data = {
      name : this.state.name,
      password : this.state.password
    }
    axios.post('http://localhost:4000/users/add',data)
      .then(alert("Data is Added to the Database"))
      .catch(err=>console.log("Error"));
  }

  render(){
    return(
      <div>
        <h4>Hello Welcome to Add Component!!</h4>

        <form onSubmit={this.onSubmit}>

          <div className="form-field">
            <label>Name : </label>
            <input className="field" type="text" onChange={this.nameChange} placeholder="Enter the Name."/>
          </div>
          <br/>
          <div className="form-field">
            <label>Password : </label>
            <input className="field" type="password" onChange={this.passwordChange} placeholder="Enter your Password" />
          </div>

          <input className="btn" type="submit" value="Submit" />
          <input className="btn btn2" type="reset" value="Reset"/>
        </form>

      </div>
    )
  }
}

export default Add;
