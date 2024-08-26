/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { JudiciaryService } from "../judiciary.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { JudiciaryCreateInput } from "./JudiciaryCreateInput";
import { Judiciary } from "./Judiciary";
import { JudiciaryFindManyArgs } from "./JudiciaryFindManyArgs";
import { JudiciaryWhereUniqueInput } from "./JudiciaryWhereUniqueInput";
import { JudiciaryUpdateInput } from "./JudiciaryUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class JudiciaryControllerBase {
  constructor(
    protected readonly service: JudiciaryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Judiciary })
  @nestAccessControl.UseRoles({
    resource: "Judiciary",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createJudiciary(
    @common.Body() data: JudiciaryCreateInput
  ): Promise<Judiciary> {
    return await this.service.createJudiciary({
      data: data,
      select: {
        appointmentDate: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Judiciary] })
  @ApiNestedQuery(JudiciaryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Judiciary",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async judiciaries(@common.Req() request: Request): Promise<Judiciary[]> {
    const args = plainToClass(JudiciaryFindManyArgs, request.query);
    return this.service.judiciaries({
      ...args,
      select: {
        appointmentDate: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Judiciary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Judiciary",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async judiciary(
    @common.Param() params: JudiciaryWhereUniqueInput
  ): Promise<Judiciary | null> {
    const result = await this.service.judiciary({
      where: params,
      select: {
        appointmentDate: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Judiciary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Judiciary",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateJudiciary(
    @common.Param() params: JudiciaryWhereUniqueInput,
    @common.Body() data: JudiciaryUpdateInput
  ): Promise<Judiciary | null> {
    try {
      return await this.service.updateJudiciary({
        where: params,
        data: data,
        select: {
          appointmentDate: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Judiciary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Judiciary",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteJudiciary(
    @common.Param() params: JudiciaryWhereUniqueInput
  ): Promise<Judiciary | null> {
    try {
      return await this.service.deleteJudiciary({
        where: params,
        select: {
          appointmentDate: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
