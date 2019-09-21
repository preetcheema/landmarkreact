import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            searchTerm: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }


    handleSubmit(e) {       
        e.preventDefault();
        this.setState({submitted: true});
        const {username, searchTerm} = this.state;
        if (username || searchTerm) {
         this.props.onChange(username, searchTerm)
        }
    }
    
    clearFilter(){        
        this.setState({submitted: false});
        this.setState({username: '', searchTerm: ''});
        this.props.onChange('', '')
    }


    render() {
        const {username, searchTerm, submitted} = this.state;
        return (<div>
            <div><h4>Search</h4></div>
            <form name="searchForm" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                    {submitted && !username && !searchTerm &&
                    <div className="help-block">Username or search term is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={username}
                           onChange={this.handleChange}/>
                   
                </div>

                <div className={'form-group' + (submitted && !searchTerm ? ' has-error' : '')}>
                    <label htmlFor="searchTerm">Search Term</label>
                    <input type="text" className="form-control" name="searchTerm" value={searchTerm}
                           onChange={this.handleChange}/>

                </div>
                <div className="btn-toolbar">
                    <input className="btn btn-primary" type="submit" value="Search" />              
                    <button className="btn btn-primary" type="button" onClick={this.clearFilter}>Show all</button>
                </div>
            </form>

        </div>);
    }
}

export default SearchBar;