import React from 'react';


function SearchArea() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">Find Employee</div>
                    <div className="col-md-4 ms-auto">    
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
            </div>
        </div>
    );
}

export default SearchArea