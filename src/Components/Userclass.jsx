import React from "react";

class Userclass extends React.Component {
  constructor(props){
    super(props);

this.state={
count: 0,
count2: 2
}
  };

 render() {
const { name, location, details } = this.props;
const { count, count2 } = this.state;

  return (  
  <div className="User-card">
<h1>Count:{count}</h1>
<button onClick={() => this.setState({ count: count + 1 })}>Increment Count</button>
<h1>Count2:{count2}</h1>
<h1>Name:{name}</h1>
<h2>Location:{location}</h2>
<h3>Details:{details}</h3>

</div>
);
}
}

export default Userclass;