// TreeNode.js
import React from 'react';

const TreeNode = ({ node }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <div>{node.name}</div>
      {node.children && node.children.map((child, index) => (
        <TreeNode key={index} node={child} />
      ))}
    </div>
  );
};

export default TreeNode;