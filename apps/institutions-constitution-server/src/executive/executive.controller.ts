import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExecutiveService } from "./executive.service";
import { ExecutiveControllerBase } from "./base/executive.controller.base";

@swagger.ApiTags("executives")
@common.Controller("executives")
export class ExecutiveController extends ExecutiveControllerBase {
  constructor(
    protected readonly service: ExecutiveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
