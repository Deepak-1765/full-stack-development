function handleClick() {
  alert('Button clicked!');
}

function handleFormSubmit() {
  alert('Form submitted!');
}

function EventHandle() {
  return (
    <div>
      <button onClick={() => handleClick () }>Click Me</button>

      <br /><br />

      <form onSubmit={() => handleFormSubmit () }>
        <label>Enter your name:</label>
        <input type="string" required /> <br />

        <button> submit form</button>
      </form>
    </div>
  );
}

export { EventHandle }
