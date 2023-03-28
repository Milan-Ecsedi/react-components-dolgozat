import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";


export default class Navbar extends Component{


render() {
    
    return <header>
        <Link to='/' className="btn btn-info">Főoldal</Link>
        <Link to='/tapasztalat' className="btn btn-info"> Szakmai Tapasztalat</Link>
        <Link to='/idopont' className="btn btn-success">Időpontfoglalás</Link>
    </header>
}
}