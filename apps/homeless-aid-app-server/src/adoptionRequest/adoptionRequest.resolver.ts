import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdoptionRequestResolverBase } from "./base/adoptionRequest.resolver.base";
import { AdoptionRequest } from "./base/AdoptionRequest";
import { AdoptionRequestService } from "./adoptionRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdoptionRequest)
export class AdoptionRequestResolver extends AdoptionRequestResolverBase {
  constructor(
    protected readonly service: AdoptionRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
