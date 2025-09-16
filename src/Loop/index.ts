/**
 * Loop Node Definition
 * Iterates over an array of items for downstream processing
 */

import { getPlatformDependencies, type EnhancedNodeDefinition } from "@gravityai-dev/plugin-base";
import LoopExecutor from "./executor";

// Export node type constant
export const NODE_TYPE = "Loop";

// Export a function that creates the definition after platform deps are set
export function createNodeDefinition(): EnhancedNodeDefinition {
  const { NodeInputType } = getPlatformDependencies();

  return {
    packageVersion: "1.0.12",
    type: NODE_TYPE,
  name: "Loop",
  description: "Iterate through array items one by one",
  category: "Flow",
  color: "#4A90E2",
  logoUrl: "https://res.cloudinary.com/sonik/image/upload/v1749961542/gravity/icons/loop.png",

  inputs: [
    {
      name: "items",
      type: NodeInputType.SPAWN,
      description: "Loop me",
    },
    {
      name: "next",
      type: NodeInputType.OBJECT, // Any input here triggers next iteration
      description: "Signal to advance to next iteration",
    },
  ],

  outputs: [
    {
      name: "item",
      type: NodeInputType.OBJECT,
      description: "Current item",
    },
    {
      name: "index",
      type: NodeInputType.NUMBER,
      description: "Current index",
    },
    {
      name: "finished",
      type: NodeInputType.BOOLEAN,
      description: "Signal sent when loop completes all items",
    },
  ],

  configSchema: {
    type: "object",
    properties: {
      items: {
        type: "array",
        title: "Items",
        description: "Array of items to loop through",
        default: [],
        "ui:field": "template",
        items: {
          type: "object",
        },
      },
    },
    required: [],
  },

  capabilities: {
    isTrigger: false,
  },
  };
}

// Export as enhanced node
export const LoopNode = {
  definition: createNodeDefinition(),
  executor: LoopExecutor,
};

// Export for node registry
export const definition = createNodeDefinition();
export default LoopExecutor;
