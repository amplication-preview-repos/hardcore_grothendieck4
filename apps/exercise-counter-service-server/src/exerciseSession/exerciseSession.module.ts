import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExerciseSessionModuleBase } from "./base/exerciseSession.module.base";
import { ExerciseSessionService } from "./exerciseSession.service";
import { ExerciseSessionController } from "./exerciseSession.controller";
import { ExerciseSessionResolver } from "./exerciseSession.resolver";

@Module({
  imports: [ExerciseSessionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExerciseSessionController],
  providers: [ExerciseSessionService, ExerciseSessionResolver],
  exports: [ExerciseSessionService],
})
export class ExerciseSessionModule {}
