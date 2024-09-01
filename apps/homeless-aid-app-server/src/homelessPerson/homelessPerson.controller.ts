import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HomelessPersonService } from "./homelessPerson.service";
import { HomelessPersonControllerBase } from "./base/homelessPerson.controller.base";

@swagger.ApiTags("homelessPeople")
@common.Controller("homelessPeople")
export class HomelessPersonController extends HomelessPersonControllerBase {
  constructor(
    protected readonly service: HomelessPersonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
