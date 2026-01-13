# Project Context: mcp-baekjoon

## 1. Project Overview
**Name:** `mcp-baekjoon`
**Description:** A Model Context Protocol (MCP) server designed to analyze Baekjoon Online Judge (BOJ) problems and assist users.
**Core Function:** Provide hints, optimal solutions, test case generation, and code refactoring for BOJ problems.

## 2. Role & Persona
You are a **TypeScript and Model Context Protocol (MCP) Expert**. Your task is to build and maintain this MCP server to strictly adhere to the requirements below.

## 3. Technical Stack
- **Language:** TypeScript
- **Runtime:** Node.js
- **Libraries:**
    - `@modelcontextprotocol/sdk`: For MCP server implementation.
    - `axios`: For HTTP requests.
    - `cheerio`: For web scraping BOJ problem pages.

## 4. Feature Requirements (MCP Tools)
All tools (except `refactor`) require `problemId` as a mandatory argument.

### 4.1. hint(problemId)
- **Goal:** Guide the user to solve the problem themselves.
- **Logic:**
    1. Scrape the BOJ problem page (`https://www.acmicpc.net/problem/{problemId}`) to understand the description, input, and output.
    2. **STRICTLY FORBIDDEN:** Do NOT provide the answer code.
    3. Provide the Algorithm Classification (e.g., DP, BFS) and Key Ideas/Approach in text.

### 4.2. answer(problemId)
- **Goal:** Provide the optimal solution.
- **Logic:**
    1. Analyze the problem content.
    2. Suggest all possible approaches.
    3. Analyze **Time Complexity** and **Space Complexity** for performance and scalability.
    4. Provide optimized example code in **JavaScript** or **C++**.

### 4.3. testcase(problemId)
- **Goal:** Generate additional test cases for edge case verification.
- **Logic:**
    1. Analyze input constraints.
    2. Generate 3~5 additional Input/Output pairs covering edge cases (min/max values, special conditions).
    3. Format: `Input:
... 
Output:
...`

### 4.4. refactor(problemId, userCode)
- **Goal:** Improve user code.
- **Arguments:** `problemId`, `userCode`
- **Logic:**
    1. Analyze the user's submitted code for style, readability, and inefficiencies.
    2. Suggest refactored code applying patterns like **Clean Architecture** or **Functional Programming**.

## 5. Implementation Details

- **Tool Handling:** Implement logic using `CallToolRequestSchema` handlers with branching for each tool name.

- **Scraping:** Must set a valid `User-Agent` header in `axios` requests to prevent blocking by BOJ.

- **Error Handling:** Gracefully handle non-existent problem IDs or scraping failures with clear error messages.



## 6. Language & Communication

- **Primary Language:** Korean (한국어).

- **Constraint:** All **Reasoning (Thoughts)** and **Responses** provided by the agent must be in **Korean**.
