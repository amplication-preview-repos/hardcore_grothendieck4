import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HomelessIndividualResolverBase } from "./base/homelessIndividual.resolver.base";
import { HomelessIndividual } from "./base/HomelessIndividual";
import { HomelessIndividualService } from "./homelessIndividual.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HomelessIndividual)
export class HomelessIndividualResolver extends HomelessIndividualResolverBase {
  constructor(
    protected readonly service: HomelessIndividualService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
