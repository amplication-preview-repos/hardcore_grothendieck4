/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Executive as PrismaExecutive } from "@prisma/client";

export class ExecutiveServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ExecutiveCountArgs, "select">
  ): Promise<number> {
    return this.prisma.executive.count(args);
  }

  async executives(
    args: Prisma.ExecutiveFindManyArgs
  ): Promise<PrismaExecutive[]> {
    return this.prisma.executive.findMany(args);
  }
  async executive(
    args: Prisma.ExecutiveFindUniqueArgs
  ): Promise<PrismaExecutive | null> {
    return this.prisma.executive.findUnique(args);
  }
  async createExecutive(
    args: Prisma.ExecutiveCreateArgs
  ): Promise<PrismaExecutive> {
    return this.prisma.executive.create(args);
  }
  async updateExecutive(
    args: Prisma.ExecutiveUpdateArgs
  ): Promise<PrismaExecutive> {
    return this.prisma.executive.update(args);
  }
  async deleteExecutive(
    args: Prisma.ExecutiveDeleteArgs
  ): Promise<PrismaExecutive> {
    return this.prisma.executive.delete(args);
  }
}
