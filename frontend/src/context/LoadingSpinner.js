import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <React.Fragment>
    <div>
       
<div className={`${props.asOverlay && 'loading-spinner__overlay'}`}></div>

   
<div class='body'>
  
<span>
<span></span>
<span></span>
<span></span>
<span></span>
</span>

<div class='base'>
<span></span>
<div class='face'></div>
</div>

  
</div>
<div class='longfazers'>
<span></span>
<span></span>
<span></span>
<span></span>

<h1 style={{color:"black",marginTop:"54vh",marginLeft:"46%"}}>Please wait</h1>
</div>

</div> 
</React.Fragment>
);
};

export default LoadingSpinner;
