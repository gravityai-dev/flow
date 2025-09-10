/**
 * Context Node Definition
 * Extracts and returns workflow context information
 */

import { getPlatformDependencies, type EnhancedNodeDefinition } from "@gravityai-dev/plugin-base";
import { ContextExecutor } from "./executor";

// Export node type constant
export const NODE_TYPE = "Context";

// Export a function that creates the definition after platform deps are set
export function createNodeDefinition(): EnhancedNodeDefinition {
  const { NodeInputType } = getPlatformDependencies();

  return {
    type: NODE_TYPE,
    isService: false,
    name: "Context",
    description: "Extract workflow context (userId, conversationId, chatId, etc.)",
    category: "Flow",
    color: "#f59e0b", // Amber color for code/logic
    logoUrl: "https://res.cloudinary.com/sonik/image/upload/v1750052178/gravity/icons/6359572-200.png",
    inputs: [
      {
        name: "signal",
        type: NodeInputType.ANY,
      },
    ],
    outputs: [{ name: "context", type: NodeInputType.OBJECT }],
    // Declare capabilities
    capabilities: {
      isTrigger: false,
    },
  };
}

// Export as enhanced node
export const ContextNode = {
  definition: createNodeDefinition(),
  executor: ContextExecutor,
};

// Export for node registry
export const definition = createNodeDefinition();
