import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="list-group list-group-checkable">
            <input className="list-group-item-check" type="radio" name="listGroupCheckableRadios" style={{display: 'none'}} id="listGroupCheckableRadios1" value="" defaultChecked />
            <label className="list-group-item py-3" htmlFor="listGroupCheckableRadios1">
                First radio
                <span className="d-block small opacity-50">With support text underneath to add more detail</span>
            </label>
            <input className="list-group-item-check" type="radio" name="listGroupCheckableRadios" style={{display: 'none'}} id="listGroupCheckableRadios2" value="" />
            <label className="list-group-item py-3" htmlFor="listGroupCheckableRadios2">
                Second radio
                <span className="d-block small opacity-50">Some other text goes here</span>
            </label>
            <input className="list-group-item-check" type="radio" name="listGroupCheckableRadios" style={{display: 'none'}} id="listGroupCheckableRadios3" value="" />
            <label className="list-group-item py-3" htmlFor="listGroupCheckableRadios3">
                Third radio
                <span className="d-block small opacity-50">And we end with another snippet of text</span>
            </label>
            <input className="list-group-item-check" type="radio" name="listGroupCheckableRadios" style={{display: 'none'}} id="listGroupCheckableRadios4" value="" />
            <label className="list-group-item py-3" htmlFor="listGroupCheckableRadios4">
                Fourth disabled radio
                <span className="d-block small opacity-50">This option is disabled</span>
            </label>
        </div>
    }
};
