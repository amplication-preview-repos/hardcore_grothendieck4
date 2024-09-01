import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DonationService } from "./donation.service";
import { DonationControllerBase } from "./base/donation.controller.base";

@swagger.ApiTags("donations")
@common.Controller("donations")
export class DonationController extends DonationControllerBase {
  constructor(
    protected readonly service: DonationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
