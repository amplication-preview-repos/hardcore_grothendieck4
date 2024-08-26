import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LegislatureServiceBase } from "./base/legislature.service.base";

@Injectable()
export class LegislatureService extends LegislatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
