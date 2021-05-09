import React from 'react';
import './style.css'

function SearchArea(props, {query}) {


    return (
        <div className="container-fluid searcharea">
            <div className="row justify-content-center">
                <div className="col-12 d-flex justify-content-center searcharea__title"><h1>Employee Directory</h1></div>
                    <div className="col-5 ms-auto searcharea__bar">    
                        <form className="d-flex">
                            <input name="searchbar" 
                                className="form-control me-2" 
                                type="search"
                                placeholder="Search" 
                                aria-label="Search for employee"
                                onChange={props.handleInputChange}
                               />
                        </form>
                    </div>
            </div>
        </div>
    );
}

export default SearchArea