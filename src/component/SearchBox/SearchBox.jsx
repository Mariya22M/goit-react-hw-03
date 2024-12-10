import css from "./SearchBox.module.css";
import PropTypes from "prop-types"; 

const SearchBox = ({ onSearch, value }) => {
    return (
        <div className={css.searchBox}>
            <p>Find contacts by names</p>
            <input
                type="text"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};


SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired, 
    value: PropTypes.string.isRequired,  
};

export default SearchBox;
