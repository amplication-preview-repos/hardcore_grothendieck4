import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExerciseSessionResolverBase } from "./base/exerciseSession.resolver.base";
import { ExerciseSession } from "./base/ExerciseSession";
import { ExerciseSessionService } from "./exerciseSession.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExerciseSession)
export class ExerciseSessionResolver extends ExerciseSessionResolverBase {
  constructor(
    protected readonly service: ExerciseSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
