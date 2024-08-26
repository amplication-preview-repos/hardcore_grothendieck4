import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExecutiveModuleBase } from "./base/executive.module.base";
import { ExecutiveService } from "./executive.service";
import { ExecutiveController } from "./executive.controller";
import { ExecutiveResolver } from "./executive.resolver";

@Module({
  imports: [ExecutiveModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExecutiveController],
  providers: [ExecutiveService, ExecutiveResolver],
  exports: [ExecutiveService],
})
export class ExecutiveModule {}
