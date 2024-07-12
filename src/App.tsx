import { NumberParam, StringParam, useQueryParam } from "use-query-params";
import "./App.css";

const App = () => {
  const [num, setNum] = useQueryParam("x", NumberParam);
  const [foo, setFoo] = useQueryParam("foo", StringParam);

  return (
    <div className="content">
      <div>
        <h1>num is {num}</h1>
        <button onClick={() => setNum(Math.random())}>Change</button>
        <h1>foo is {foo}</h1>
        <button onClick={() => setFoo(`str${Math.random()}`)}>Change</button>
      </div>
    </div>
  );
};

export default App;
