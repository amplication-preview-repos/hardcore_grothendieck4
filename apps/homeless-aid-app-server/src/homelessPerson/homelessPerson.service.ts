import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HomelessPersonServiceBase } from "./base/homelessPerson.service.base";

@Injectable()
export class HomelessPersonService extends HomelessPersonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
