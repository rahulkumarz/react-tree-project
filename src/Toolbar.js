// Toolbar.js
import React from 'react';

const Toolbar = ({ onAddNode, onDeleteNode, onEditNode, onSave, onCancel }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
      <div>
        <button onClick={onAddNode}>Add Node</button>
        <button onClick={onDeleteNode}>Delete Node</button>
        <button onClick={onEditNode}>Edit Node</button>
      </div>
    </div>
  );
};

export default Toolbar;