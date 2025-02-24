// App.js
import React from 'react';
import { treeData } from './data';
import TreeNode from './TreeNode';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tree Structure UI</h1>
      <TreeNode node={treeData} />
    </div>
  );
}

export default App;