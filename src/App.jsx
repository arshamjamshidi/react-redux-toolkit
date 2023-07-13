import { Provider } from "react-redux";
import store from "./redux-toolkit/app/store";

import Counter from "./components/Counter";
import Users from "./components/Users";

const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 100,
        }}
      >
        <Counter />
        <Users />
      </div>
    </Provider>
  );
};

export default App;
