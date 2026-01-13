#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { TOOL_DEFINITIONS } from "./tools/definitions.js";
import { handleToolCall } from "./tools/handlers.js";

// 서버 설정
const server = new Server(
  {
    name: "mcp-baekjoon",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// 도구 목록 핸들러
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: TOOL_DEFINITIONS,
  };
});

// 도구 실행 핸들러
server.setRequestHandler(CallToolRequestSchema, handleToolCall);

// 서버 실행
async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Baekjoon MCP Server running on stdio");
}

run().catch((error) => {
  console.error("Fatal error running server:", error);
  process.exit(1);
});