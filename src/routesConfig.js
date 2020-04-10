import Home from "./pages/home/Home";
import ApiCep from "./pages/dashboard/ApiCep";

const routesConfig = [
    {
        path: '/',
        component: Home,
        exact: true

    },
    {
        path: '/api-cep',
        component: ApiCep,
        exact: true

    }
]

export default routesConfig;