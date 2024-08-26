import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JudiciaryService } from "./judiciary.service";
import { JudiciaryControllerBase } from "./base/judiciary.controller.base";

@swagger.ApiTags("judiciaries")
@common.Controller("judiciaries")
export class JudiciaryController extends JudiciaryControllerBase {
  constructor(
    protected readonly service: JudiciaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
