import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {

    
  useEffect(() => {
    console.log('use effect called..');
  }, []);
  const rowData = [
    { make: 'Toyota', model: {
        make:'Test',maker:'asasa'
    }, price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn field="make" />
        <AgGridColumn field="model" />
        <AgGridColumn field="price" />
      </AgGridReact>
    </div>
  );
};

render(<App />, document.getElementById('root'));
