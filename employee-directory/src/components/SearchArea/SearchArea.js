import React from 'react';


function SearchArea(props, {query}) {


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">Find Employee</div>
                    <div className="col-md-4 ms-auto">    
                        <form className="d-flex">
                            <input name="searchbar" 
                                className="form-control me-2" 
                                type="search"
                                value={query} 
                                placeholder="Search" 
                                aria-label="Search"
                               // onChange={this.handleInputChange}
                               />
                            <button className="btn btn-outline-success" 
                            // onClick={this.searchFunction} 
                            type="submit">Search
                            </button>
                        </form>
                    </div>
            </div>
        </div>
    );
}

export default SearchArea