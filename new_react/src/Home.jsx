import "./Home.css";
import Register from "./Register";
import Login from "./Login";

function Home() {
  const url = window.location.href;
  const Router = () => {
    switch (url) {
      case "http://localhost:5173/login":
        return <Login />;
      case "http://localhost:5173/register":
        return <Register />;
      default:
        return <> Page Not Found</>;
    }
  };

  return (
    <>
      <h1>Welcome to React</h1>

      <Router />
    </>
  );
}
export default Home;
