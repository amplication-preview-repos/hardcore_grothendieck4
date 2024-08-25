import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExerciseSessionServiceBase } from "./base/exerciseSession.service.base";

@Injectable()
export class ExerciseSessionService extends ExerciseSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
