export const EventProps = () => {
    const HandleWelcome = (name) => {
        alert(`Hello ${name}`);
};

const HandleHover = () => {
    alert("Thanks for hovering!");
};

return(
    <>
    <WelcomeUser onclick = {() => HandleWelcome("Alice")}
    onMouseEnter={HandleHover}/>
    </>
)
};


//passing event as props
const WelcomeUser = (props) => {
      const HandleGreeting = () => {
        alert("Welcome to our website!");
        props.onclick();
    }

    return(
        <>
        <button onClick={props.onclick}>Click me!</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me!</button>
        <button onClick={HandleGreeting}>Greeting</button>
        </>
    );
};
