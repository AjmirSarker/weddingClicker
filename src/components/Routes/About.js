import React from 'react';
import Arafat from "../../assets/Arafat/arafat.jpg"
const About = () => {
    return (
        <div style={{marginTop : '200px'}} className='d-flex justify-content-center'>
        <div class="card" style={{width: '18rem'}}>
        <img src={Arafat} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h2 class="card-title">Arafat Sarker</h2>
          <h3 class="card-text">Assalamualaikum ,I'm Arafat Sarker. Now i'm a student of CSE department . I wants to be a full stack web developer. I'm trying my best to in this course.It seems quite dissicult to continue both varsity and course.But,In Sha Allah i will be a full stack web developer.</h3>
         
        </div>
      </div>
      </div>
    );
};

export default About;