
import {BrowserRouter, Route, Routes} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PaginaInical from "../Components/PaginaInicial";
import Formulario from "../allpages/formulario";
import Login from "../login";
import ComoFunciona from "../screenpublic/comofunciona/funciona";
import Dashboard from "../Pages/dashboard";
import Contato from "../screenpublic/contato/contato";
import Blog from "../screenpublic/Blogs/blogs";
import PaginaTemporaria from "../allpages/paginatemp";


function RoutesApp () {
    
    

    
    const Private = ({ Item}) =>{
        const{signed} = useAuth();
        return signed === true ? < Item />  : <Login />;
    };
    
    
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/blogs" element={<Blog />} />
                <Route exact path="/dashboard" element={<Private Item={Dashboard} />} />
                <Route exact path="/bemvindo" element={ <PaginaTemporaria/>} />
                <Route exact path="/" element={<PaginaInical />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/cadastrar" element={<Formulario />}/>
                <Route exact path="/comofunciona" element={<ComoFunciona />}/>
                <Route exact path="/contato" element={<Contato />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;