import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FundBalanceService } from "./fundBalance.service";
import { FundBalanceControllerBase } from "./base/fundBalance.controller.base";

@swagger.ApiTags("fundBalances")
@common.Controller("fundBalances")
export class FundBalanceController extends FundBalanceControllerBase {
  constructor(
    protected readonly service: FundBalanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
