import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdoptionRequestModuleBase } from "./base/adoptionRequest.module.base";
import { AdoptionRequestService } from "./adoptionRequest.service";
import { AdoptionRequestController } from "./adoptionRequest.controller";
import { AdoptionRequestResolver } from "./adoptionRequest.resolver";

@Module({
  imports: [AdoptionRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdoptionRequestController],
  providers: [AdoptionRequestService, AdoptionRequestResolver],
  exports: [AdoptionRequestService],
})
export class AdoptionRequestModule {}
