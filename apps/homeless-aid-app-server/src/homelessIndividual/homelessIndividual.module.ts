import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HomelessIndividualModuleBase } from "./base/homelessIndividual.module.base";
import { HomelessIndividualService } from "./homelessIndividual.service";
import { HomelessIndividualController } from "./homelessIndividual.controller";
import { HomelessIndividualResolver } from "./homelessIndividual.resolver";

@Module({
  imports: [HomelessIndividualModuleBase, forwardRef(() => AuthModule)],
  controllers: [HomelessIndividualController],
  providers: [HomelessIndividualService, HomelessIndividualResolver],
  exports: [HomelessIndividualService],
})
export class HomelessIndividualModule {}
