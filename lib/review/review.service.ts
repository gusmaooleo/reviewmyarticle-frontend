import { environments } from "@/environments/environments";
import { apiFetch } from "../api";

export class ReviewService {
  constructor() {}

  async getReviewsByUser(userId: number) {
    try {
      return await apiFetch(`${environments.url}/reviews?userId=${userId}`);
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}