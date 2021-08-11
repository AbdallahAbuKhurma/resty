import React from 'react';
import Loading from '../loading/Loading';

function Results(props,data) {
  return (
    <section>
      <pre data-testid='preResults'>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading />}</pre>
    </section>
  );
}

export default Results;
