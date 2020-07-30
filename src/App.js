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
//     ],
//     otherstate:'abcd',
//     showPerson:false
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
// toggle=()=>{
//   this.setState({
//     showPerson:!this.state.showPerson
//   }
//   )
// }
//   render(){
//     let pearson=null
// if(this.state.showPerson){
//   pearson=(<div>
//     {
//       this.state.Persons.map(x=>{
//         return <Merson
//           name={x.name}
//           age={x.age} />
//       })
//     }
//     </div>);
// }
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
//                 <button onClick={this.toggle}>Switch Name</button>
//                 {pearson}
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
    otherstate:'abcd',
    showPerson:false
  });

  const myApp=(newName)=>{
        console.log('It was clicked')
        setperson({
          Persons:[
            {name:newName ,age:26},
            {name:'Bahman' ,age:26},
            {name:'varun2' ,age:26}
          ],
          otherstate:persons.otherstate,
          showPerson:persons.showPerson 
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
      otherstate:persons.otherstate,
      showPerson:persons.showPerson
    }
    )
}

const toggle=()=>{
  setperson({
    Persons:[
      {name:'varun bahman' ,age:26},
      {name:'Bahman' ,age:26},
      {name:'varun2' ,age:26}
    ],
    otherstate:persons.otherstate,
    showPerson:!persons.showPerson
  }
  )
}
let pearson=null
if(persons.showPerson){
  pearson=(<div>
    {
      persons.Persons.map(x=>{
        return <Merson
          name={x.name}
          age={x.age}
          change={changeHandler}>
        </Merson>
      })
    }
    </div>);
}
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
        <button onClick={toggle} style={style}>Toggle Name</button>
        <button onClick={()=>myApp('varu')} style={style}>Switch Name</button>
        {pearson}
      </header>
    </div>
    // React.createElement('div',{className:'App'},'This is working now')
  );
}

export default App;
