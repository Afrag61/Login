import Page from "./Components/Page.jsx";

import LoginContextProvider from "./Store/LoginContext";

const App = () => {

  const Style = {
    App: 'w-full h-full flex flex-col items-center justify-center bg-stone-200'
  }

  return (
    <div id="App" className={Style.App}>
      <LoginContextProvider>
        <Page />
      </LoginContextProvider>
    </div>
  );
}

export default App;
