// circular Progress Bars ka use karne ke liye 'npm install react-circular-progressbar' ko install kare

import React from 'react';
import reactdom from 'react-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const skills = [
  { name: "JavaScript", percentage: 80 },
  { name: "React", percentage: 85 },
  { name: "CSS", percentage: 75 },
  { name: "html", percentage: 90 },
  { name: "Java", percentage: 40 },
  { name: "C", percentage: 90 },
  { name: "C++", percentage: 90 },
  { name: "Python", percentage: 20 },

];

function Skills() {
  return (
    <>
       
      <div className='skillcss'>
        <div className='skillsh2'><h2>Skills</h2></div>
        {skills.map(({ name, percentage }) => (
          <div key={name} style={{ width: 100, textAlign: "center" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: "#333",
                pathColor: "blue",
                trailColor: "#eee",
              })}
            />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
