import './App.css';
import { RoutedComponent } from './router/RoutedComponent';
import { Links } from './router/Links';


// const mockedDelay = (promise) => {
//   return new Promise ((resolve) => {
//     setTimeout(resolve, 10000);
//   }).then(() => promise);
// };


function App() {
  return (
    <>
        <Links />
        <RoutedComponent />
    </>
  );
}

export default App;
