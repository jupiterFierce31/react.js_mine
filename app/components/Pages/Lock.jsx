import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import { Router, Route, Link, History } from 'react-router-dom';

class Lock extends React.Component {

    render() {
        return (
            <div className="abs-center wd-xl">
                { /* START panel */ }
                <div className="p">
                    <img src="img/user/02.jpg" alt="Avatar" width="60" height="60" className="img-thumbnail img-circle center-block" />
                </div>
                <div className="panel widget b0">
                    <div className="panel-body">
                        <p className="text-center">Please login to unlock your screen.</p>
                        <form role="form">
                            <div className="form-group has-feedback">
                                <input id="exampleInputPassword1" type="password" placeholder="Password" className="form-control" />
                                <span className="fa fa-lock form-control-feedback text-muted"></span>
                            </div>
                            <div className="clearfix">
                                <div className="pull-left mt-sm">
                                    <Link to="recover" className="text-muted">
                                        <small>Forgot your password?</small>
                                    </Link>
                                </div>
                                <div className="pull-right">
                                    <Link to="dashboard" className="btn btn-sm btn-primary">Unlock</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                { /* END panel */ }
            </div>
            );
    }

}

export default Lock;

