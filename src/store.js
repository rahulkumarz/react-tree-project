import { create } from "zustand";

const useStore = create((set) => ({
  nodes: [],
  edges: [],

  addNode: (node) =>
    set((state) => {
      const newNode = {
        id: node.id,
        data: { label: node.title, ...node },
        position: { x: Math.random() * 500, y: Math.random() * 500 },
      };

      if (state.nodes.length > 0) {
        const parentNode = state.nodes[state.nodes.length - 1];
        const newEdge = {
          id: `edge-${parentNode.id}-${newNode.id}`,
          source: parentNode.id,
          target: newNode.id,
        };
        return { nodes: [...state.nodes, newNode], edges: [...state.edges, newEdge] };
      }

      return { nodes: [newNode], edges: state.edges };
    }),

  deleteNode: (nodeId) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== nodeId),
      edges: state.edges.filter((edge) => edge.target !== nodeId),
    })),
}));

export { useStore };
