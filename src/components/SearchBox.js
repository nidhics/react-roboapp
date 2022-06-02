import "./SearchBox.css"
const SearchBox = ({ searchChange1 }) => {

    return (
     
            <input
            className="searchBoxSize"
                // className="b--green bg-light-blue"
                type="search"
                placeholder="Search robots......"
                onChange={searchChange1} />

      
    )

}


export default SearchBox