import React from 'react';

function Results(data) {
  return (
    <section>
      <pre testId='preResults'>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
