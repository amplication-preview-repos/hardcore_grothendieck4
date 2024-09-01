import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HomelessIndividualServiceBase } from "./base/homelessIndividual.service.base";

@Injectable()
export class HomelessIndividualService extends HomelessIndividualServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
