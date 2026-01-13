export interface ProblemData {
    title: string;
    description: string;
    inputCondition: string;
    outputCondition: string;
    algorithmParams: string[];
    url: string;
}

export type ToolName = "hint" | "answer" | "testcase" | "refactor";
