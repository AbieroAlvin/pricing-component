import Container from "./components/Container";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <div
        className={`flex items-center justify-center md:py-6 w-full h-screen mx-auto  bg-[url('./assets/images/bg-pattern.svg')] bg-no-repeat bg-left-top px-4 bg-VeryPaleBlue`}
      >
        <div className="max-w-[760px] font-body">
          <Heading />
          <Container />
        </div>
      </div>
    </>
  );
}

export default App;
