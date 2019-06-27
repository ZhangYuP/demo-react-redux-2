import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{
  render() {
    return (
      <div>
        n 的值是 {this.props.n}
        <div>
          <button id="add1" onClick={()=> this.props.add1()}>+1</button>
        </div>
      </div>
    );
  }  
}

function mapStateToProps(state){
  return {
    n: state.n
  }
}
function mapDispatchToProps(dispatch){
  return {
    add1: ()=> dispatch({type: 'add', payload: 1})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
