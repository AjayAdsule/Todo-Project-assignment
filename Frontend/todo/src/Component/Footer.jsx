import React from 'react'
import { Container } from 'react-bootstrap'
import {FaCheck} from "react-icons/fa";
const Footer = () => {
  return (
    <React.Fragment>
      <Container className='d-flex justify-content-center mt-3'>
          <div className="item border d-flex justify-content-between" style={{width:"30rem"}}>
            <div className="content">
              hello
            </div>
            <div className="icon">
              <FaCheck/>
            </div>
          </div>
      </Container>
    </React.Fragment>
  )
}

export default Footer
