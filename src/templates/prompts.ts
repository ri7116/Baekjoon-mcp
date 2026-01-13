import { ProblemData } from "../types/index.js";

function formatProblemContext(data: ProblemData): string {
    return `
[문제 정보]
제목: ${data.title}
URL: ${data.url}
설명: ${data.description}
입력 조건: ${data.inputCondition}
출력 조건: ${data.outputCondition}
알고리즘 분류: ${data.algorithmParams.join(", ") || "정보 없음"}
`;
}

export const PromptTemplates = {
    hint: (data: ProblemData) => `${formatProblemContext(data)}

[요청 사항]
위 문제 정보를 바탕으로 사용자에게 '힌트'를 제공해주세요.
1. 절대 정답 코드를 제공하지 마세요.
2. 알고리즘 분류와 핵심 아이디어만 설명하세요.
3. 사용자가 스스로 풀 수 있도록 가이드해주세요.
4. 모든 답변은 한국어로 해주세요.`,

    answer: (data: ProblemData) => `${formatProblemContext(data)}

[요청 사항]
위 문제 정보를 바탕으로 '최적의 솔루션'을 제공해주세요.
1. 문제 접근 방법을 분석하고 제시하세요.
2. 시간 복잡도와 공간 복잡도를 분석하세요.
3. JavaScript와 C++ 두 가지 언어로 최적화된 예제 코드를 작성해주세요.
4. 각 코드에 대한 주석과 설명을 포함해주세요.
5. 모든 답변은 한국어로 해주세요.`,

    testcase: (data: ProblemData) => `${formatProblemContext(data)}

[요청 사항]
위 문제의 입력 제약 조건을 분석하여 '추가 테스트 케이스'를 생성해주세요.
1. 기본 예제 외에 엣지 케이스(최소값, 최대값, 특수 조건 등)를 포함한 3~5개의 입출력 쌍을 만드세요.
2. 형식:
Input:
...
Output:
...
3. 각 케이스가 테스트하는 엣지 상황에 대한 설명을 덧붙여주세요.`,

    refactor: (data: ProblemData, userCode: string) => `${formatProblemContext(data)}

[사용자 코드]
\`\`\`
${userCode}
\`\`\`

[요청 사항]
위 문제와 사용자의 코드를 분석하여 '리팩토링'을 수행해주세요.
1. 스타일, 가독성, 비효율적인 로직을 지적하세요.
2. Clean Architecture나 함수형 프로그래밍 원칙 등을 적용하여 코드를 개선하세요.
3. 개선된 코드를 제시하고 변경 이유를 설명해주세요.
4. 모든 답변은 한국어로 해주세요.`
};
