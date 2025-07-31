import './index.css'; // External CSS
import  { AddingTailwind } from './AddingTailwind'; 

function App() {
    return (
        <div style={{ textAlign: "center", fontFamily: "sans-serif", padding: "20px" }}>
            
            {/* Internal CSS */}
            <style>
                {`
                    p {
                        color: purple;
                        font-size: 18px;
                        margin-top: 10px;
                    }
                `}
            </style>

            {/* Inline CSS */}
            <h1 style={{ color: "hotpink", marginBottom: "10px" }}>
                My React App is Working!
            </h1>

            <p>This is a styled paragraph using internal CSS.</p>
            <h2>This is styled using external CSS.</h2>
            <AddingTailwind />

        </div>
    );
}

export { App };
