import { AnalyticsUrlClicksRepository } from "@/repositories/AnalyticsUrlClicksRepository";

export abstract class AnalyticsUrlClicksService {
  static async registerNewClick(shortCode: string): Promise<void> {
    await AnalyticsUrlClicksRepository.registerNewClick(shortCode);
  }
}
