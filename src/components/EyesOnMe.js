import React, { Component } from 'react' 


class EyesOnMe extends Component{

   focus = () => {
       console.log('Good!')
   }

   blur = () => {
       console.log('Hey! Eyes on me!')
   }

    render(){
        return(
            <div  >
                <button onFocus={this.focus} onBlur={this.blur}></button>
            </div>
        )
    }
}

export default EyesOnMe
