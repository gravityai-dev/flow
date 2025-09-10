/**
 * Hash utilities for Code node
 */

import { createHash } from "crypto";

/**
 * Creates a content hash from input data
 * @param input - The input data to hash
 * @returns Short hash (12 characters) representing the content
 */
export function createContentHash(input: any): string {
  // Convert input to string for hashing
  const inputString = typeof input === "string" ? input : JSON.stringify(input, Object.keys(input).sort());

  // Create hash and return short version (similar to git short hash)
  const fullHash = createHash("sha256").update(inputString).digest("hex");
  return fullHash.substring(0, 12);
}

/**
 * Creates a universal ID hash from workflow ID and node ID
 * @param workflowId - The workflow ID
 * @param nodeId - The node ID
 * @returns Universal ID hash (12 characters)
 */
export function createUniversalId(workflowId: string, nodeId: string): string {
  // Combine workflow ID and node ID for the hash input
  const idString = `${workflowId}-${nodeId}`;

  // Create hash and return short version
  const fullHash = createHash("sha256").update(idString).digest("hex");
  return fullHash.substring(0, 12);
}
