import Login from "./Components/Login";

const App = () => {

  const Style = {
    App: 'w-full h-full flex flex-col items-center justify-center bg-stone-200'
  }

  return (
    <div id="App" className={Style.App}>
      <Login />
    </div>
  );
}

export default App;
