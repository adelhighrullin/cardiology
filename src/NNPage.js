import React from 'react';
import NNForm from './NNForm';
import NNResult from './NNResult';

function NNPage() {
  return (
    <div className="column">
      <NNForm />
      <NNResult />
    </div>
  )
}

export default NNPage;