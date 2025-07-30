// importing react-dom module
import ReactDom from 'react-dom/client';
import { Mycomponent } from './MyComponent';

// getting division tag by id 'root'
const divTag = document.getElementById('root');

// creating react dom which use to connect/render our componwnt on browser 
const myDom = ReactDom.createRoot(divTag);


// rendering component
// myComponnt is a component is a react component 
myDom.render(<Mycomponent />)


