/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Legislature as PrismaLegislature } from "@prisma/client";

export class LegislatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LegislatureCountArgs, "select">
  ): Promise<number> {
    return this.prisma.legislature.count(args);
  }

  async legislatures(
    args: Prisma.LegislatureFindManyArgs
  ): Promise<PrismaLegislature[]> {
    return this.prisma.legislature.findMany(args);
  }
  async legislature(
    args: Prisma.LegislatureFindUniqueArgs
  ): Promise<PrismaLegislature | null> {
    return this.prisma.legislature.findUnique(args);
  }
  async createLegislature(
    args: Prisma.LegislatureCreateArgs
  ): Promise<PrismaLegislature> {
    return this.prisma.legislature.create(args);
  }
  async updateLegislature(
    args: Prisma.LegislatureUpdateArgs
  ): Promise<PrismaLegislature> {
    return this.prisma.legislature.update(args);
  }
  async deleteLegislature(
    args: Prisma.LegislatureDeleteArgs
  ): Promise<PrismaLegislature> {
    return this.prisma.legislature.delete(args);
  }
}
