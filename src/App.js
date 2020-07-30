import React, {Component,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Merson from './Person/Person.js'

// class App extends Component {
//   state={
//     Persons:[
//       {name:'varun' ,age:26},
//       {name:'varun1' ,age:26},
//       {name:'varun2' ,age:26}
//     ]
//   }
// myApp=()=>{
//     console.log('It was clicked')
//     this.setState({
//       Persons:[
//         {name:'varun' ,age:26},
//         {name:'Bahman' ,age:26},
//         {name:'varun2' ,age:26}
//       ] 
//     })
// }
//   render(){
//       return (
//             <div className="App">
//               <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                   Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 {/* <a
//                   className="App-link"
//                   href="https://reactjs.org"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Learn React
//                 </a> */}
//                 <button onClick={this.myApp}>Switch Name</button>
//                 <Merson name={this.state.Persons[0].name} age={this.state.Persons[0].age}/>
//                 <Merson name={this.state.Persons[1].name} age={this.state.Persons[1].age}>My hobbies: Chatiing</Merson>
//                 <Merson name={this.state.Persons[2].name} age={this.state.Persons[2].age}/>
//               </header>
//             </div>
//     )
//   }
// }
const style={
backgroundColor:'white',
padding:'8px',
border:'1px solid blue',
textAlign:'center',
cursor:'pointer'
}
function App() {
  const [persons,setperson]=useState({
    Persons:[
      {name:'varun' ,age:26},
      {name:'varun1' ,age:26},
      {name:'varun2' ,age:26}
    ],
    otherstate:'abcd'
  });

  const myApp=(newName)=>{
        console.log('It was clicked')
        setperson({
          Persons:[
            {name:newName ,age:26},
            {name:'Bahman' ,age:26},
            {name:'varun2' ,age:26}
          ],
          otherstate:persons.otherstate 
        }
        )
    }
    
  const changeHandler=(event)=>{
    setperson({
      Persons:[
        {name:event.target.value ,age:26},
        {name:'Bahman' ,age:26},
        {name:'varun2' ,age:26}
      ],
      otherstate:persons.otherstate 
    }
    )
}
    console.log(persons)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <button onClick={myApp.bind(this,'varubah')}>Switch Name</button> */}
        <button onClick={()=> myApp('varun bahman')} style={style}>Switch Name</button>
        <Merson name={persons.Persons[0].name} age='24'/>
        <Merson name='varun' age='24' click={myApp.bind(myApp,'varun sharma')} change={changeHandler}>My hobbies: Chatiing</Merson>
        <Merson name='varun' age='24'/>
      </header>
    </div>
    // React.createElement('div',{className:'App'},'This is working now')
  );
}

export default App;
