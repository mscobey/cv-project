import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import InfoForm from './components/InfoForm';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


class App extends Component {
  constructor(){  
    super();
    this.state={
        infos:[],
        educations:[
            
        ],
        works:[

        ],
        skills:[

        ],
        showDelete:false
    }
}

getInfo = (info) =>{
  //const {infos} = this.state;
  //const newInfos = info;
  this.setState({
    infos:info
  });
}

getEducation = (education) =>{
    const {educations} = this.state;
    const newEducation = [...educations.slice(-2),education];
    this.setState({
        educations:newEducation
    });
    console.log(newEducation);
}

getWork = (work) =>{
  const {works} = this.state;
  const newWork = [...works.slice(-2),work];
  this.setState({
      works:newWork
  });
  console.log(newWork);
}
getSkill = (skill) =>{
  const {skills} = this.state;
  const newSkill = [...skills.slice(-9),skill];
  this.setState({
      skills:newSkill
  });
  console.log(newSkill);
}

showDelete = () =>{
  this.setState({showDelete:true});
}
hideDelete = () =>{
  this.setState({showDelete:false});
}
deleteEdClick = (id)=>{
  const {educations} = this.state;
  //create new contacts variable allowing
  //only contacts without the passed id
  const newEducations = educations.filter(education=>
      education.id !== id);
  //re set the state to the filtered contacts
  this.setState({
      educations:newEducations
  });
}
deleteWorkClick = (id)=>{
  const {works} = this.state;
  //create new contacts variable allowing
  //only contacts without the passed id
  const newWorks = works.filter(work=>
      work.id !== id);
  //re set the state to the filtered contacts
  this.setState({
      works:newWorks
  });
}
deleteSkillClick = (id)=>{
  const {skills} = this.state;
  //create new contacts variable allowing
  //only contacts without the passed id
  const newSkills = skills.filter(skill=>
      skill.id !== id);
  //re set the state to the filtered contacts
  this.setState({
      skills:newSkills
  });
}

  render(){
    const {infos,educations,works,skills,showDelete} = this.state;
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <div className='row'> 
            <div className='col-lg-4'>
              <div className='container'>
                <InfoForm onChangeHandler={this.getInfo} />
                <Education onSubmitHandler={this.getEducation} />
                <Work onSubmitHandler={this.getWork} />
                <Skills onSubmitHandler={this.getSkill} />
              </div>
              
            </div>
            <div className='col-lg-8' style={{fontFamily: 'Source Serif Pro'}}>
              <div className='container  border border-dark p-5'>
                <div className='mb-3'>
                  <h2 className='text-center'>
                    {infos.name}
                  </h2>
                  <div className='text-center'>
                    <h6 className='d-inline'>
                        {infos.address}
                    </h6>
                    <h6 className='d-inline'>
                      &nbsp;•&nbsp;{infos.phone}
                    </h6>
                    <h6 className='d-inline'>
                      &nbsp;•&nbsp;{infos.email}
                    </h6>
                  </div>
                  
                  <h4>
                    {infos.bio}
                  </h4>
                  
                </div>
              
              
              <h2>Education</h2>
              {educations.map(education=>(
                <div onMouseEnter={this.showDelete} onMouseLeave={this.hideDelete} className='mb-3'>
                  {showDelete ? 
                    <FontAwesomeIcon onClick={this.deleteEdClick.bind(this,education.id)} className='float-end' style={{color:'red',cursor:'pointer'}} icon={faX} /> : null
                  }
                  <div className='mb-2'>
                    <h5 className='d-inline fw-bold'>
                        {education.university}
                    </h5>
                    <h5 className='d-inline float-end fw-bold'>
                        {education.city}
                    </h5>
                  </div>
                  
                  <div>
                    <h6 className='d-inline fst-italic'>
                      {education.degree} in {education.subject}
                    </h6>
                    <h6 className='d-inline float-end'>
                        {education.gpa}/4.0
                    </h6>
                  </div>
                  
                  
                </div>
              ))}
              <h2>Work Experience</h2>
              {works.map(work=>(

                <div onMouseEnter={this.showDelete} onMouseLeave={this.hideDelete}>
                  {showDelete ? 
                    <FontAwesomeIcon onClick={this.deleteWorkClick.bind(this,work.id)} className='float-end mb-2' style={{color:'red',cursor:'pointer'}} icon={faX} /> : null
                  }
                  
                  <div className='mb-2'>
                    <h5 className='d-inline fw-bold'>
                        {work.company}
                    </h5>
                    <h5 className='d-inline float-end fw-bold'>
                        {work.city}
                    </h5>
                  </div>
                  
                  <div>
                    <h6 className='d-inline fst-italic'>
                      {work.position}
                    </h6>
                    <h6 className='d-inline float-end'>
                        {work.from} - {work.to}
                    </h6>
                  </div>
                  <h5>
                    {work.bio}
                  </h5>
                  
                </div>
              ))}
              <h2>Skills</h2>
              {skills.map(skill=>(

                <div className='d-inline-block mx-2' onMouseEnter={this.showDelete} onMouseLeave={this.hideDelete}>
                  {showDelete ? 
                    <FontAwesomeIcon onClick={this.deleteSkillClick.bind(this,skill.id)} className='d-inline-block' style={{color:'red',cursor:'pointer'}} icon={faX} /> : null
                  }
                  <h5 className='d-inline-block'>
                      {skill.skill} 
                  </h5>
                  
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div class="position-fixed bottom-0 start-50 translate-middle-x">
          
          <FontAwesomeIcon style={{cursor:'pointer'}} icon={faGithub} />
          
        </div>
      </div>
    );
  }
  
}

export default App;
