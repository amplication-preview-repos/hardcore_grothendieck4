import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { JudiciaryResolverBase } from "./base/judiciary.resolver.base";
import { Judiciary } from "./base/Judiciary";
import { JudiciaryService } from "./judiciary.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Judiciary)
export class JudiciaryResolver extends JudiciaryResolverBase {
  constructor(
    protected readonly service: JudiciaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
