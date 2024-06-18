import React from "react";

const About: React.FC = () => {
  return (
    <>
    <div style={{ color: "white", margin: "50px", textAlign: "center" }}>
      <h1 style={{color: "pink"}}>
        About Page
      </h1>
      <p> this is very simple todo app made with React </p>
      <p>
        you can visit code in  
        <a href="https://github.com/j2a1ck/React-Todo-App"> github</a>
      </p>
      <p> made by Me with ❤</p>
    </div>
    </>
  );
};
export default About;
