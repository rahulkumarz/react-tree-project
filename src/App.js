import React, { useState } from "react";
import { useStore } from "./store";
import ReactFlow, { Controls, Background } from "react-flow-renderer";
import { Button, Modal, TextField, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [formData, setFormData] = useState({ title: "", question: "", childrenCount: 0 });

  const { nodes, edges, addNode, deleteNode } = useStore();

  const handleAddNode = (node) => {
    addNode(node);
    setModalOpen(false);
    setFormData({ title: "", question: "", childrenCount: 0 });
  };

  const handleDeleteNode = (nodeId) => {
    deleteNode(nodeId);
  };

  const handleNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return formData.title && formData.question && formData.childrenCount >= 0;
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Button variant="contained" onClick={() => setModalOpen(true)} style={{ margin: "10px" }}>
        Add Node
      </Button>

      <ReactFlow nodes={nodes} edges={edges} onNodeClick={handleNodeClick}>
        <Background />
        <Controls />
      </ReactFlow>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={style}>
          <Typography variant="h6">Add Node</Typography>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleFormChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Question/Statement"
            name="question"
            value={formData.question}
            onChange={handleFormChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Number of Children"
            name="childrenCount"
            type="number"
            value={formData.childrenCount}
            onChange={handleFormChange}
            margin="normal"
          />
          <Button
            disabled={!validateForm()}
            onClick={() => handleAddNode({ ...formData, id: `node-${nodes.length + 1}` })}
          >
            Add
          </Button>
        </Box>
      </Modal>

      {selectedNode && selectedNode.data.childrenCount === 0 && (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteNode(selectedNode.id)}
          style={{ margin: "10px" }}
        >
          Delete Node
        </Button>
      )}
    </div>
  );
}

export default App;