import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DonationModuleBase } from "./base/donation.module.base";
import { DonationService } from "./donation.service";
import { DonationController } from "./donation.controller";
import { DonationResolver } from "./donation.resolver";

@Module({
  imports: [DonationModuleBase, forwardRef(() => AuthModule)],
  controllers: [DonationController],
  providers: [DonationService, DonationResolver],
  exports: [DonationService],
})
export class DonationModule {}
