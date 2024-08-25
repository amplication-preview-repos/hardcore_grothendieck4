import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExerciseCountServiceBase } from "./base/exerciseCount.service.base";

@Injectable()
export class ExerciseCountService extends ExerciseCountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
