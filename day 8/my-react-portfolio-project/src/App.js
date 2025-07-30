import { About } from './About.js';
import { Skills } from './Skills.js';
import { Contact } from './Contact.js';
function App() {
        const headingStyle = {
                color: 'green',
            textAlign: 'center',
            marginTop: '20px'
        };
        const bstyle={
            marginLeft:'666px'
        }
    return (

        <div>
            <h1 style={headingStyle}>Welcome to My Portfolio</h1>
            <hr />
            <About />
            <hr />
            <b style={bstyle}>My Skills</b>
            <Skills />
            <Contact />
        </div>
    )
}
export { App }