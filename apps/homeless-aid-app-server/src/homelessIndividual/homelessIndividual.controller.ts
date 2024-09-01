import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HomelessIndividualService } from "./homelessIndividual.service";
import { HomelessIndividualControllerBase } from "./base/homelessIndividual.controller.base";

@swagger.ApiTags("homelessIndividuals")
@common.Controller("homelessIndividuals")
export class HomelessIndividualController extends HomelessIndividualControllerBase {
  constructor(
    protected readonly service: HomelessIndividualService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
