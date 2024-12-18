import React from "react";

export default function SearchBar() {
  return (
<div className="d-flex justify-content-center">
      <InputGroup className="mb-3" style={{ maxWidth: "600px" }}>
        {/* Job Title Input */}
        <InputGroup.Text>
        <i class="bi bi-search"></i>

        </InputGroup.Text>
        <Form.Control
          placeholder="Job title, Keyword..."
          aria-label="Job title, Keyword"
        />

        {/* Separator */}

        {/* Location Input */}
        <InputGroup.Text>
        <i class="bi bi-geo-alt"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="Your Location"
          aria-label="Your Location"
        />

        {/* Find Job Button */}
        <Button variant="primary">Find Job</Button>
      </InputGroup>
    </div>
  );
}
