import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FundBalanceResolverBase } from "./base/fundBalance.resolver.base";
import { FundBalance } from "./base/FundBalance";
import { FundBalanceService } from "./fundBalance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FundBalance)
export class FundBalanceResolver extends FundBalanceResolverBase {
  constructor(
    protected readonly service: FundBalanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
