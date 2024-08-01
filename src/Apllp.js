import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Header title="react" />
    </div>
  );
}

export default App; //this is necessary

function Header(props) {
  // console.log(title);
  return <h1> {props.title}</h1>;
}

// function HomePage() {
//   return (
//     // <div>
//     //   <Header />
//     //   <Header />
//     // </div>
//   );
// }
