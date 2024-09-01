/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  HomelessIndividual as PrismaHomelessIndividual,
} from "@prisma/client";

export class HomelessIndividualServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.HomelessIndividualCountArgs, "select">
  ): Promise<number> {
    return this.prisma.homelessIndividual.count(args);
  }

  async homelessIndividuals(
    args: Prisma.HomelessIndividualFindManyArgs
  ): Promise<PrismaHomelessIndividual[]> {
    return this.prisma.homelessIndividual.findMany(args);
  }
  async homelessIndividual(
    args: Prisma.HomelessIndividualFindUniqueArgs
  ): Promise<PrismaHomelessIndividual | null> {
    return this.prisma.homelessIndividual.findUnique(args);
  }
  async createHomelessIndividual(
    args: Prisma.HomelessIndividualCreateArgs
  ): Promise<PrismaHomelessIndividual> {
    return this.prisma.homelessIndividual.create(args);
  }
  async updateHomelessIndividual(
    args: Prisma.HomelessIndividualUpdateArgs
  ): Promise<PrismaHomelessIndividual> {
    return this.prisma.homelessIndividual.update(args);
  }
  async deleteHomelessIndividual(
    args: Prisma.HomelessIndividualDeleteArgs
  ): Promise<PrismaHomelessIndividual> {
    return this.prisma.homelessIndividual.delete(args);
  }
}
