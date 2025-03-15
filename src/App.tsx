import "./App.css";

function MyButton() {
    return (
        <button className="my-button">My first button</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}
