import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import TextInputs from './TextInputs';

export default class InfoForm extends Component {
  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);
  }
  state={
    id:1,
    name:'',
    email:'',
    phone:'',
    address:'',
    bio:'',
    showBasicInfo: false
  };

  onShowClick = () =>{
    this.setState({showBasicInfo:!this.state.showBasicInfo});
  }

  onChange = async (e) =>{
    
    await this.setState({
        [e.target.name]:e.target.value
    });
    this.props.onChangeHandler(this.state);
  }

  

  render() {
    const{name,email,phone,address,bio,showBasicInfo}=this.state;
    return (
      <div className='card mb-3'>
          <div className='card-header'>
            General Information
            <FontAwesomeIcon onClick={this.onShowClick} style={{float:'right',cursor:'pointer'}} icon={faCaretDown} />
          </div>
          {showBasicInfo ? 
            <div className='card-body'>
            <form>
            <TextInputs label="Name:" name ="name" value={name} placeholder="Jane Doe" onChange={this.onChange} />
            <TextInputs label="Address:" name ="address" value={address} placeholder="123 Sesame St, Kings Park, NY 11754" onChange={this.onChange} />
            <TextInputs label="Phone:" name ="phone" value={phone} placeholder="123-456-7890" onChange={this.onChange} />
            <TextInputs label="Email:" name ="email" value={email} placeholder="janedoe@email.net" onChange={this.onChange} />
            <TextInputs label="Description:" name ="bio" value={bio} placeholder="Recent graduate looking for a job..." onChange={this.onChange} />
            </form>
          </div> : null
          }
      </div>
    )
  }
}
