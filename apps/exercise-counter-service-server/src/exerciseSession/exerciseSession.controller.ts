import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExerciseSessionService } from "./exerciseSession.service";
import { ExerciseSessionControllerBase } from "./base/exerciseSession.controller.base";

@swagger.ApiTags("exerciseSessions")
@common.Controller("exerciseSessions")
export class ExerciseSessionController extends ExerciseSessionControllerBase {
  constructor(
    protected readonly service: ExerciseSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
