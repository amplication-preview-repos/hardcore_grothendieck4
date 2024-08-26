import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LegislatureModuleBase } from "./base/legislature.module.base";
import { LegislatureService } from "./legislature.service";
import { LegislatureController } from "./legislature.controller";
import { LegislatureResolver } from "./legislature.resolver";

@Module({
  imports: [LegislatureModuleBase, forwardRef(() => AuthModule)],
  controllers: [LegislatureController],
  providers: [LegislatureService, LegislatureResolver],
  exports: [LegislatureService],
})
export class LegislatureModule {}
