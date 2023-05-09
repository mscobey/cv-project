import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import TextInputs from './TextInputs';

let idNum=1;
export default class Education extends Component {
   constructor(props){
        super(props);
    
        this.onSubmit = this.onSubmit.bind(this);
      }

  state={
    university:'',
    city:'',
    degree:'',
    subject:'',
    gpa:'',
    gradyear:'',
    showBasicInfo: false,
    errors: {}
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
    const{university,city,degree,subject,gpa,gradyear}=this.state;

    if(university === ''){
      this.setState({errors:{university: 'University is required'}});
      return;
    }
    if(city === ''){
      this.setState({errors:{city: 'City is required'}});
      return;
    }
    if(degree === ''){
      this.setState({errors:{degree: 'Degree is required'}});
      return;
    }
    if(subject === ''){
      this.setState({errors:{from: 'Subject is required'}});
      return;
    }
    if(gradyear === ''){
      this.setState({errors:{gradyear: 'Graduation year is required'}});
      return;
    }

    const newEducation = {
        id: idNum,
        university,
        city,
        degree,
        subject,
        gpa,
        gradyear
    }
    this.props.onSubmitHandler(newEducation);
    idNum++;
    //send newEducation to a function in a different component to render!
    this.setState({
        university:'',
        city:'',
        degree:'',
        subject:'',
        gpa:'',
        gradyear:''
    });

  }

  render() {
    const{university,city,degree,subject,gpa,gradyear,showBasicInfo,errors}=this.state;
    return (
      <div className='card mb-3'>
          <div className='card-header'>
            Education (Max 3)
            <FontAwesomeIcon onClick={this.onShowClick} style={{float:'right',cursor:'pointer'}} icon={faCaretDown} />
          </div>
          {showBasicInfo ? 
            <div className='card-body'>
            <form  onSubmit={this.onSubmit}>
              <TextInputs label="University:" name ="university" value={university} placeholder="University of Hard Knocks" onChange={this.onChange} error={errors.university} />
              <TextInputs label="City, State:" name ="city" value={city} placeholder="Omaha, Nebraska" onChange={this.onChange} error={errors.city} />
              <TextInputs label="Degree:" name ="degree" value={degree} placeholder="Bachelors, Masters, PhD..." onChange={this.onChange} error={errors.degree} />
              <TextInputs label="Subject:" name ="subject" value={subject} placeholder="Electrical engineering, Computer science, Physics..." onChange={this.onChange} error={errors.subject} />
              <TextInputs label="Graduation Year:" name ="gradyear" value={gradyear} placeholder="2019" onChange={this.onChange} error={errors.gradyear} />
              <TextInputs label="GPA (4.0 scale, optional):" name ="gpa" value={gpa} placeholder="3.8" onChange={this.onChange} />
              <input type='submit' value="Add Education" className='btn col-12 my-1 btn-light d-md-block ' />
            </form>
          </div> : null
          }
      </div>
    )
  }
}
