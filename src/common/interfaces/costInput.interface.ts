import { DDDEnum } from "../enums/DDD.enum";
import { PlanEnum } from "../enums/plan.enum";

export interface CostInput {
    plan: PlanEnum,
    from: DDDEnum,
    to: DDDEnum,
    minutes: number,
}