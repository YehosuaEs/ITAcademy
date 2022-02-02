import { Fragment } from "react";
import {FormControl, Form,  Button,} from "react-bootstrap"
import {Link} from "react-router-dom"


function LoginSearch({logout}) {



    return (
         <Fragment>
                <div className="col-lg-3 text-center text-white mt-3">
                    
                    <Form className="d-flex mb-3 mx-4 " >
                        <FormControl
                            placeholder="Search Star Wars"
                            className="me-2 ms-4 border-dark rounded-pill bg-transparent"
                            aria-label="Search"
                        />
                        <Button className=" bg-dark me-3 border-dark rounded-pill"> Search</Button>
                    </Form>

                    <Link to="./login" 
                        style={{ textDecoration: 'none'}} > LOG IN &nbsp; </Link> 
                        / /
                    <Link to="./login" 
                        style={{ textDecoration: 'none'}}
                        onClick={logout} > &nbsp; LOG OUT </Link>   
                     
                </div>

         </Fragment>
    )
};

export default LoginSearch;