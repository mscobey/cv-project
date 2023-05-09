import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import TextInputs from './TextInputs';

let idNum=1;
export default class Skills extends Component {
   constructor(props){
        super(props);
    
        this.onSubmit = this.onSubmit.bind(this);
      }

  state={
    skill:'',
    showBasicInfo: false
  };

  onShowClick = () =>{
    this.setState({showBasicInfo:!this.state.showBasicInfo});
  }

  onChange = (e) =>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();  
        const{skill}=this.state;

    const newSkill = {
        id: idNum,
        skill
    }
    this.props.onSubmitHandler(newSkill);
    idNum++;
    //send newEducation to a function in a different component to render!
    this.setState({
        skill:''
    });

  }

  render() {
    const{skill,showBasicInfo}=this.state;
    return (
      <div className='card mb-3'>
          <div className='card-header'>
            Skills (Max 10)
            <FontAwesomeIcon onClick={this.onShowClick} style={{float:'right',cursor:'pointer'}} icon={faCaretDown} />
          </div>
          {showBasicInfo ? 
            <div className='card-body'>
            <form  onSubmit={this.onSubmit}>
              <TextInputs label="Skill:" name ="skill" value={skill} placeholder="React,Microsoft Office, C#..." onChange={this.onChange} />
              <input type='submit' value="Add Skill" className='btn col-12 my-1 btn-light d-md-block ' />
            </form>
          </div> : null
          }
      </div>
    )
  }
}
