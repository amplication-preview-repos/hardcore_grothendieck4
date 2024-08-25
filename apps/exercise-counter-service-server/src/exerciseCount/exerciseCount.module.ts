import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExerciseCountModuleBase } from "./base/exerciseCount.module.base";
import { ExerciseCountService } from "./exerciseCount.service";
import { ExerciseCountController } from "./exerciseCount.controller";
import { ExerciseCountResolver } from "./exerciseCount.resolver";

@Module({
  imports: [ExerciseCountModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExerciseCountController],
  providers: [ExerciseCountService, ExerciseCountResolver],
  exports: [ExerciseCountService],
})
export class ExerciseCountModule {}
