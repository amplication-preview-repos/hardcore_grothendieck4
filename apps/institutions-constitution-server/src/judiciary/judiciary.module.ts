import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JudiciaryModuleBase } from "./base/judiciary.module.base";
import { JudiciaryService } from "./judiciary.service";
import { JudiciaryController } from "./judiciary.controller";
import { JudiciaryResolver } from "./judiciary.resolver";

@Module({
  imports: [JudiciaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [JudiciaryController],
  providers: [JudiciaryService, JudiciaryResolver],
  exports: [JudiciaryService],
})
export class JudiciaryModule {}
