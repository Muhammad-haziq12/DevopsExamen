import HomePage from '../Pages/Homepage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/Registerpage';
import AddPizzaPage from '../Pages/AddPizzaPage';

const routes = {
    '/': HomePage,
    '/login': LoginPage,
    '/register': RegisterPage,
    '/add-pizza': AddPizzaPage,
  };
  
  const Router = () => {
    onFrontendLoad();
    onNavBarClick();
    onHistoryChange();
  };
  
  function onNavBarClick() {
    const navItems = document.querySelectorAll('.nav-link');
  
    navItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const uri = e.target?.dataset?.uri;
        const componentToRender = routes[uri];
        if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);
  
        componentToRender();
        window.history.pushState({}, '', uri);
      });
    });
  }

  function onHistoryChange() {
    window.addEventListener('popstate', () => {
      const uri = window.location.pathname;
      const componentToRender = routes[uri];
      componentToRender();
    });
  }

  function onFrontendLoad() {
    window.addEventListener('load', () => {
      const uri = window.location.pathname;
      const componentToRender = routes[uri];
      if (!componentToRender) throw Error(`The ${uri} ressource does not exist.`);
  
      componentToRender();
    });
  }

export default Router;
