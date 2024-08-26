import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JudiciaryServiceBase } from "./base/judiciary.service.base";

@Injectable()
export class JudiciaryService extends JudiciaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
