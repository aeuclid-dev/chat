import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
                <form>
                    <div class="row justify-content-start">
                    <div class="col-3">
                        <label for="email" class="form-label"><strong>Email address</strong></label>
                        <input type="email" class="form-control" id="email" aria-describedby="help" />
                        <div id="help" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                    <div class="col-3">
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Client
                        </label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Server
                        </label>
                        </div>
                    </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-3">
                        <button type="submit" class="btn btn-primary" onClick="">Confirm</button>
                    </div>
                    </div>
                </form>
              </div>
    }
};
