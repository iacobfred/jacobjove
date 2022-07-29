import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordWhereInput } from "../../../inputs/MetricRecordWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetricRecordArgs {
  @TypeGraphQL.Field((_type) => MetricRecordWhereInput, { nullable: true })
  where?: MetricRecordWhereInput | undefined;
}
