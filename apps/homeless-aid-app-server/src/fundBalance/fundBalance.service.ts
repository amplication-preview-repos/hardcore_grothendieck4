import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundBalanceServiceBase } from "./base/fundBalance.service.base";

@Injectable()
export class FundBalanceService extends FundBalanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
