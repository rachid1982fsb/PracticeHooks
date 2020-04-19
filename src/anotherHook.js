
import React, { useState, useEffect } from 'react';


function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    </div>
  );
}
export default Counter


// import React from 'react';

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>

//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }


// export default Counter




  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked another Hook`;
  // });