function Skills(){
      const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const listStyle = {
    textAlign: 'center',
    listStylePosition: 'inside',
    padding: 0,
  };
    return(
        <div style={containerStyle}>
        <ul style={listStyle}>
            <li><b>Soft Skills</b></li>
            <ul>
                <li>Curiosity & Eagerness to Learn</li>
                <li>Leadership & Teamwork</li>
                <li>Focused on Tech + Innovation</li>
            </ul>
            <li><b>Technical Skills</b></li>
            <ul>
                <li>React.js</li>
                <li>Python Programming</li>
                <li>HTML & CSS</li>
                <li>Git & GitHub</li>
            </ul>
        </ul>
        </div>
    )
}
export {Skills}