function Contact() {
    const formstyle={
        textAlign:'center',
    }
    return (

        <form style={formstyle}>
            <hr /><br />
            <label>Name : </label>
            <input type="text" placeholder="Enter your Name" /><br /><br />
            <label>Email : </label>
            <input type="email" placeholder="Enter your mail ID" /><br /><br />
            <label>Query: </label>
            <input type="text" placeholder="Query Here!" /><br /><br />
            <button type="submit">Submit</button>
        </form>
    )
}
export { Contact }