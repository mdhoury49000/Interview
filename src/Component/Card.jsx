/** @format */

import React from "react";
import { Card } from "react-bootstrap";

export default function CardComponent({
  id,
  avatar,
  name,
  title,
  role,
  balance,
}) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant='top' src={avatar} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>ID:</strong> {id} <br />
          <strong>Title:</strong> {title} <br />
          <strong>Role:</strong> {role} <br />
          <strong>Balance:</strong> {balance} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
