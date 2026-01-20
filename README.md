# Beakjoon MCP Server (beakjoon-mcp)

백준 온라인 저지(BOJ) 문제를 분석하고 사용자에게 힌트, 정답 코드, 테스트 케이스 등을 제공하는 Model Context Protocol (MCP) 서버입니다.

[![ko-badge](https://img.shields.io/badge/Lang-Korean-blue.svg)](https://github.com/ri7116/beakjoon-mcp)

## 사용 가능한 도구 (Available Tools)

| 도구 이름 (Tool Name) | 설명 (Description) | 파라미터 (Parameters) |
| :--- | :--- | :--- |
| `hint` | 문제의 핵심 아이디어와 알고리즘 분류 힌트를 제공합니다. | `problemId` (string \| number): 백준 문제 번호 |
| `answer` | 문제 분석, 복잡도 계산, 최적 정답 코드를 제공합니다. | `problemId` (string \| number): 백준 문제 번호 |
| `testcase` | 엣지 케이스를 포함한 추가 테스트 케이스를 생성합니다. | `problemId` (string \| number): 백준 문제 번호 |
| `refactor` | 사용자 코드를 분석하여 개선된 코드를 제안합니다. | `problemId` (string \| number): 백준 문제 번호<br>`userCode` (string): 사용자가 작성한 코드 |

## MCP 클라이언트 설정 (e.g., Claude Desktop)

Claude Desktop과 같은 MCP 클라이언트에서 이 서버를 사용하려면, 클라이언트의 설정 파일에 아래와 같이 서버 정보를 추가해야 합니다.

**`mcp_servers` 설정 예시:**
```json
{
  "mcpServers": {
    "beakjoon-mcp": {
      "command": "node",
      "args": [
        "C:/Users/your-user/path/to/beakjoon-mcp/dist/index.js"
      ],
      "options": {
        "cwd": "C:/Users/your-user/path/to/beakjoon-mcp"
      }
    }
  }
}
```
> **주의**: `args`와 `cwd`의 경로는 실제 프로젝트가 위치한 절대 경로로 수정해주세요.
