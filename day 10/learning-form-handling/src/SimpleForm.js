import { useState} from 'react';

function SimpleForm() {
    // we use useState function to initialize state/memory
    let [name, setName] = useState("");

    function handleSubmit(e) {
        // preventDefault fucntion preventing webpage from reload 
        e.preventDefault();
        alert("form is submitted your name  " + name);

    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}
                >
                
                <h2>
                    Enter your name 
                </h2>

                <input 
                type="text"
                placeholder="Your name"
                required
                // value attribute place name state in input area
                value={name} 
                // onChange attribute is tracking change in input area and inside we are updateing name state
                onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export { SimpleForm }
