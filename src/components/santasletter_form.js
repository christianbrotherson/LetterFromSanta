import React, { Component } from 'react';
import {
  Col,
  Row,
  Card
} from 'reactstrap';

class SantasLetterForm extends Component {

    handleChange = function() {
      console.log('tyring to handle change');
      
    }

    render() {
      return (
        <div className="card-wrapper">
          <Card>
            
              <Row>
                <Col md="6">
                  What is your name?
                </Col>
                <Col md="6">
                  <input type="text" placeholder="Your name" onChange={this.handleChange}/>
                </Col>
              </Row>
          
              <Row>
                <Col md="6">
                  Where do you live?
                </Col>
                <Col md="6">
                <input type="text" placeholder="City" onChange={this.handleChange}/>
                </Col>
              </Row>
              
              <Row>
                <Col md="6">
                  What do you want for Christmas?
                </Col>
                <Col md="6">
                <input type="text" placeholder="Built by Santa's Elves" onChange={this.handleChange}/>
                </Col>
              </Row>

          </Card>
        </div>
      )
    };
}

export default SantasLetterForm;