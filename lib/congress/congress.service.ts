import "server-only";

import { ICongress } from "@/types/congress";
import { fakeCongresses } from "./fakeCongresses";

export type CongressesPayload = {
  total: number;
  data: ICongress[];
};

export class CongressService {
  async getCongresses(
    query: string = "",
    page: number = 1
  ): Promise<CongressesPayload> {
    try {
      const skip = (page - 1) * 15;
      const limit = page * 15;
      const data = fakeCongresses
        .filter((q) => q.name.toLowerCase().includes(query))
        .slice(skip, limit);
      return { total: query ? data.length : fakeCongresses.length, data };
    } catch (error) {
      console.error(error);
      return { total: 0, data: [] };
    }
  }

  async getCongressById(id: number): Promise<ICongress | null> {
    try {
      return fakeCongresses.filter((c) => c.id === id)[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
