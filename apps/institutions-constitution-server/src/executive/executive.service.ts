import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExecutiveServiceBase } from "./base/executive.service.base";

@Injectable()
export class ExecutiveService extends ExecutiveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
