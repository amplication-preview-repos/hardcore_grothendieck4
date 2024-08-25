import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExerciseCountService } from "./exerciseCount.service";
import { ExerciseCountControllerBase } from "./base/exerciseCount.controller.base";

@swagger.ApiTags("exerciseCounts")
@common.Controller("exerciseCounts")
export class ExerciseCountController extends ExerciseCountControllerBase {
  constructor(
    protected readonly service: ExerciseCountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
