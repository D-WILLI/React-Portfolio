import React, { Component } from 'react';
// import { Link } from './components/portfolio-work';

class Navigation extends Component{
    render(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid" >
          <a class="navbar-brand" class="navbar-nav" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutMe">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">Skills & Experience </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="resume nav-link" href="https://drive.google.com/file/d/12uQ3UCFcLxy0zUFI6JUrrJfsdfWwRB0y/view?usp=sharing" target="blank"> Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

  export default Navigation ;