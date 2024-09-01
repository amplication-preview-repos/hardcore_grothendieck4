import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PublicUserModuleBase } from "./base/publicUser.module.base";
import { PublicUserService } from "./publicUser.service";
import { PublicUserController } from "./publicUser.controller";
import { PublicUserResolver } from "./publicUser.resolver";

@Module({
  imports: [PublicUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [PublicUserController],
  providers: [PublicUserService, PublicUserResolver],
  exports: [PublicUserService],
})
export class PublicUserModule {}
