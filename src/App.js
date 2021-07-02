import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import CartPage from "./pages/CartPage/CartPage";

import {ThemeProvider} from "styled-components";


import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import store from "./redux/store";
import ScrollToTop from "./pages/ScrollToTop";


const theme = {
  colorPrimary: "#6C7AE0",
  colorBlack: "#3d3d3d"
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <ScrollToTop>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route  path="/cart" component={CartPage} />
                  <Route exact  path="/shop" component={ShopPage} />
                  <Route  path="/shop/:category" component={CategoryPage} />
                </Switch>
              </ScrollToTop>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
