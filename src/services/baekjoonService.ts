import axios from "axios";
import * as cheerio from "cheerio";
import { ProblemData } from "../types/index.js";

export class BaekjoonService {
  private static readonly BASE_URL = "https://www.acmicpc.net/problem";
  private static readonly USER_AGENT =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

  /**
   * 백준 문제 정보를 가져옵니다.
   * @param problemId 문제 번호
   */
  static async fetchProblem(problemId: string | number): Promise<ProblemData> {
    const url = `${this.BASE_URL}/${problemId}`;
    
    try {
      const response = await axios.get(url, {
        headers: {
          "User-Agent": this.USER_AGENT,
        },
      });

      const $ = cheerio.load(response.data);

      const title = $("#problem_title").text().trim();
      const description = $("#problem_description").text().trim();
      const inputCondition = $("#problem_input").text().trim();
      const outputCondition = $("#problem_output").text().trim();
      
      const algorithmParams: string[] = [];
      $(".spoiler-list li a").each((_, el) => {
          algorithmParams.push($(el).text().trim());
      });

      if (!title) {
        throw new Error("페이지를 읽었으나 문제 제목을 찾을 수 없습니다. (접근 차단 또는 변경된 레이아웃)");
      }

      return {
        title,
        description,
        inputCondition,
        outputCondition,
        algorithmParams,
        url,
      };
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new Error(`문제 번호 ${problemId}를 찾을 수 없습니다.`);
        }
      }
      throw new Error(`문제 정보를 가져오는 중 오류가 발생했습니다: ${error.message}`);
    }
  }
}
