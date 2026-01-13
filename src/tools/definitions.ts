import { Tool } from "@modelcontextprotocol/sdk/types.js";

const ProblemIdSchema = {
    anyOf: [{ type: "string" }, { type: "integer" }],
    description: "백준 문제 번호"
};

export const TOOL_DEFINITIONS: Tool[] = [
    {
        name: "hint",
        description: "백준 문제 ID를 받아 문제의 핵심 아이디어와 알고리즘 분류 힌트를 제공합니다. 정답 코드는 제공하지 않습니다.",
        inputSchema: {
            type: "object",
            properties: {
                problemId: ProblemIdSchema
            },
            required: ["problemId"]
        },
    },
    {
        name: "answer",
        description: "백준 문제 ID를 받아 문제 분석, 복잡도 계산, 그리고 C++ 및 JavaScript로 작성된 최적의 정답 코드를 제공합니다.",
        inputSchema: {
            type: "object",
            properties: {
                problemId: ProblemIdSchema
            },
            required: ["problemId"]
        },
    },
    {
        name: "testcase",
        description: "백준 문제 ID를 받아 기본 예제 외에 엣지 케이스를 포함한 추가 테스트 케이스 3~5개를 생성합니다.",
        inputSchema: {
            type: "object",
            properties: {
                problemId: ProblemIdSchema
            },
            required: ["problemId"]
        },
    },
    {
        name: "refactor",
        description: "백준 문제 ID와 사용자 코드를 받아, 코드 스타일, 가독성, 효율성을 분석하고 개선된 리팩토링 코드를 제안합니다.",
        inputSchema: {
            type: "object",
            properties: {
                problemId: ProblemIdSchema,
                userCode: {
                    type: "string",
                    description: "사용자가 작성한 코드"
                }
            },
            required: ["problemId", "userCode"]
        },
    }
];