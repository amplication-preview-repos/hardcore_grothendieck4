import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FundModuleBase } from "./base/fund.module.base";
import { FundService } from "./fund.service";
import { FundController } from "./fund.controller";
import { FundResolver } from "./fund.resolver";

@Module({
  imports: [FundModuleBase, forwardRef(() => AuthModule)],
  controllers: [FundController],
  providers: [FundService, FundResolver],
  exports: [FundService],
})
export class FundModule {}
