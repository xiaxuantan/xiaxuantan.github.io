import React from 'react';
import { Col, Image } from 'react-bootstrap';


const sideColumn = (props) => {
  return (
    <Col xs={3} style={{ minHeight: "700px" }}>
      <div style={{ display: "table-cell", textAlign: "center", verticalAlign: "middle", height: "240px", width: "240px" }}>
        <Image src="avatar.jpg" style={{ height: "180px", width: "180px" }} roundedCircle />
      </div>
    </Col>
  )
}

export default sideColumn;