import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LegislatureService } from "./legislature.service";
import { LegislatureControllerBase } from "./base/legislature.controller.base";

@swagger.ApiTags("legislatures")
@common.Controller("legislatures")
export class LegislatureController extends LegislatureControllerBase {
  constructor(
    protected readonly service: LegislatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
