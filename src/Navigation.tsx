import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function Navigation() {
    return (
        <div>
            <p>navigation</p>
            <Button variant="primary">Button #1</Button>
        </div>
    )
}

export default Navigation