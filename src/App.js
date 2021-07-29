import React from 'react';
import Posts from './components/Posts';
import Form from './components/Form';

function App() {
    return (  
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <Form />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Posts /> 
                </div>
            </div>
        </div>
    );
  }

  export default App;
  