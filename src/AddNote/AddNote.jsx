import React from 'react';

class AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }


    handleSubmit(e) {
        console.log('inside add note');
        e.preventDefault();
        this.setState({submitted: true});
        const {note} = this.state;
        if (note) {
            this.props.onAdd(note);
            //  this.props.onChange(username, searchTerm)
        }
    }

    render() {
     const { note, submitted} = this.state;
        return (<div>
            <div><h4>Add short note to current location</h4></div>
            <form name="searchForm" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !note ? ' has-error' : '')}>
                    <label htmlFor="note">Note</label>
                    <textarea  className="form-control" name="note" value={note}
                           onChange={this.handleChange} maxLength="50"/>
                    {submitted && !note &&
                    <div className="help-block">Text is required</div>
                    }
                </div>
                <div className="btn-toolbar">
                    <input className="btn btn-primary" type="submit" value="Add" />                   
                </div>
            </form>
        </div>);
    }
}

export default AddNote;