import { CallToolRequest } from "@modelcontextprotocol/sdk/types.js";
import { BaekjoonService } from "../services/baekjoonService.js";
import { PromptTemplates } from "../templates/prompts.js";
import { ToolName } from "../types/index.js";

export async function handleToolCall(request: CallToolRequest) {
    const { name, arguments: args } = request.params;

    if (!args) {
        throw new Error("인자가 누락되었습니다.");
    }

    const problemId = args.problemId;
    if (!problemId) {
        throw new Error("problemId는 필수입니다.");
    }

    try {
        const problemData = await BaekjoonService.fetchProblem(problemId as string | number);
        let contentText = "";

        switch (name as ToolName) {
            case "hint":
                contentText = PromptTemplates.hint(problemData);
                break;
            case "answer":
                contentText = PromptTemplates.answer(problemData);
                break;
            case "testcase":
                contentText = PromptTemplates.testcase(problemData);
                break;
            case "refactor":
                const userCode = args.userCode;
                if (typeof userCode !== 'string') {
                    throw new Error("refactor 도구는 userCode 문자열 인자가 필요합니다.");
                }
                contentText = PromptTemplates.refactor(problemData, userCode);
                break;
            default:
                throw new Error(`알 수 없는 도구입니다: ${name}`);
        }

        return {
            content: [{ type: "text", text: contentText }],
        };

    } catch (error: any) {
        return {
            content: [{ type: "text", text: `오류 발생: ${error.message}` }],
            isError: true,
        };
    }
}
