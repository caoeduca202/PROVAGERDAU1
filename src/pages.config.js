import Home from './pages/Home';
import ModeloDados from './pages/ModeloDados';
import Tabelas from './pages/Tabelas';
import Analises from './pages/Analises';
import Queries from './pages/Queries';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "ModeloDados": ModeloDados,
    "Tabelas": Tabelas,
    "Analises": Analises,
    "Queries": Queries,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};