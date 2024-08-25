import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExerciseCountResolverBase } from "./base/exerciseCount.resolver.base";
import { ExerciseCount } from "./base/ExerciseCount";
import { ExerciseCountService } from "./exerciseCount.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExerciseCount)
export class ExerciseCountResolver extends ExerciseCountResolverBase {
  constructor(
    protected readonly service: ExerciseCountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
