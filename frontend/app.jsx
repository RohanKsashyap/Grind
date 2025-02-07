import React from 'react';
import { BioProvider } from './src/contextapi';
import Form from './src/Forms/form';
function App() {
    return (
        <>
        
    <BioProvider>

<Form/>



    </BioProvider>
        
        
        </>
    );
}

export default App;