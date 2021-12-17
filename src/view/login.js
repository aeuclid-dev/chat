import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return [
            <header className="mb-auto">
                <div>
                    <h3 className="float-md-start mb-0"><strong>X VIDEO CHAT</strong></h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <a className="nav-link active" aria-current="page" href="#">HOME</a>
                        <a className="nav-link" href="#">FEATURE</a>
                        <a className="nav-link" href="#">CONTACT</a>
                    </nav>
                </div>
            </header>,
            <main className="px-3">
                <form>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 text-start">
                            <label for="email" className="form-label"><strong>Email address</strong></label>
                            <input type="email" className="form-control" id="email" aria-describedby="help" />
                            <div id="help" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 text-start">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label className="form-check-label" for="flexRadioDefault1">Client</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">Server</label>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-3"></div>
                        <div className="col-6 text-end">
                            <button type="submit" className="btn btn-primary" onClick="">Confirm</button>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </form>
            </main>,
            <footer className="mt-auto text-white-50">
                <p>

                    Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
            </footer>
        ]
    }
};
