import {Component} from 'react'





export class InputField extends Component {
     constructor(props) {
         super(props)
         this.state={value:''}

     }
     handlerChange=(e)=> {
       const {name, value}=e.target
       this.setState({[name]:value})
     }

     render(){
         const{value}=this.state
         const{name, type}=this.props
         return (
             <input name={name} type={type} value={value} onChange={this.handlerChange}/>
         )
        }
}