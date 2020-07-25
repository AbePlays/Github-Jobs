import React from "react";
import { Form, Col } from "react-bootstrap";

function SearchBar({ params, onParamsChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onParamsChange}
            value={params.description}
            type="text"
            name="description"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={onParamsChange}
            value={params.location}
            type="text"
            name="location"
          />
        </Form.Group>
        <Form.Group xs="auto" className="ml-2" as={Col}>
          <Form.Check
            className="mb-2"
            onChange={onParamsChange}
            value={params.full_time}
            name="full-time"
            id="full-time"
            label="Only Full Time"
            type="checkbox"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default SearchBar;
