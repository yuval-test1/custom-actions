/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class AuthorCreateInput {
  @ApiProperty({
    required: false,
    type: () => PostCreateNestedManyWithoutAuthorsInput,
  })
  @ValidateNested()
  @Type(() => PostCreateNestedManyWithoutAuthorsInput)
  @IsOptional()
  @Field(() => PostCreateNestedManyWithoutAuthorsInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutAuthorsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { AuthorCreateInput as AuthorCreateInput };
