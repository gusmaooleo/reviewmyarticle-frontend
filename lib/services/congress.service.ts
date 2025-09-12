import "server-only";

import { ICongress } from "@/types/congress";
import { fakeCongresses } from "../fake/fakeCongresses";

export class CongressService {

  async getCongresses(query: string = "", skip?: number): Promise<ICongress[]> {
    try {
      const limit = (skip ?? 0) + 6;
      if (limit > fakeCongresses.length) return [];
      return fakeCongresses.filter((q) => q.name.toLowerCase().includes(query)).slice(skip, limit);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getCongressById(id: number): Promise<ICongress | null> {
    try {
      return fakeCongresses.filter((c) => c.id === id)[0];
    } catch (error) {
      console.error(error);
      return null
    }
  }
}