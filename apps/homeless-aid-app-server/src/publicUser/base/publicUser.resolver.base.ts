/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PublicUser } from "./PublicUser";
import { PublicUserCountArgs } from "./PublicUserCountArgs";
import { PublicUserFindManyArgs } from "./PublicUserFindManyArgs";
import { PublicUserFindUniqueArgs } from "./PublicUserFindUniqueArgs";
import { DeletePublicUserArgs } from "./DeletePublicUserArgs";
import { PublicUserService } from "../publicUser.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PublicUser)
export class PublicUserResolverBase {
  constructor(
    protected readonly service: PublicUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PublicUser",
    action: "read",
    possession: "any",
  })
  async _publicUsersMeta(
    @graphql.Args() args: PublicUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PublicUser])
  @nestAccessControl.UseRoles({
    resource: "PublicUser",
    action: "read",
    possession: "any",
  })
  async publicUsers(
    @graphql.Args() args: PublicUserFindManyArgs
  ): Promise<PublicUser[]> {
    return this.service.publicUsers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PublicUser, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PublicUser",
    action: "read",
    possession: "own",
  })
  async publicUser(
    @graphql.Args() args: PublicUserFindUniqueArgs
  ): Promise<PublicUser | null> {
    const result = await this.service.publicUser(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PublicUser)
  @nestAccessControl.UseRoles({
    resource: "PublicUser",
    action: "delete",
    possession: "any",
  })
  async deletePublicUser(
    @graphql.Args() args: DeletePublicUserArgs
  ): Promise<PublicUser | null> {
    try {
      return await this.service.deletePublicUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
