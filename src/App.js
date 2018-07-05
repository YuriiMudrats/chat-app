import React, {Component} from 'react'
import axios from 'axios'
import {InputField} from './componets/input'


export  class App extends Component {    
      constructor(props){
        super(props)
      }
      render(){
        axios.get()
        return(
         <div className='container'>
            <InputField/>
         </div>
    
    )
  }
}

