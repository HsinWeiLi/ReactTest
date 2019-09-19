import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div fallbackelement="[object Object]" className="ui search">
                <div className="ui icon input">
                    <input type="text" value="" tabIndex="0" className="prompt" autoComplete="off" />
                    <i aria-hidden="true" className="search icon"></i>
                </div>
                <div className="results transition">
                    <div className="message empty"><div className="header">No results found.</div></div>
                </div>
            </div>
            
        );
    };
}
export default SearchBar;