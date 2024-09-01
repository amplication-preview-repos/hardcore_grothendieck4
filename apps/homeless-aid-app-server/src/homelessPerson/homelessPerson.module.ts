import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HomelessPersonModuleBase } from "./base/homelessPerson.module.base";
import { HomelessPersonService } from "./homelessPerson.service";
import { HomelessPersonController } from "./homelessPerson.controller";
import { HomelessPersonResolver } from "./homelessPerson.resolver";

@Module({
  imports: [HomelessPersonModuleBase, forwardRef(() => AuthModule)],
  controllers: [HomelessPersonController],
  providers: [HomelessPersonService, HomelessPersonResolver],
  exports: [HomelessPersonService],
})
export class HomelessPersonModule {}
