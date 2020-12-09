import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { Switch } from 'react-router-dom'
import homeimg from '../../homeimg.png'
import '../../about.css'
import M from 'materialize-css'


const AboutUs = () => {
  
  return (
    <div >
    <div style={{marginTop:"50px"}}>
    <img src={process.env.PUBLIC_URL + "/images/homeimg.png"} className="img-fluid" alt="introduction" />
  </div>
      <div className="intro">
      <h2 style={{textAlign:"center"}}>Panjab University Swami Sarvanand Giri Regional Centre, Hoshiarpur</h2><br/><br/>
      <h3 style={{textAlign:"center"}}>ABOUT US</h3><br/>
      <p >Panjab University Swami Sarvanand Giri Regional Centre (PUSSGRC) in Hoshiarpur, is an integral part of Panjab University, Chandigarh.[1]
      <br/>
      Panjab University was established in 1882 at Lahore (now in Pakistani Punjab). It has 188 affiliated colleges spread over Punjab, Haryana, Himachal Pradesh, Chandigarh and regional centers at Muktsar, Ludhiana and Hoshiarpur. The University has 75 teaching and research departments and 15 centers/chairs. The campus has classrooms, laboratories and workshops for teaching students. It is furnished with a library, dispensary, canteen and hostel facility for over 600 students.</p>
    
      </div>
 <br/>
    <div className="history">
   
    <div className="row">
    <div className="col-lg-8 col-xl-8" >
    <h4>History</h4><hr/>
    <p > 
    Dr Lajpat Rai Munger, a US citizen and the  owner of the world's  largest blueberry farms[citation needed], who  originally belonged to  the village of Nangal  Shahidan Hoshiarpur, adopted  Swami Sarvanand  Giri Maharaj as his guru. He bought 20 acres of property in the name of his guruji in Bajwara village and constructed a campus. Later[when?], he donated it to Panjab University. In February 2006, the campus became the Regional Centre of Panjab University.</p>
  
    </div>
    
    <div className="col-lg-3 col-xl-3"  >
    <div className="img1">
 <img alt="about" src={process.env.PUBLIC_URL + "/images/College6.jpg"} className="img-fluid" />
 </div>
    </div>
    </div>
    </div>
<br/>

    <div className="vision">
    <div className="row" >
    <div className="col-lg-4 col-xl-4" style={{marginRight:"200px"}}>
    <div className="card" style={{textAlign:"center"}}>
    <p><h4>Vision:</h4><hr/>
    To develop young  professionals through <br/>experiential  learning  hinged  on evolving  societal  mores as  per global  needs.
    
</p>
</div>
  </div>
 
  <div className="col-lg-4 col-xl-4">
  
  <div className="card" style={{textAlign:"center"}}>
    <p><h4>Mission:</h4><hr/>
    To promote professional education through the use of ethical based technology oriented education and to prepare students for a career as per global requirement.
   

</p>
</div>

  </div>
  </div>
  </div>
<br/>
  <div className="features">
   
  <div className="row">
  <div className="col-lg-8 col-xl-8" >
  <h4>What sets us apart?</h4><hr/>
  
  
  <ul >
  <li >
     NAAC - A Grade to Panjab University.
  </li><br/>
  <li>
  Admissions based purely on National rankings - AIEEE.
  </li><br/>
  <li>
  100% Post Graduate and research oriented faculty.
  </li><br/>
  <li>
  State of the art infrastructure, a completely networked campus and top of the line computer centres.
        
  </li><br/>
  <li>
  Multi-disciplinary batch.
  </li><br/>
  <li>
  Balanced course structure.
  </li><br/>
  <li>
  Rigorous training in quantitative as well as qualitative analysis
  </li>
  </ul>
  </div>
  
  <div className="col-lg-3 col-xl-3"  >
  <div className="img2">
<img alt="about" src={process.env.PUBLIC_URL + "/images/entrance.jpg"} className="img-fluid" />
</div>
  </div>
  </div>
  </div>



   
    </div>  
    


  );


}
export default AboutUs
