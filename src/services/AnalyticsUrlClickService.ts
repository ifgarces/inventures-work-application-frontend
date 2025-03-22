import { AnalyticsUrlClickRepository } from "@/repositories/AnalyticsUrlClickRepository";

export abstract class AnalyticsUrlClickService {
  static async registerNewClick(shortCode: string): Promise<void> {
    await AnalyticsUrlClickRepository.registerNewClick(shortCode);
  }
}
