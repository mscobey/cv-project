import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import TextInputs from './TextInputs';

let idNum=0;
export default class Work extends Component {

  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  state={
    position:'',
    company:'',
    city:'',
    from:'',
    to:'',
    bio:'',
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
    
    const{position,company,city,from,to,bio}=this.state;

    if(position === ''){
      this.setState({errors:{position: 'Position is required'}});
      return;
    }
    if(company === ''){
      this.setState({errors:{company: 'Company is required'}});
      return;
    }
    if(city === ''){
      this.setState({errors:{city: 'City is required'}});
      return;
    }
    if(from === ''){
      this.setState({errors:{from: 'Start date is required'}});
      return;
    }
    if(to === ''){
      this.setState({errors:{to: 'End date is required'}});
      return;
    }

    const newWork = {
        id:idNum,
        position,
        company,
        city,
        from,
        to,
        bio
    }
    this.props.onSubmitHandler(newWork);
    idNum++;
    //send newWork to a component to render onto the page!
    //clear state
    this.setState({
        position:'',
        company:'',
        city:'',
        from:'',
        to:'',
        bio:'',
        errors:{}
    })
  }

  render() {
    const{position,company,city,from,to,bio,showBasicInfo,errors}=this.state;
    return (
      <div className='card mb-3'>
          <div className='card-header'>
            Work Experience (Max 3)
            <FontAwesomeIcon onClick={this.onShowClick} style={{float:'right',cursor:'pointer'}} icon={faCaretDown} />
          </div>
          {showBasicInfo ? 
            <div className='card-body'>
            <form  onSubmit={this.onSubmit}>
              <TextInputs label="Position:" name ="position" value={position} placeholder="Engineer, Scientist, Doctor..." onChange={this.onChange} error={errors.position} />
              <TextInputs label="Company:" name ="company" value={company} placeholder="Company Incorporated" onChange={this.onChange} error={errors.company} />
              <TextInputs label="City, State:" name ="city" value={city} placeholder="Albuquerque, New Mexico" onChange={this.onChange} error={errors.city} />
              <TextInputs label="Start Date:" name ="from" value={from} placeholder="01/01/2019" onChange={this.onChange} error={errors.from} />
              <TextInputs label="End Date:" name ="to" value={to} placeholder="02/01/2019" onChange={this.onChange} error={errors.to} />
              <TextInputs label="Description (optional):" name ="bio" value={bio} placeholder="Invented a new thinga-majig..." onChange={this.onChange} />
              <input type='submit' value="Add Work Experience" className='btn col-12 my-1 btn-light d-md-block ' />
            </form>
          </div> : null
          }
      </div>
    )
  }
}
