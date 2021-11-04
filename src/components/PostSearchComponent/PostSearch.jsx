import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const PostSearch = ({ onSearchChange }) => {
  const [term, setTerm] = useState('');

  return (
    <InputGroup size="lg" style={{ marginBottom: '20px' }}>
      <InputGroup.Text id="inputGroup-sizing-lg">Search : </InputGroup.Text>
      <FormControl
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="type to search..."
        value={term}
        onChange={(e) => {
          onSearchChange(e.target.value);
          setTerm(e.target.value);
        }}
      />
    </InputGroup>
  );
};

export default React.memo(PostSearch);
