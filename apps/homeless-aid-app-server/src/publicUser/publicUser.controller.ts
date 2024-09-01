import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PublicUserService } from "./publicUser.service";
import { PublicUserControllerBase } from "./base/publicUser.controller.base";

@swagger.ApiTags("publicUsers")
@common.Controller("publicUsers")
export class PublicUserController extends PublicUserControllerBase {
  constructor(
    protected readonly service: PublicUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
