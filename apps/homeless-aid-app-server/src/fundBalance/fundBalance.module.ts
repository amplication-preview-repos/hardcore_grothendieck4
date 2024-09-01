import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FundBalanceModuleBase } from "./base/fundBalance.module.base";
import { FundBalanceService } from "./fundBalance.service";
import { FundBalanceController } from "./fundBalance.controller";
import { FundBalanceResolver } from "./fundBalance.resolver";

@Module({
  imports: [FundBalanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [FundBalanceController],
  providers: [FundBalanceService, FundBalanceResolver],
  exports: [FundBalanceService],
})
export class FundBalanceModule {}
