import React, { Component } from 'react';

class Portfolio extends Component{
    render(){
    return(
       <div class="portfolio">
              <a href="https://d-willi.github.io/Javascript-Random-Password-/" target="blank"><h3> Random Password Generator</h3></a> <p> This application gives the user a randomly generated password. </p>
            
              <a href="https://d-willi.github.io/Recipe-Box/" target="blank"><h3> Recipe Box </h3></a> <p> This is an application where someone can find a random recipe.</p>

              <a href="https://d-willi.github.io/Weather-Dashboard/" target="blank"><h3> Weather-Dashboard</h3></a> <p>This is a weather application that can tell you current and 5 day weather of any city.  </p>

              <a href="https://storybook-weddings.herokuapp.com/" target="blank"><h3>Wedding Application</h3></a> <p>This is a Wedding Social Media Profile that allows you to sign up and see other wedding couples. </p> 
        
        

        </div>
    )
}
}

export default Portfolio; 