import React, {Component} from 'react';
//{/* Functional Component */}

// const SearchBar = () =>{
//     return <input />;
// } 


// Class Component
//state is a plain javascript object that 
//exist in any class based component.
class SearchBar extends Component{

    constructor(props){
        super(props);
        //calls instantly
        this.state = {
            term: '',
        };
        // this.onInputChange = this.onInputChange.bind(this);
    }

    // onInputChange(event){
    //     event.preventDefault();
    //     console.log(event.target.value);

    // }
    render(){ //defining a method in a class
        
            return (
            <div className = "search-bar form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)} 
                    /* <br />Value of the input: {this.state.term} */
                 />
                  <button className="btn btn-outline-dark" type="submit">Search</button>
            </div>
            )
    }
        onInputChange(term){
            this.setState({term});
            this.props.onSearchTermChange(term);
        }
        

}

export default SearchBar;


