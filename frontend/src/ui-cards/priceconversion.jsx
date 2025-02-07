import React from 'react';

function Priceconversion({price}) {
    
        return Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits:2}).format(price*10);               
     
};

export default Priceconversion;