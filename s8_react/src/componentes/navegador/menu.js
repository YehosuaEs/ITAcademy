import { Fragment } from "react";
import { Link } from "react-router-dom";



function Menu() {

    return (
        <Fragment>
             <div className="Nav">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="btn-group d-flex" role="group" aria-label="Basic example" style={{backgroundColor:"rgb(0, 0, 0)"}}>
                            <Link to="./" type="button" className="btn btn-outline-secondary">HOME</Link>
                            <Link to="starShips" type="button" className="btn btn-outline-secondary">STARSHIPS</Link>
                            <Link to="./video" type="button" className="btn btn-outline-secondary">VIDEO</Link>
                            <Link to="./films" type="button" className="btn btn-outline-secondary">FILMS</Link>
                            <Link to="./series" type="button" className="btn btn-outline-secondary">SERIES</Link>
                            <Link to="./community" type="button" className="btn btn-outline-secondary">COMMUNITY</Link>
                            <Link to="./disney+" type="button" className="btn btn-outline-secondary">DISNEY+</Link>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>

        </Fragment>

    )
};


export default Menu;