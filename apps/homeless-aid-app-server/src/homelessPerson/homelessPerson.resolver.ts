import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HomelessPersonResolverBase } from "./base/homelessPerson.resolver.base";
import { HomelessPerson } from "./base/HomelessPerson";
import { HomelessPersonService } from "./homelessPerson.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HomelessPerson)
export class HomelessPersonResolver extends HomelessPersonResolverBase {
  constructor(
    protected readonly service: HomelessPersonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
