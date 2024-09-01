import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PublicUserServiceBase } from "./base/publicUser.service.base";

@Injectable()
export class PublicUserService extends PublicUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
