import React from 'react';

const Hello = (props) => {
	return(
		<div className='tc f1'>
          <h1>Hello There </h1>
          <p>{props.greeting}</p>
		</div>
	);
}

export default Hello;