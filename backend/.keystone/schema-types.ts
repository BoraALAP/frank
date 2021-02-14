type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type RoleRelateToOneInput = {
  readonly create?: RoleCreateInput | null;
  readonly connect?: RoleWhereUniqueInput | null;
  readonly disconnect?: RoleWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly companyName?: Scalars['String'] | null;
  readonly companyName_not?: Scalars['String'] | null;
  readonly companyName_contains?: Scalars['String'] | null;
  readonly companyName_not_contains?: Scalars['String'] | null;
  readonly companyName_starts_with?: Scalars['String'] | null;
  readonly companyName_not_starts_with?: Scalars['String'] | null;
  readonly companyName_ends_with?: Scalars['String'] | null;
  readonly companyName_not_ends_with?: Scalars['String'] | null;
  readonly companyName_i?: Scalars['String'] | null;
  readonly companyName_not_i?: Scalars['String'] | null;
  readonly companyName_contains_i?: Scalars['String'] | null;
  readonly companyName_not_contains_i?: Scalars['String'] | null;
  readonly companyName_starts_with_i?: Scalars['String'] | null;
  readonly companyName_not_starts_with_i?: Scalars['String'] | null;
  readonly companyName_ends_with_i?: Scalars['String'] | null;
  readonly companyName_not_ends_with_i?: Scalars['String'] | null;
  readonly companyName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly companyName_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly permission?: Scalars['String'] | null;
  readonly permission_not?: Scalars['String'] | null;
  readonly permission_contains?: Scalars['String'] | null;
  readonly permission_not_contains?: Scalars['String'] | null;
  readonly permission_starts_with?: Scalars['String'] | null;
  readonly permission_not_starts_with?: Scalars['String'] | null;
  readonly permission_ends_with?: Scalars['String'] | null;
  readonly permission_not_ends_with?: Scalars['String'] | null;
  readonly permission_i?: Scalars['String'] | null;
  readonly permission_not_i?: Scalars['String'] | null;
  readonly permission_contains_i?: Scalars['String'] | null;
  readonly permission_not_contains_i?: Scalars['String'] | null;
  readonly permission_starts_with_i?: Scalars['String'] | null;
  readonly permission_not_starts_with_i?: Scalars['String'] | null;
  readonly permission_ends_with_i?: Scalars['String'] | null;
  readonly permission_not_ends_with_i?: Scalars['String'] | null;
  readonly permission_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly permission_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly isDealer?: Scalars['Boolean'] | null;
  readonly isDealer_not?: Scalars['Boolean'] | null;
  readonly role?: RoleWhereInput | null;
  readonly role_is_null?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'companyName_ASC'
  | 'companyName_DESC'
  | 'permission_ASC'
  | 'permission_DESC'
  | 'isDealer_ASC'
  | 'isDealer_DESC'
  | 'role_ASC'
  | 'role_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly companyName?: Scalars['String'] | null;
  readonly permission?: Scalars['String'] | null;
  readonly isDealer?: Scalars['Boolean'] | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly companyName?: Scalars['String'] | null;
  readonly permission?: Scalars['String'] | null;
  readonly isDealer?: Scalars['Boolean'] | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type ProductRelateToManyInput = {
  readonly create?: ReadonlyArray<ProductCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ProductWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ProductWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ExteriorRelateToManyInput = {
  readonly create?: ReadonlyArray<ExteriorCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ExteriorWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ExteriorWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type InteriorRelateToManyInput = {
  readonly create?: ReadonlyArray<InteriorCreateInput | null> | null;
  readonly connect?: ReadonlyArray<InteriorWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<InteriorWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type HardwareKitRelateToManyInput = {
  readonly create?: ReadonlyArray<HardwareKitCreateInput | null> | null;
  readonly connect?: ReadonlyArray<HardwareKitWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<HardwareKitWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type GlassRelateToManyInput = {
  readonly create?: ReadonlyArray<GlassCreateInput | null> | null;
  readonly connect?: ReadonlyArray<GlassWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<GlassWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ScreenRelateToManyInput = {
  readonly create?: ReadonlyArray<ScreenCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ScreenWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ScreenWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type DividedLiteRelateToManyInput = {
  readonly create?: ReadonlyArray<DividedLiteCreateInput | null> | null;
  readonly connect?: ReadonlyArray<DividedLiteWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<DividedLiteWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BrickmoldAndTrimRelateToManyInput = {
  readonly create?: ReadonlyArray<BrickmoldAndTrimCreateInput | null> | null;
  readonly connect?: ReadonlyArray<BrickmoldAndTrimWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<BrickmoldAndTrimWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type OperationRelateToManyInput = {
  readonly create?: ReadonlyArray<OperationCreateInput | null> | null;
  readonly connect?: ReadonlyArray<OperationWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<OperationWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductCategoryWhereInput = {
  readonly AND?: ReadonlyArray<ProductCategoryWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductCategoryWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
  readonly exteriorOptions_every?: ExteriorWhereInput | null;
  readonly exteriorOptions_some?: ExteriorWhereInput | null;
  readonly exteriorOptions_none?: ExteriorWhereInput | null;
  readonly interiorOptions_every?: InteriorWhereInput | null;
  readonly interiorOptions_some?: InteriorWhereInput | null;
  readonly interiorOptions_none?: InteriorWhereInput | null;
  readonly hardwareKitOptions_every?: HardwareKitWhereInput | null;
  readonly hardwareKitOptions_some?: HardwareKitWhereInput | null;
  readonly hardwareKitOptions_none?: HardwareKitWhereInput | null;
  readonly glassOptions_every?: GlassWhereInput | null;
  readonly glassOptions_some?: GlassWhereInput | null;
  readonly glassOptions_none?: GlassWhereInput | null;
  readonly screenOptions_every?: ScreenWhereInput | null;
  readonly screenOptions_some?: ScreenWhereInput | null;
  readonly screenOptions_none?: ScreenWhereInput | null;
  readonly dividedLiteOptions_every?: DividedLiteWhereInput | null;
  readonly dividedLiteOptions_some?: DividedLiteWhereInput | null;
  readonly dividedLiteOptions_none?: DividedLiteWhereInput | null;
  readonly brickmoldAndTrimOptions_every?: BrickmoldAndTrimWhereInput | null;
  readonly brickmoldAndTrimOptions_some?: BrickmoldAndTrimWhereInput | null;
  readonly brickmoldAndTrimOptions_none?: BrickmoldAndTrimWhereInput | null;
  readonly operations_every?: OperationWhereInput | null;
  readonly operations_some?: OperationWhereInput | null;
  readonly operations_none?: OperationWhereInput | null;
};

export type ProductCategoryWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductCategoriesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'products_ASC'
  | 'products_DESC'
  | 'exteriorOptions_ASC'
  | 'exteriorOptions_DESC'
  | 'interiorOptions_ASC'
  | 'interiorOptions_DESC'
  | 'hardwareKitOptions_ASC'
  | 'hardwareKitOptions_DESC'
  | 'glassOptions_ASC'
  | 'glassOptions_DESC'
  | 'screenOptions_ASC'
  | 'screenOptions_DESC'
  | 'dividedLiteOptions_ASC'
  | 'dividedLiteOptions_DESC'
  | 'brickmoldAndTrimOptions_ASC'
  | 'brickmoldAndTrimOptions_DESC'
  | 'operations_ASC'
  | 'operations_DESC';

export type ProductCategoryUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly exteriorOptions?: ExteriorRelateToManyInput | null;
  readonly interiorOptions?: InteriorRelateToManyInput | null;
  readonly hardwareKitOptions?: HardwareKitRelateToManyInput | null;
  readonly glassOptions?: GlassRelateToManyInput | null;
  readonly screenOptions?: ScreenRelateToManyInput | null;
  readonly dividedLiteOptions?: DividedLiteRelateToManyInput | null;
  readonly brickmoldAndTrimOptions?: BrickmoldAndTrimRelateToManyInput | null;
  readonly operations?: OperationRelateToManyInput | null;
};

export type ProductCategoriesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductCategoryUpdateInput | null;
};

export type ProductCategoryCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly exteriorOptions?: ExteriorRelateToManyInput | null;
  readonly interiorOptions?: InteriorRelateToManyInput | null;
  readonly hardwareKitOptions?: HardwareKitRelateToManyInput | null;
  readonly glassOptions?: GlassRelateToManyInput | null;
  readonly screenOptions?: ScreenRelateToManyInput | null;
  readonly dividedLiteOptions?: DividedLiteRelateToManyInput | null;
  readonly brickmoldAndTrimOptions?: BrickmoldAndTrimRelateToManyInput | null;
  readonly operations?: OperationRelateToManyInput | null;
};

export type ProductCategoriesCreateInput = {
  readonly data?: ProductCategoryCreateInput | null;
};

export type ProductCategoryRelateToManyInput = {
  readonly create?: ReadonlyArray<ProductCategoryCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ProductCategoryWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ProductCategoryWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductWhereInput = {
  readonly AND?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly subtitle?: Scalars['String'] | null;
  readonly subtitle_not?: Scalars['String'] | null;
  readonly subtitle_contains?: Scalars['String'] | null;
  readonly subtitle_not_contains?: Scalars['String'] | null;
  readonly subtitle_starts_with?: Scalars['String'] | null;
  readonly subtitle_not_starts_with?: Scalars['String'] | null;
  readonly subtitle_ends_with?: Scalars['String'] | null;
  readonly subtitle_not_ends_with?: Scalars['String'] | null;
  readonly subtitle_i?: Scalars['String'] | null;
  readonly subtitle_not_i?: Scalars['String'] | null;
  readonly subtitle_contains_i?: Scalars['String'] | null;
  readonly subtitle_not_contains_i?: Scalars['String'] | null;
  readonly subtitle_starts_with_i?: Scalars['String'] | null;
  readonly subtitle_not_starts_with_i?: Scalars['String'] | null;
  readonly subtitle_ends_with_i?: Scalars['String'] | null;
  readonly subtitle_not_ends_with_i?: Scalars['String'] | null;
  readonly subtitle_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly subtitle_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly productCategories_every?: ProductCategoryWhereInput | null;
  readonly productCategories_some?: ProductCategoryWhereInput | null;
  readonly productCategories_none?: ProductCategoryWhereInput | null;
  readonly imageTitle?: Scalars['String'] | null;
  readonly imageTitle_not?: Scalars['String'] | null;
  readonly imageTitle_contains?: Scalars['String'] | null;
  readonly imageTitle_not_contains?: Scalars['String'] | null;
  readonly imageTitle_starts_with?: Scalars['String'] | null;
  readonly imageTitle_not_starts_with?: Scalars['String'] | null;
  readonly imageTitle_ends_with?: Scalars['String'] | null;
  readonly imageTitle_not_ends_with?: Scalars['String'] | null;
  readonly imageTitle_i?: Scalars['String'] | null;
  readonly imageTitle_not_i?: Scalars['String'] | null;
  readonly imageTitle_contains_i?: Scalars['String'] | null;
  readonly imageTitle_not_contains_i?: Scalars['String'] | null;
  readonly imageTitle_starts_with_i?: Scalars['String'] | null;
  readonly imageTitle_not_starts_with_i?: Scalars['String'] | null;
  readonly imageTitle_ends_with_i?: Scalars['String'] | null;
  readonly imageTitle_not_ends_with_i?: Scalars['String'] | null;
  readonly imageTitle_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly imageTitle_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly imageDescription?: Scalars['String'] | null;
  readonly imageDescription_not?: Scalars['String'] | null;
  readonly imageDescription_contains?: Scalars['String'] | null;
  readonly imageDescription_not_contains?: Scalars['String'] | null;
  readonly imageDescription_starts_with?: Scalars['String'] | null;
  readonly imageDescription_not_starts_with?: Scalars['String'] | null;
  readonly imageDescription_ends_with?: Scalars['String'] | null;
  readonly imageDescription_not_ends_with?: Scalars['String'] | null;
  readonly imageDescription_i?: Scalars['String'] | null;
  readonly imageDescription_not_i?: Scalars['String'] | null;
  readonly imageDescription_contains_i?: Scalars['String'] | null;
  readonly imageDescription_not_contains_i?: Scalars['String'] | null;
  readonly imageDescription_starts_with_i?: Scalars['String'] | null;
  readonly imageDescription_not_starts_with_i?: Scalars['String'] | null;
  readonly imageDescription_ends_with_i?: Scalars['String'] | null;
  readonly imageDescription_not_ends_with_i?: Scalars['String'] | null;
  readonly imageDescription_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly imageDescription_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly specs?: Scalars['String'] | null;
  readonly specs_not?: Scalars['String'] | null;
  readonly specs_contains?: Scalars['String'] | null;
  readonly specs_not_contains?: Scalars['String'] | null;
  readonly specs_starts_with?: Scalars['String'] | null;
  readonly specs_not_starts_with?: Scalars['String'] | null;
  readonly specs_ends_with?: Scalars['String'] | null;
  readonly specs_not_ends_with?: Scalars['String'] | null;
  readonly specs_i?: Scalars['String'] | null;
  readonly specs_not_i?: Scalars['String'] | null;
  readonly specs_contains_i?: Scalars['String'] | null;
  readonly specs_not_contains_i?: Scalars['String'] | null;
  readonly specs_starts_with_i?: Scalars['String'] | null;
  readonly specs_not_starts_with_i?: Scalars['String'] | null;
  readonly specs_ends_with_i?: Scalars['String'] | null;
  readonly specs_not_ends_with_i?: Scalars['String'] | null;
  readonly specs_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly specs_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly threeImageTitle?: Scalars['String'] | null;
  readonly threeImageTitle_not?: Scalars['String'] | null;
  readonly threeImageTitle_contains?: Scalars['String'] | null;
  readonly threeImageTitle_not_contains?: Scalars['String'] | null;
  readonly threeImageTitle_starts_with?: Scalars['String'] | null;
  readonly threeImageTitle_not_starts_with?: Scalars['String'] | null;
  readonly threeImageTitle_ends_with?: Scalars['String'] | null;
  readonly threeImageTitle_not_ends_with?: Scalars['String'] | null;
  readonly threeImageTitle_i?: Scalars['String'] | null;
  readonly threeImageTitle_not_i?: Scalars['String'] | null;
  readonly threeImageTitle_contains_i?: Scalars['String'] | null;
  readonly threeImageTitle_not_contains_i?: Scalars['String'] | null;
  readonly threeImageTitle_starts_with_i?: Scalars['String'] | null;
  readonly threeImageTitle_not_starts_with_i?: Scalars['String'] | null;
  readonly threeImageTitle_ends_with_i?: Scalars['String'] | null;
  readonly threeImageTitle_not_ends_with_i?: Scalars['String'] | null;
  readonly threeImageTitle_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly threeImageTitle_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly threeImageDescription?: Scalars['String'] | null;
  readonly threeImageDescription_not?: Scalars['String'] | null;
  readonly threeImageDescription_contains?: Scalars['String'] | null;
  readonly threeImageDescription_not_contains?: Scalars['String'] | null;
  readonly threeImageDescription_starts_with?: Scalars['String'] | null;
  readonly threeImageDescription_not_starts_with?: Scalars['String'] | null;
  readonly threeImageDescription_ends_with?: Scalars['String'] | null;
  readonly threeImageDescription_not_ends_with?: Scalars['String'] | null;
  readonly threeImageDescription_i?: Scalars['String'] | null;
  readonly threeImageDescription_not_i?: Scalars['String'] | null;
  readonly threeImageDescription_contains_i?: Scalars['String'] | null;
  readonly threeImageDescription_not_contains_i?: Scalars['String'] | null;
  readonly threeImageDescription_starts_with_i?: Scalars['String'] | null;
  readonly threeImageDescription_not_starts_with_i?: Scalars['String'] | null;
  readonly threeImageDescription_ends_with_i?: Scalars['String'] | null;
  readonly threeImageDescription_not_ends_with_i?: Scalars['String'] | null;
  readonly threeImageDescription_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly threeImageDescription_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly operationsTitle?: Scalars['String'] | null;
  readonly operationsTitle_not?: Scalars['String'] | null;
  readonly operationsTitle_contains?: Scalars['String'] | null;
  readonly operationsTitle_not_contains?: Scalars['String'] | null;
  readonly operationsTitle_starts_with?: Scalars['String'] | null;
  readonly operationsTitle_not_starts_with?: Scalars['String'] | null;
  readonly operationsTitle_ends_with?: Scalars['String'] | null;
  readonly operationsTitle_not_ends_with?: Scalars['String'] | null;
  readonly operationsTitle_i?: Scalars['String'] | null;
  readonly operationsTitle_not_i?: Scalars['String'] | null;
  readonly operationsTitle_contains_i?: Scalars['String'] | null;
  readonly operationsTitle_not_contains_i?: Scalars['String'] | null;
  readonly operationsTitle_starts_with_i?: Scalars['String'] | null;
  readonly operationsTitle_not_starts_with_i?: Scalars['String'] | null;
  readonly operationsTitle_ends_with_i?: Scalars['String'] | null;
  readonly operationsTitle_not_ends_with_i?: Scalars['String'] | null;
  readonly operationsTitle_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly operationsTitle_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly operationsSubTitle?: Scalars['String'] | null;
  readonly operationsSubTitle_not?: Scalars['String'] | null;
  readonly operationsSubTitle_contains?: Scalars['String'] | null;
  readonly operationsSubTitle_not_contains?: Scalars['String'] | null;
  readonly operationsSubTitle_starts_with?: Scalars['String'] | null;
  readonly operationsSubTitle_not_starts_with?: Scalars['String'] | null;
  readonly operationsSubTitle_ends_with?: Scalars['String'] | null;
  readonly operationsSubTitle_not_ends_with?: Scalars['String'] | null;
  readonly operationsSubTitle_i?: Scalars['String'] | null;
  readonly operationsSubTitle_not_i?: Scalars['String'] | null;
  readonly operationsSubTitle_contains_i?: Scalars['String'] | null;
  readonly operationsSubTitle_not_contains_i?: Scalars['String'] | null;
  readonly operationsSubTitle_starts_with_i?: Scalars['String'] | null;
  readonly operationsSubTitle_not_starts_with_i?: Scalars['String'] | null;
  readonly operationsSubTitle_ends_with_i?: Scalars['String'] | null;
  readonly operationsSubTitle_not_ends_with_i?: Scalars['String'] | null;
  readonly operationsSubTitle_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly operationsSubTitle_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly operationsDescription?: Scalars['String'] | null;
  readonly operationsDescription_not?: Scalars['String'] | null;
  readonly operationsDescription_contains?: Scalars['String'] | null;
  readonly operationsDescription_not_contains?: Scalars['String'] | null;
  readonly operationsDescription_starts_with?: Scalars['String'] | null;
  readonly operationsDescription_not_starts_with?: Scalars['String'] | null;
  readonly operationsDescription_ends_with?: Scalars['String'] | null;
  readonly operationsDescription_not_ends_with?: Scalars['String'] | null;
  readonly operationsDescription_i?: Scalars['String'] | null;
  readonly operationsDescription_not_i?: Scalars['String'] | null;
  readonly operationsDescription_contains_i?: Scalars['String'] | null;
  readonly operationsDescription_not_contains_i?: Scalars['String'] | null;
  readonly operationsDescription_starts_with_i?: Scalars['String'] | null;
  readonly operationsDescription_not_starts_with_i?: Scalars['String'] | null;
  readonly operationsDescription_ends_with_i?: Scalars['String'] | null;
  readonly operationsDescription_not_ends_with_i?: Scalars['String'] | null;
  readonly operationsDescription_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly operationsDescription_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly operations_every?: OperationWhereInput | null;
  readonly operations_some?: OperationWhereInput | null;
  readonly operations_none?: OperationWhereInput | null;
  readonly exteriorOptions_every?: ExteriorWhereInput | null;
  readonly exteriorOptions_some?: ExteriorWhereInput | null;
  readonly exteriorOptions_none?: ExteriorWhereInput | null;
  readonly interiorOptions_every?: InteriorWhereInput | null;
  readonly interiorOptions_some?: InteriorWhereInput | null;
  readonly interiorOptions_none?: InteriorWhereInput | null;
  readonly hardwareKitOptions_every?: HardwareKitWhereInput | null;
  readonly hardwareKitOptions_some?: HardwareKitWhereInput | null;
  readonly hardwareKitOptions_none?: HardwareKitWhereInput | null;
  readonly glassOptions_every?: GlassWhereInput | null;
  readonly glassOptions_some?: GlassWhereInput | null;
  readonly glassOptions_none?: GlassWhereInput | null;
  readonly screenOptions_every?: ScreenWhereInput | null;
  readonly screenOptions_some?: ScreenWhereInput | null;
  readonly screenOptions_none?: ScreenWhereInput | null;
  readonly dividedLiteOptions_every?: DividedLiteWhereInput | null;
  readonly dividedLiteOptions_some?: DividedLiteWhereInput | null;
  readonly dividedLiteOptions_none?: DividedLiteWhereInput | null;
  readonly brickmoldAndTrimOptions_every?: BrickmoldAndTrimWhereInput | null;
  readonly brickmoldAndTrimOptions_some?: BrickmoldAndTrimWhereInput | null;
  readonly brickmoldAndTrimOptions_none?: BrickmoldAndTrimWhereInput | null;
};

export type ProductWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'subtitle_ASC'
  | 'subtitle_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'productCategories_ASC'
  | 'productCategories_DESC'
  | 'imageTitle_ASC'
  | 'imageTitle_DESC'
  | 'imageDescription_ASC'
  | 'imageDescription_DESC'
  | 'specs_ASC'
  | 'specs_DESC'
  | 'threeImageTitle_ASC'
  | 'threeImageTitle_DESC'
  | 'threeImageDescription_ASC'
  | 'threeImageDescription_DESC'
  | 'operationsTitle_ASC'
  | 'operationsTitle_DESC'
  | 'operationsSubTitle_ASC'
  | 'operationsSubTitle_DESC'
  | 'operationsDescription_ASC'
  | 'operationsDescription_DESC'
  | 'operations_ASC'
  | 'operations_DESC'
  | 'exteriorOptions_ASC'
  | 'exteriorOptions_DESC'
  | 'interiorOptions_ASC'
  | 'interiorOptions_DESC'
  | 'hardwareKitOptions_ASC'
  | 'hardwareKitOptions_DESC'
  | 'glassOptions_ASC'
  | 'glassOptions_DESC'
  | 'screenOptions_ASC'
  | 'screenOptions_DESC'
  | 'dividedLiteOptions_ASC'
  | 'dividedLiteOptions_DESC'
  | 'brickmoldAndTrimOptions_ASC'
  | 'brickmoldAndTrimOptions_DESC';

export type ProductUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly subtitle?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
  readonly imageTitle?: Scalars['String'] | null;
  readonly imageDescription?: Scalars['String'] | null;
  readonly specs?: Scalars['String'] | null;
  readonly threeImageTitle?: Scalars['String'] | null;
  readonly threeImageDescription?: Scalars['String'] | null;
  readonly operationsTitle?: Scalars['String'] | null;
  readonly operationsSubTitle?: Scalars['String'] | null;
  readonly operationsDescription?: Scalars['String'] | null;
  readonly operations?: OperationRelateToManyInput | null;
  readonly exteriorOptions?: ExteriorRelateToManyInput | null;
  readonly interiorOptions?: InteriorRelateToManyInput | null;
  readonly hardwareKitOptions?: HardwareKitRelateToManyInput | null;
  readonly glassOptions?: GlassRelateToManyInput | null;
  readonly screenOptions?: ScreenRelateToManyInput | null;
  readonly dividedLiteOptions?: DividedLiteRelateToManyInput | null;
  readonly brickmoldAndTrimOptions?: BrickmoldAndTrimRelateToManyInput | null;
};

export type ProductsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductUpdateInput | null;
};

export type ProductCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly subtitle?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
  readonly imageTitle?: Scalars['String'] | null;
  readonly imageDescription?: Scalars['String'] | null;
  readonly specs?: Scalars['String'] | null;
  readonly threeImageTitle?: Scalars['String'] | null;
  readonly threeImageDescription?: Scalars['String'] | null;
  readonly operationsTitle?: Scalars['String'] | null;
  readonly operationsSubTitle?: Scalars['String'] | null;
  readonly operationsDescription?: Scalars['String'] | null;
  readonly operations?: OperationRelateToManyInput | null;
  readonly exteriorOptions?: ExteriorRelateToManyInput | null;
  readonly interiorOptions?: InteriorRelateToManyInput | null;
  readonly hardwareKitOptions?: HardwareKitRelateToManyInput | null;
  readonly glassOptions?: GlassRelateToManyInput | null;
  readonly screenOptions?: ScreenRelateToManyInput | null;
  readonly dividedLiteOptions?: DividedLiteRelateToManyInput | null;
  readonly brickmoldAndTrimOptions?: BrickmoldAndTrimRelateToManyInput | null;
};

export type ProductsCreateInput = {
  readonly data?: ProductCreateInput | null;
};

export type OperationWhereInput = {
  readonly AND?: ReadonlyArray<OperationWhereInput | null> | null;
  readonly OR?: ReadonlyArray<OperationWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly video?: Scalars['String'] | null;
  readonly video_not?: Scalars['String'] | null;
  readonly video_contains?: Scalars['String'] | null;
  readonly video_not_contains?: Scalars['String'] | null;
  readonly video_starts_with?: Scalars['String'] | null;
  readonly video_not_starts_with?: Scalars['String'] | null;
  readonly video_ends_with?: Scalars['String'] | null;
  readonly video_not_ends_with?: Scalars['String'] | null;
  readonly video_i?: Scalars['String'] | null;
  readonly video_not_i?: Scalars['String'] | null;
  readonly video_contains_i?: Scalars['String'] | null;
  readonly video_not_contains_i?: Scalars['String'] | null;
  readonly video_starts_with_i?: Scalars['String'] | null;
  readonly video_not_starts_with_i?: Scalars['String'] | null;
  readonly video_ends_with_i?: Scalars['String'] | null;
  readonly video_not_ends_with_i?: Scalars['String'] | null;
  readonly video_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly video_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly productCategories_every?: ProductCategoryWhereInput | null;
  readonly productCategories_some?: ProductCategoryWhereInput | null;
  readonly productCategories_none?: ProductCategoryWhereInput | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
};

export type OperationWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortOperationsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'video_ASC'
  | 'video_DESC'
  | 'productCategories_ASC'
  | 'productCategories_DESC'
  | 'products_ASC'
  | 'products_DESC';

export type OperationUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly video?: Scalars['String'] | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type OperationsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: OperationUpdateInput | null;
};

export type OperationCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly video?: Scalars['String'] | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type OperationsCreateInput = {
  readonly data?: OperationCreateInput | null;
};

export type ImagineWhereInput = {
  readonly AND?: ReadonlyArray<ImagineWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ImagineWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly src?: Scalars['String'] | null;
  readonly src_not?: Scalars['String'] | null;
  readonly src_contains?: Scalars['String'] | null;
  readonly src_not_contains?: Scalars['String'] | null;
  readonly src_starts_with?: Scalars['String'] | null;
  readonly src_not_starts_with?: Scalars['String'] | null;
  readonly src_ends_with?: Scalars['String'] | null;
  readonly src_not_ends_with?: Scalars['String'] | null;
  readonly src_i?: Scalars['String'] | null;
  readonly src_not_i?: Scalars['String'] | null;
  readonly src_contains_i?: Scalars['String'] | null;
  readonly src_not_contains_i?: Scalars['String'] | null;
  readonly src_starts_with_i?: Scalars['String'] | null;
  readonly src_not_starts_with_i?: Scalars['String'] | null;
  readonly src_ends_with_i?: Scalars['String'] | null;
  readonly src_not_ends_with_i?: Scalars['String'] | null;
  readonly src_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly src_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly product_every?: ProductWhereInput | null;
  readonly product_some?: ProductWhereInput | null;
  readonly product_none?: ProductWhereInput | null;
};

export type ImagineWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortImaginesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'src_ASC'
  | 'src_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'product_ASC'
  | 'product_DESC';

export type ImagineUpdateInput = {
  readonly src?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly product?: ProductRelateToManyInput | null;
};

export type ImaginesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ImagineUpdateInput | null;
};

export type ImagineCreateInput = {
  readonly src?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly product?: ProductRelateToManyInput | null;
};

export type ImaginesCreateInput = {
  readonly data?: ImagineCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ForgottenPasswordTokenWhereInput = {
  readonly AND?: ReadonlyArray<ForgottenPasswordTokenWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ForgottenPasswordTokenWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly token?: Scalars['String'] | null;
  readonly token_not?: Scalars['String'] | null;
  readonly token_contains?: Scalars['String'] | null;
  readonly token_not_contains?: Scalars['String'] | null;
  readonly token_starts_with?: Scalars['String'] | null;
  readonly token_not_starts_with?: Scalars['String'] | null;
  readonly token_ends_with?: Scalars['String'] | null;
  readonly token_not_ends_with?: Scalars['String'] | null;
  readonly token_i?: Scalars['String'] | null;
  readonly token_not_i?: Scalars['String'] | null;
  readonly token_contains_i?: Scalars['String'] | null;
  readonly token_not_contains_i?: Scalars['String'] | null;
  readonly token_starts_with_i?: Scalars['String'] | null;
  readonly token_not_starts_with_i?: Scalars['String'] | null;
  readonly token_ends_with_i?: Scalars['String'] | null;
  readonly token_not_ends_with_i?: Scalars['String'] | null;
  readonly token_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly token_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly requestedAt?: Scalars['String'] | null;
  readonly requestedAt_not?: Scalars['String'] | null;
  readonly requestedAt_lt?: Scalars['String'] | null;
  readonly requestedAt_lte?: Scalars['String'] | null;
  readonly requestedAt_gt?: Scalars['String'] | null;
  readonly requestedAt_gte?: Scalars['String'] | null;
  readonly requestedAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly requestedAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly accessedAt?: Scalars['String'] | null;
  readonly accessedAt_not?: Scalars['String'] | null;
  readonly accessedAt_lt?: Scalars['String'] | null;
  readonly accessedAt_lte?: Scalars['String'] | null;
  readonly accessedAt_gt?: Scalars['String'] | null;
  readonly accessedAt_gte?: Scalars['String'] | null;
  readonly accessedAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly accessedAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly expiresAt?: Scalars['String'] | null;
  readonly expiresAt_not?: Scalars['String'] | null;
  readonly expiresAt_lt?: Scalars['String'] | null;
  readonly expiresAt_lte?: Scalars['String'] | null;
  readonly expiresAt_gt?: Scalars['String'] | null;
  readonly expiresAt_gte?: Scalars['String'] | null;
  readonly expiresAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly expiresAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type ForgottenPasswordTokenWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortForgottenPasswordTokensBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'token_ASC'
  | 'token_DESC'
  | 'requestedAt_ASC'
  | 'requestedAt_DESC'
  | 'accessedAt_ASC'
  | 'accessedAt_DESC'
  | 'expiresAt_ASC'
  | 'expiresAt_DESC';

export type ForgottenPasswordTokenUpdateInput = {
  readonly user?: UserRelateToOneInput | null;
  readonly token?: Scalars['String'] | null;
  readonly requestedAt?: Scalars['String'] | null;
  readonly accessedAt?: Scalars['String'] | null;
  readonly expiresAt?: Scalars['String'] | null;
};

export type ForgottenPasswordTokensUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ForgottenPasswordTokenUpdateInput | null;
};

export type ForgottenPasswordTokenCreateInput = {
  readonly user?: UserRelateToOneInput | null;
  readonly token?: Scalars['String'] | null;
  readonly requestedAt?: Scalars['String'] | null;
  readonly accessedAt?: Scalars['String'] | null;
  readonly expiresAt?: Scalars['String'] | null;
};

export type ForgottenPasswordTokensCreateInput = {
  readonly data?: ForgottenPasswordTokenCreateInput | null;
};

export type DealerWhereInput = {
  readonly AND?: ReadonlyArray<DealerWhereInput | null> | null;
  readonly OR?: ReadonlyArray<DealerWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city?: Scalars['String'] | null;
  readonly city_not?: Scalars['String'] | null;
  readonly city_contains?: Scalars['String'] | null;
  readonly city_not_contains?: Scalars['String'] | null;
  readonly city_starts_with?: Scalars['String'] | null;
  readonly city_not_starts_with?: Scalars['String'] | null;
  readonly city_ends_with?: Scalars['String'] | null;
  readonly city_not_ends_with?: Scalars['String'] | null;
  readonly city_i?: Scalars['String'] | null;
  readonly city_not_i?: Scalars['String'] | null;
  readonly city_contains_i?: Scalars['String'] | null;
  readonly city_not_contains_i?: Scalars['String'] | null;
  readonly city_starts_with_i?: Scalars['String'] | null;
  readonly city_not_starts_with_i?: Scalars['String'] | null;
  readonly city_ends_with_i?: Scalars['String'] | null;
  readonly city_not_ends_with_i?: Scalars['String'] | null;
  readonly city_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly postal?: Scalars['String'] | null;
  readonly postal_not?: Scalars['String'] | null;
  readonly postal_contains?: Scalars['String'] | null;
  readonly postal_not_contains?: Scalars['String'] | null;
  readonly postal_starts_with?: Scalars['String'] | null;
  readonly postal_not_starts_with?: Scalars['String'] | null;
  readonly postal_ends_with?: Scalars['String'] | null;
  readonly postal_not_ends_with?: Scalars['String'] | null;
  readonly postal_i?: Scalars['String'] | null;
  readonly postal_not_i?: Scalars['String'] | null;
  readonly postal_contains_i?: Scalars['String'] | null;
  readonly postal_not_contains_i?: Scalars['String'] | null;
  readonly postal_starts_with_i?: Scalars['String'] | null;
  readonly postal_not_starts_with_i?: Scalars['String'] | null;
  readonly postal_ends_with_i?: Scalars['String'] | null;
  readonly postal_not_ends_with_i?: Scalars['String'] | null;
  readonly postal_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly postal_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phone?: Scalars['Int'] | null;
  readonly phone_not?: Scalars['Int'] | null;
  readonly phone_lt?: Scalars['Int'] | null;
  readonly phone_lte?: Scalars['Int'] | null;
  readonly phone_gt?: Scalars['Int'] | null;
  readonly phone_gte?: Scalars['Int'] | null;
  readonly phone_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly phone_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly person?: Scalars['String'] | null;
  readonly person_not?: Scalars['String'] | null;
  readonly person_contains?: Scalars['String'] | null;
  readonly person_not_contains?: Scalars['String'] | null;
  readonly person_starts_with?: Scalars['String'] | null;
  readonly person_not_starts_with?: Scalars['String'] | null;
  readonly person_ends_with?: Scalars['String'] | null;
  readonly person_not_ends_with?: Scalars['String'] | null;
  readonly person_i?: Scalars['String'] | null;
  readonly person_not_i?: Scalars['String'] | null;
  readonly person_contains_i?: Scalars['String'] | null;
  readonly person_not_contains_i?: Scalars['String'] | null;
  readonly person_starts_with_i?: Scalars['String'] | null;
  readonly person_not_starts_with_i?: Scalars['String'] | null;
  readonly person_ends_with_i?: Scalars['String'] | null;
  readonly person_not_ends_with_i?: Scalars['String'] | null;
  readonly person_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly person_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly province?: Scalars['String'] | null;
  readonly province_not?: Scalars['String'] | null;
  readonly province_contains?: Scalars['String'] | null;
  readonly province_not_contains?: Scalars['String'] | null;
  readonly province_starts_with?: Scalars['String'] | null;
  readonly province_not_starts_with?: Scalars['String'] | null;
  readonly province_ends_with?: Scalars['String'] | null;
  readonly province_not_ends_with?: Scalars['String'] | null;
  readonly province_i?: Scalars['String'] | null;
  readonly province_not_i?: Scalars['String'] | null;
  readonly province_contains_i?: Scalars['String'] | null;
  readonly province_not_contains_i?: Scalars['String'] | null;
  readonly province_starts_with_i?: Scalars['String'] | null;
  readonly province_not_starts_with_i?: Scalars['String'] | null;
  readonly province_ends_with_i?: Scalars['String'] | null;
  readonly province_not_ends_with_i?: Scalars['String'] | null;
  readonly province_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly province_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type DealerWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortDealersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'city_ASC'
  | 'city_DESC'
  | 'postal_ASC'
  | 'postal_DESC'
  | 'phone_ASC'
  | 'phone_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'person_ASC'
  | 'person_DESC'
  | 'province_ASC'
  | 'province_DESC';

export type DealerUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly postal?: Scalars['String'] | null;
  readonly phone?: Scalars['Int'] | null;
  readonly email?: Scalars['String'] | null;
  readonly person?: Scalars['String'] | null;
  readonly province?: Scalars['String'] | null;
};

export type DealersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: DealerUpdateInput | null;
};

export type DealerCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly postal?: Scalars['String'] | null;
  readonly phone?: Scalars['Int'] | null;
  readonly email?: Scalars['String'] | null;
  readonly person?: Scalars['String'] | null;
  readonly province?: Scalars['String'] | null;
};

export type DealersCreateInput = {
  readonly data?: DealerCreateInput | null;
};

export type ContactUsFormWhereInput = {
  readonly AND?: ReadonlyArray<ContactUsFormWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ContactUsFormWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly firstName?: Scalars['String'] | null;
  readonly firstName_not?: Scalars['String'] | null;
  readonly firstName_contains?: Scalars['String'] | null;
  readonly firstName_not_contains?: Scalars['String'] | null;
  readonly firstName_starts_with?: Scalars['String'] | null;
  readonly firstName_not_starts_with?: Scalars['String'] | null;
  readonly firstName_ends_with?: Scalars['String'] | null;
  readonly firstName_not_ends_with?: Scalars['String'] | null;
  readonly firstName_i?: Scalars['String'] | null;
  readonly firstName_not_i?: Scalars['String'] | null;
  readonly firstName_contains_i?: Scalars['String'] | null;
  readonly firstName_not_contains_i?: Scalars['String'] | null;
  readonly firstName_starts_with_i?: Scalars['String'] | null;
  readonly firstName_not_starts_with_i?: Scalars['String'] | null;
  readonly firstName_ends_with_i?: Scalars['String'] | null;
  readonly firstName_not_ends_with_i?: Scalars['String'] | null;
  readonly firstName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly firstName_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly lastName?: Scalars['String'] | null;
  readonly lastName_not?: Scalars['String'] | null;
  readonly lastName_contains?: Scalars['String'] | null;
  readonly lastName_not_contains?: Scalars['String'] | null;
  readonly lastName_starts_with?: Scalars['String'] | null;
  readonly lastName_not_starts_with?: Scalars['String'] | null;
  readonly lastName_ends_with?: Scalars['String'] | null;
  readonly lastName_not_ends_with?: Scalars['String'] | null;
  readonly lastName_i?: Scalars['String'] | null;
  readonly lastName_not_i?: Scalars['String'] | null;
  readonly lastName_contains_i?: Scalars['String'] | null;
  readonly lastName_not_contains_i?: Scalars['String'] | null;
  readonly lastName_starts_with_i?: Scalars['String'] | null;
  readonly lastName_not_starts_with_i?: Scalars['String'] | null;
  readonly lastName_ends_with_i?: Scalars['String'] | null;
  readonly lastName_not_ends_with_i?: Scalars['String'] | null;
  readonly lastName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly lastName_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phone?: Scalars['Int'] | null;
  readonly phone_not?: Scalars['Int'] | null;
  readonly phone_lt?: Scalars['Int'] | null;
  readonly phone_lte?: Scalars['Int'] | null;
  readonly phone_gt?: Scalars['Int'] | null;
  readonly phone_gte?: Scalars['Int'] | null;
  readonly phone_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly phone_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly company?: Scalars['String'] | null;
  readonly company_not?: Scalars['String'] | null;
  readonly company_contains?: Scalars['String'] | null;
  readonly company_not_contains?: Scalars['String'] | null;
  readonly company_starts_with?: Scalars['String'] | null;
  readonly company_not_starts_with?: Scalars['String'] | null;
  readonly company_ends_with?: Scalars['String'] | null;
  readonly company_not_ends_with?: Scalars['String'] | null;
  readonly company_i?: Scalars['String'] | null;
  readonly company_not_i?: Scalars['String'] | null;
  readonly company_contains_i?: Scalars['String'] | null;
  readonly company_not_contains_i?: Scalars['String'] | null;
  readonly company_starts_with_i?: Scalars['String'] | null;
  readonly company_not_starts_with_i?: Scalars['String'] | null;
  readonly company_ends_with_i?: Scalars['String'] | null;
  readonly company_not_ends_with_i?: Scalars['String'] | null;
  readonly company_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly company_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address?: Scalars['String'] | null;
  readonly address_not?: Scalars['String'] | null;
  readonly address_contains?: Scalars['String'] | null;
  readonly address_not_contains?: Scalars['String'] | null;
  readonly address_starts_with?: Scalars['String'] | null;
  readonly address_not_starts_with?: Scalars['String'] | null;
  readonly address_ends_with?: Scalars['String'] | null;
  readonly address_not_ends_with?: Scalars['String'] | null;
  readonly address_i?: Scalars['String'] | null;
  readonly address_not_i?: Scalars['String'] | null;
  readonly address_contains_i?: Scalars['String'] | null;
  readonly address_not_contains_i?: Scalars['String'] | null;
  readonly address_starts_with_i?: Scalars['String'] | null;
  readonly address_not_starts_with_i?: Scalars['String'] | null;
  readonly address_ends_with_i?: Scalars['String'] | null;
  readonly address_not_ends_with_i?: Scalars['String'] | null;
  readonly address_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly address_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city?: Scalars['String'] | null;
  readonly city_not?: Scalars['String'] | null;
  readonly city_contains?: Scalars['String'] | null;
  readonly city_not_contains?: Scalars['String'] | null;
  readonly city_starts_with?: Scalars['String'] | null;
  readonly city_not_starts_with?: Scalars['String'] | null;
  readonly city_ends_with?: Scalars['String'] | null;
  readonly city_not_ends_with?: Scalars['String'] | null;
  readonly city_i?: Scalars['String'] | null;
  readonly city_not_i?: Scalars['String'] | null;
  readonly city_contains_i?: Scalars['String'] | null;
  readonly city_not_contains_i?: Scalars['String'] | null;
  readonly city_starts_with_i?: Scalars['String'] | null;
  readonly city_not_starts_with_i?: Scalars['String'] | null;
  readonly city_ends_with_i?: Scalars['String'] | null;
  readonly city_not_ends_with_i?: Scalars['String'] | null;
  readonly city_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly city_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly province?: Scalars['String'] | null;
  readonly province_not?: Scalars['String'] | null;
  readonly province_contains?: Scalars['String'] | null;
  readonly province_not_contains?: Scalars['String'] | null;
  readonly province_starts_with?: Scalars['String'] | null;
  readonly province_not_starts_with?: Scalars['String'] | null;
  readonly province_ends_with?: Scalars['String'] | null;
  readonly province_not_ends_with?: Scalars['String'] | null;
  readonly province_i?: Scalars['String'] | null;
  readonly province_not_i?: Scalars['String'] | null;
  readonly province_contains_i?: Scalars['String'] | null;
  readonly province_not_contains_i?: Scalars['String'] | null;
  readonly province_starts_with_i?: Scalars['String'] | null;
  readonly province_not_starts_with_i?: Scalars['String'] | null;
  readonly province_ends_with_i?: Scalars['String'] | null;
  readonly province_not_ends_with_i?: Scalars['String'] | null;
  readonly province_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly province_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly postal?: Scalars['String'] | null;
  readonly postal_not?: Scalars['String'] | null;
  readonly postal_contains?: Scalars['String'] | null;
  readonly postal_not_contains?: Scalars['String'] | null;
  readonly postal_starts_with?: Scalars['String'] | null;
  readonly postal_not_starts_with?: Scalars['String'] | null;
  readonly postal_ends_with?: Scalars['String'] | null;
  readonly postal_not_ends_with?: Scalars['String'] | null;
  readonly postal_i?: Scalars['String'] | null;
  readonly postal_not_i?: Scalars['String'] | null;
  readonly postal_contains_i?: Scalars['String'] | null;
  readonly postal_not_contains_i?: Scalars['String'] | null;
  readonly postal_starts_with_i?: Scalars['String'] | null;
  readonly postal_not_starts_with_i?: Scalars['String'] | null;
  readonly postal_ends_with_i?: Scalars['String'] | null;
  readonly postal_not_ends_with_i?: Scalars['String'] | null;
  readonly postal_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly postal_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly country?: Scalars['String'] | null;
  readonly country_not?: Scalars['String'] | null;
  readonly country_contains?: Scalars['String'] | null;
  readonly country_not_contains?: Scalars['String'] | null;
  readonly country_starts_with?: Scalars['String'] | null;
  readonly country_not_starts_with?: Scalars['String'] | null;
  readonly country_ends_with?: Scalars['String'] | null;
  readonly country_not_ends_with?: Scalars['String'] | null;
  readonly country_i?: Scalars['String'] | null;
  readonly country_not_i?: Scalars['String'] | null;
  readonly country_contains_i?: Scalars['String'] | null;
  readonly country_not_contains_i?: Scalars['String'] | null;
  readonly country_starts_with_i?: Scalars['String'] | null;
  readonly country_not_starts_with_i?: Scalars['String'] | null;
  readonly country_ends_with_i?: Scalars['String'] | null;
  readonly country_not_ends_with_i?: Scalars['String'] | null;
  readonly country_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly country_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly comments?: Scalars['String'] | null;
  readonly comments_not?: Scalars['String'] | null;
  readonly comments_contains?: Scalars['String'] | null;
  readonly comments_not_contains?: Scalars['String'] | null;
  readonly comments_starts_with?: Scalars['String'] | null;
  readonly comments_not_starts_with?: Scalars['String'] | null;
  readonly comments_ends_with?: Scalars['String'] | null;
  readonly comments_not_ends_with?: Scalars['String'] | null;
  readonly comments_i?: Scalars['String'] | null;
  readonly comments_not_i?: Scalars['String'] | null;
  readonly comments_contains_i?: Scalars['String'] | null;
  readonly comments_not_contains_i?: Scalars['String'] | null;
  readonly comments_starts_with_i?: Scalars['String'] | null;
  readonly comments_not_starts_with_i?: Scalars['String'] | null;
  readonly comments_ends_with_i?: Scalars['String'] | null;
  readonly comments_not_ends_with_i?: Scalars['String'] | null;
  readonly comments_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly comments_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly iam?: Scalars['String'] | null;
  readonly iam_not?: Scalars['String'] | null;
  readonly iam_contains?: Scalars['String'] | null;
  readonly iam_not_contains?: Scalars['String'] | null;
  readonly iam_starts_with?: Scalars['String'] | null;
  readonly iam_not_starts_with?: Scalars['String'] | null;
  readonly iam_ends_with?: Scalars['String'] | null;
  readonly iam_not_ends_with?: Scalars['String'] | null;
  readonly iam_i?: Scalars['String'] | null;
  readonly iam_not_i?: Scalars['String'] | null;
  readonly iam_contains_i?: Scalars['String'] | null;
  readonly iam_not_contains_i?: Scalars['String'] | null;
  readonly iam_starts_with_i?: Scalars['String'] | null;
  readonly iam_not_starts_with_i?: Scalars['String'] | null;
  readonly iam_ends_with_i?: Scalars['String'] | null;
  readonly iam_not_ends_with_i?: Scalars['String'] | null;
  readonly iam_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly iam_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly ineed?: Scalars['String'] | null;
  readonly ineed_not?: Scalars['String'] | null;
  readonly ineed_contains?: Scalars['String'] | null;
  readonly ineed_not_contains?: Scalars['String'] | null;
  readonly ineed_starts_with?: Scalars['String'] | null;
  readonly ineed_not_starts_with?: Scalars['String'] | null;
  readonly ineed_ends_with?: Scalars['String'] | null;
  readonly ineed_not_ends_with?: Scalars['String'] | null;
  readonly ineed_i?: Scalars['String'] | null;
  readonly ineed_not_i?: Scalars['String'] | null;
  readonly ineed_contains_i?: Scalars['String'] | null;
  readonly ineed_not_contains_i?: Scalars['String'] | null;
  readonly ineed_starts_with_i?: Scalars['String'] | null;
  readonly ineed_not_starts_with_i?: Scalars['String'] | null;
  readonly ineed_ends_with_i?: Scalars['String'] | null;
  readonly ineed_not_ends_with_i?: Scalars['String'] | null;
  readonly ineed_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly ineed_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type ContactUsFormWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortContactUsFormsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'lastName_ASC'
  | 'lastName_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'phone_ASC'
  | 'phone_DESC'
  | 'company_ASC'
  | 'company_DESC'
  | 'address_ASC'
  | 'address_DESC'
  | 'city_ASC'
  | 'city_DESC'
  | 'province_ASC'
  | 'province_DESC'
  | 'postal_ASC'
  | 'postal_DESC'
  | 'country_ASC'
  | 'country_DESC'
  | 'comments_ASC'
  | 'comments_DESC'
  | 'iam_ASC'
  | 'iam_DESC'
  | 'ineed_ASC'
  | 'ineed_DESC';

export type ContactUsFormUpdateInput = {
  readonly firstName?: Scalars['String'] | null;
  readonly lastName?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly phone?: Scalars['Int'] | null;
  readonly company?: Scalars['String'] | null;
  readonly address?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly province?: Scalars['String'] | null;
  readonly postal?: Scalars['String'] | null;
  readonly country?: Scalars['String'] | null;
  readonly comments?: Scalars['String'] | null;
  readonly iam?: Scalars['String'] | null;
  readonly ineed?: Scalars['String'] | null;
};

export type ContactUsFormsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ContactUsFormUpdateInput | null;
};

export type ContactUsFormCreateInput = {
  readonly firstName?: Scalars['String'] | null;
  readonly lastName?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly phone?: Scalars['Int'] | null;
  readonly company?: Scalars['String'] | null;
  readonly address?: Scalars['String'] | null;
  readonly city?: Scalars['String'] | null;
  readonly province?: Scalars['String'] | null;
  readonly postal?: Scalars['String'] | null;
  readonly country?: Scalars['String'] | null;
  readonly comments?: Scalars['String'] | null;
  readonly iam?: Scalars['String'] | null;
  readonly ineed?: Scalars['String'] | null;
};

export type ContactUsFormsCreateInput = {
  readonly data?: ContactUsFormCreateInput | null;
};

export type BackEndUserWhereInput = {
  readonly AND?: ReadonlyArray<BackEndUserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BackEndUserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly isAdmin?: Scalars['Boolean'] | null;
  readonly isAdmin_not?: Scalars['Boolean'] | null;
};

export type BackEndUserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBackEndUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'isAdmin_ASC'
  | 'isAdmin_DESC';

export type BackEndUserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly isAdmin?: Scalars['Boolean'] | null;
};

export type BackEndUsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BackEndUserUpdateInput | null;
};

export type BackEndUserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly isAdmin?: Scalars['Boolean'] | null;
};

export type BackEndUsersCreateInput = {
  readonly data?: BackEndUserCreateInput | null;
};

export type ScreenWhereInput = {
  readonly AND?: ReadonlyArray<ScreenWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ScreenWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
  readonly productCategories_every?: ProductCategoryWhereInput | null;
  readonly productCategories_some?: ProductCategoryWhereInput | null;
  readonly productCategories_none?: ProductCategoryWhereInput | null;
};

export type ScreenWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortScreensBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'products_ASC'
  | 'products_DESC'
  | 'productCategories_ASC'
  | 'productCategories_DESC';

export type ScreenUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type ScreensUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ScreenUpdateInput | null;
};

export type ScreenCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type ScreensCreateInput = {
  readonly data?: ScreenCreateInput | null;
};

export type InteriorWhereInput = {
  readonly AND?: ReadonlyArray<InteriorWhereInput | null> | null;
  readonly OR?: ReadonlyArray<InteriorWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
  readonly productCategories_every?: ProductCategoryWhereInput | null;
  readonly productCategories_some?: ProductCategoryWhereInput | null;
  readonly productCategories_none?: ProductCategoryWhereInput | null;
};

export type InteriorWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortInteriorsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'products_ASC'
  | 'products_DESC'
  | 'productCategories_ASC'
  | 'productCategories_DESC';

export type InteriorUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type InteriorsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: InteriorUpdateInput | null;
};

export type InteriorCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type InteriorsCreateInput = {
  readonly data?: InteriorCreateInput | null;
};

export type HardwareKitWhereInput = {
  readonly AND?: ReadonlyArray<HardwareKitWhereInput | null> | null;
  readonly OR?: ReadonlyArray<HardwareKitWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
  readonly productCategories_every?: ProductCategoryWhereInput | null;
  readonly productCategories_some?: ProductCategoryWhereInput | null;
  readonly productCategories_none?: ProductCategoryWhereInput | null;
};

export type HardwareKitWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortHardwareKitsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'products_ASC'
  | 'products_DESC'
  | 'productCategories_ASC'
  | 'productCategories_DESC';

export type HardwareKitUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type HardwareKitsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: HardwareKitUpdateInput | null;
};

export type HardwareKitCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type HardwareKitsCreateInput = {
  readonly data?: HardwareKitCreateInput | null;
};

export type GlassColorWhereInput = {
  readonly AND?: ReadonlyArray<GlassColorWhereInput | null> | null;
  readonly OR?: ReadonlyArray<GlassColorWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly parent_every?: GlassWhereInput | null;
  readonly parent_some?: GlassWhereInput | null;
  readonly parent_none?: GlassWhereInput | null;
};

export type GlassColorWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortGlassColorsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'parent_ASC'
  | 'parent_DESC';

export type GlassColorUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly parent?: GlassRelateToManyInput | null;
};

export type GlassColorsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: GlassColorUpdateInput | null;
};

export type GlassColorCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly parent?: GlassRelateToManyInput | null;
};

export type GlassColorsCreateInput = {
  readonly data?: GlassColorCreateInput | null;
};

export type GlassColorRelateToManyInput = {
  readonly create?: ReadonlyArray<GlassColorCreateInput | null> | null;
  readonly connect?: ReadonlyArray<GlassColorWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<GlassColorWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type GlassWhereInput = {
  readonly AND?: ReadonlyArray<GlassWhereInput | null> | null;
  readonly OR?: ReadonlyArray<GlassWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
  readonly productCategories_every?: ProductCategoryWhereInput | null;
  readonly productCategories_some?: ProductCategoryWhereInput | null;
  readonly productCategories_none?: ProductCategoryWhereInput | null;
  readonly colors_every?: GlassColorWhereInput | null;
  readonly colors_some?: GlassColorWhereInput | null;
  readonly colors_none?: GlassColorWhereInput | null;
};

export type GlassWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortGlassesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'products_ASC'
  | 'products_DESC'
  | 'productCategories_ASC'
  | 'productCategories_DESC'
  | 'colors_ASC'
  | 'colors_DESC';

export type GlassUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
  readonly colors?: GlassColorRelateToManyInput | null;
};

export type GlassesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: GlassUpdateInput | null;
};

export type GlassCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
  readonly colors?: GlassColorRelateToManyInput | null;
};

export type GlassesCreateInput = {
  readonly data?: GlassCreateInput | null;
};

export type ExteriorWhereInput = {
  readonly AND?: ReadonlyArray<ExteriorWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ExteriorWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
  readonly productCategories_every?: ProductCategoryWhereInput | null;
  readonly productCategories_some?: ProductCategoryWhereInput | null;
  readonly productCategories_none?: ProductCategoryWhereInput | null;
};

export type ExteriorWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortExteriorsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'products_ASC'
  | 'products_DESC'
  | 'productCategories_ASC'
  | 'productCategories_DESC';

export type ExteriorUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type ExteriorsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ExteriorUpdateInput | null;
};

export type ExteriorCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type ExteriorsCreateInput = {
  readonly data?: ExteriorCreateInput | null;
};

export type DividedLiteWhereInput = {
  readonly AND?: ReadonlyArray<DividedLiteWhereInput | null> | null;
  readonly OR?: ReadonlyArray<DividedLiteWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
  readonly productCategories_every?: ProductCategoryWhereInput | null;
  readonly productCategories_some?: ProductCategoryWhereInput | null;
  readonly productCategories_none?: ProductCategoryWhereInput | null;
};

export type DividedLiteWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortDividedLitesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'products_ASC'
  | 'products_DESC'
  | 'productCategories_ASC'
  | 'productCategories_DESC';

export type DividedLiteUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type DividedLitesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: DividedLiteUpdateInput | null;
};

export type DividedLiteCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type DividedLitesCreateInput = {
  readonly data?: DividedLiteCreateInput | null;
};

export type BrickmoldAndTrimWhereInput = {
  readonly AND?: ReadonlyArray<BrickmoldAndTrimWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BrickmoldAndTrimWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_contains?: Scalars['String'] | null;
  readonly image_not_contains?: Scalars['String'] | null;
  readonly image_starts_with?: Scalars['String'] | null;
  readonly image_not_starts_with?: Scalars['String'] | null;
  readonly image_ends_with?: Scalars['String'] | null;
  readonly image_not_ends_with?: Scalars['String'] | null;
  readonly image_i?: Scalars['String'] | null;
  readonly image_not_i?: Scalars['String'] | null;
  readonly image_contains_i?: Scalars['String'] | null;
  readonly image_not_contains_i?: Scalars['String'] | null;
  readonly image_starts_with_i?: Scalars['String'] | null;
  readonly image_not_starts_with_i?: Scalars['String'] | null;
  readonly image_ends_with_i?: Scalars['String'] | null;
  readonly image_not_ends_with_i?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
  readonly productCategories_every?: ProductCategoryWhereInput | null;
  readonly productCategories_some?: ProductCategoryWhereInput | null;
  readonly productCategories_none?: ProductCategoryWhereInput | null;
};

export type BrickmoldAndTrimWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBrickmoldAndTrimsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'image_ASC'
  | 'image_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'products_ASC'
  | 'products_DESC'
  | 'productCategories_ASC'
  | 'productCategories_DESC';

export type BrickmoldAndTrimUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type BrickmoldAndTrimsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BrickmoldAndTrimUpdateInput | null;
};

export type BrickmoldAndTrimCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly image?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly productCategories?: ProductCategoryRelateToManyInput | null;
};

export type BrickmoldAndTrimsCreateInput = {
  readonly data?: BrickmoldAndTrimCreateInput | null;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RoleWhereInput = {
  readonly AND?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly canManageProducts?: Scalars['Boolean'] | null;
  readonly canManageProducts_not?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers_not?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers_not?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageRoles_not?: Scalars['Boolean'] | null;
  readonly assignedTo_every?: UserWhereInput | null;
  readonly assignedTo_some?: UserWhereInput | null;
  readonly assignedTo_none?: UserWhereInput | null;
};

export type RoleWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRolesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'canManageProducts_ASC'
  | 'canManageProducts_DESC'
  | 'canSeeOtherUsers_ASC'
  | 'canSeeOtherUsers_DESC'
  | 'canManageUsers_ASC'
  | 'canManageUsers_DESC'
  | 'canManageRoles_ASC'
  | 'canManageRoles_DESC'
  | 'assignedTo_ASC'
  | 'assignedTo_DESC';

export type RoleUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageProducts?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RoleUpdateInput | null;
};

export type RoleCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageProducts?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesCreateInput = {
  readonly data?: RoleCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'companyName'
    | 'permission'
    | 'isDealer'
    | 'role'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly companyName?: string | null;
    readonly permission?: string | null;
    readonly isDealer?: boolean | null;
    readonly role?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type ProductCategoryListTypeInfo = {
  key: 'ProductCategory';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'products'
    | 'exteriorOptions'
    | 'interiorOptions'
    | 'hardwareKitOptions'
    | 'glassOptions'
    | 'screenOptions'
    | 'dividedLiteOptions'
    | 'brickmoldAndTrimOptions'
    | 'operations';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly products?: string | null;
    readonly exteriorOptions?: string | null;
    readonly interiorOptions?: string | null;
    readonly hardwareKitOptions?: string | null;
    readonly glassOptions?: string | null;
    readonly screenOptions?: string | null;
    readonly dividedLiteOptions?: string | null;
    readonly brickmoldAndTrimOptions?: string | null;
    readonly operations?: string | null;
  };
  inputs: {
    where: ProductCategoryWhereInput;
    create: ProductCategoryCreateInput;
    update: ProductCategoryUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductCategoryWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductCategoriesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductCategoryListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductCategoryListTypeInfo,
    ProductCategoryListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductCategoryListTypeInfo,
  ProductCategoryListTypeInfo['fields']
>;

export type ProductListTypeInfo = {
  key: 'Product';
  fields:
    | 'id'
    | 'name'
    | 'subtitle'
    | 'image'
    | 'productCategories'
    | 'imageTitle'
    | 'imageDescription'
    | 'specs'
    | 'threeImageTitle'
    | 'threeImageDescription'
    | 'operationsTitle'
    | 'operationsSubTitle'
    | 'operationsDescription'
    | 'operations'
    | 'exteriorOptions'
    | 'interiorOptions'
    | 'hardwareKitOptions'
    | 'glassOptions'
    | 'screenOptions'
    | 'dividedLiteOptions'
    | 'brickmoldAndTrimOptions';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly subtitle?: string | null;
    readonly image?: string | null;
    readonly productCategories?: string | null;
    readonly imageTitle?: string | null;
    readonly imageDescription?: string | null;
    readonly specs?: string | null;
    readonly threeImageTitle?: string | null;
    readonly threeImageDescription?: string | null;
    readonly operationsTitle?: string | null;
    readonly operationsSubTitle?: string | null;
    readonly operationsDescription?: string | null;
    readonly operations?: string | null;
    readonly exteriorOptions?: string | null;
    readonly interiorOptions?: string | null;
    readonly hardwareKitOptions?: string | null;
    readonly glassOptions?: string | null;
    readonly screenOptions?: string | null;
    readonly dividedLiteOptions?: string | null;
    readonly brickmoldAndTrimOptions?: string | null;
  };
  inputs: {
    where: ProductWhereInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductListTypeInfo,
    ProductListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductListTypeInfo,
  ProductListTypeInfo['fields']
>;

export type OperationListTypeInfo = {
  key: 'Operation';
  fields: 'id' | 'name' | 'image' | 'video' | 'productCategories' | 'products';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly image?: string | null;
    readonly video?: string | null;
    readonly productCategories?: string | null;
    readonly products?: string | null;
  };
  inputs: {
    where: OperationWhereInput;
    create: OperationCreateInput;
    update: OperationUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: OperationWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortOperationsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type OperationListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    OperationListTypeInfo,
    OperationListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  OperationListTypeInfo,
  OperationListTypeInfo['fields']
>;

export type ImagineListTypeInfo = {
  key: 'Imagine';
  fields: 'id' | 'src' | 'description' | 'product';
  backing: {
    readonly id: string;
    readonly src?: string | null;
    readonly description?: string | null;
    readonly product?: string | null;
  };
  inputs: {
    where: ImagineWhereInput;
    create: ImagineCreateInput;
    update: ImagineUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ImagineWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortImaginesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ImagineListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ImagineListTypeInfo,
    ImagineListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ImagineListTypeInfo,
  ImagineListTypeInfo['fields']
>;

export type ForgottenPasswordTokenListTypeInfo = {
  key: 'ForgottenPasswordToken';
  fields: 'id' | 'user' | 'token' | 'requestedAt' | 'accessedAt' | 'expiresAt';
  backing: {
    readonly id: string;
    readonly user?: string | null;
    readonly token?: string | null;
    readonly requestedAt?: Date | null;
    readonly accessedAt?: Date | null;
    readonly expiresAt?: Date | null;
  };
  inputs: {
    where: ForgottenPasswordTokenWhereInput;
    create: ForgottenPasswordTokenCreateInput;
    update: ForgottenPasswordTokenUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ForgottenPasswordTokenWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortForgottenPasswordTokensBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ForgottenPasswordTokenListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ForgottenPasswordTokenListTypeInfo,
    ForgottenPasswordTokenListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ForgottenPasswordTokenListTypeInfo,
  ForgottenPasswordTokenListTypeInfo['fields']
>;

export type DealerListTypeInfo = {
  key: 'Dealer';
  fields:
    | 'id'
    | 'name'
    | 'city'
    | 'postal'
    | 'phone'
    | 'email'
    | 'person'
    | 'province';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly city?: string | null;
    readonly postal?: string | null;
    readonly phone?: number | null;
    readonly email?: string | null;
    readonly person?: string | null;
    readonly province?: string | null;
  };
  inputs: {
    where: DealerWhereInput;
    create: DealerCreateInput;
    update: DealerUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: DealerWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortDealersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type DealerListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    DealerListTypeInfo,
    DealerListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  DealerListTypeInfo,
  DealerListTypeInfo['fields']
>;

export type ContactUsFormListTypeInfo = {
  key: 'ContactUsForm';
  fields:
    | 'id'
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'phone'
    | 'company'
    | 'address'
    | 'city'
    | 'province'
    | 'postal'
    | 'country'
    | 'comments'
    | 'iam'
    | 'ineed';
  backing: {
    readonly id: string;
    readonly firstName?: string | null;
    readonly lastName?: string | null;
    readonly email?: string | null;
    readonly phone?: number | null;
    readonly company?: string | null;
    readonly address?: string | null;
    readonly city?: string | null;
    readonly province?: string | null;
    readonly postal?: string | null;
    readonly country?: string | null;
    readonly comments?: string | null;
    readonly iam?: string | null;
    readonly ineed?: string | null;
  };
  inputs: {
    where: ContactUsFormWhereInput;
    create: ContactUsFormCreateInput;
    update: ContactUsFormUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ContactUsFormWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortContactUsFormsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ContactUsFormListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ContactUsFormListTypeInfo,
    ContactUsFormListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ContactUsFormListTypeInfo,
  ContactUsFormListTypeInfo['fields']
>;

export type BackEndUserListTypeInfo = {
  key: 'BackEndUser';
  fields: 'id' | 'name' | 'email' | 'password' | 'isAdmin';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly isAdmin?: boolean | null;
  };
  inputs: {
    where: BackEndUserWhereInput;
    create: BackEndUserCreateInput;
    update: BackEndUserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BackEndUserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBackEndUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BackEndUserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BackEndUserListTypeInfo,
    BackEndUserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BackEndUserListTypeInfo,
  BackEndUserListTypeInfo['fields']
>;

export type ScreenListTypeInfo = {
  key: 'Screen';
  fields:
    | 'id'
    | 'name'
    | 'image'
    | 'description'
    | 'products'
    | 'productCategories';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly image?: string | null;
    readonly description?: string | null;
    readonly products?: string | null;
    readonly productCategories?: string | null;
  };
  inputs: {
    where: ScreenWhereInput;
    create: ScreenCreateInput;
    update: ScreenUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ScreenWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortScreensBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ScreenListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ScreenListTypeInfo,
    ScreenListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ScreenListTypeInfo,
  ScreenListTypeInfo['fields']
>;

export type InteriorListTypeInfo = {
  key: 'Interior';
  fields:
    | 'id'
    | 'name'
    | 'image'
    | 'description'
    | 'products'
    | 'productCategories';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly image?: string | null;
    readonly description?: string | null;
    readonly products?: string | null;
    readonly productCategories?: string | null;
  };
  inputs: {
    where: InteriorWhereInput;
    create: InteriorCreateInput;
    update: InteriorUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: InteriorWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortInteriorsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type InteriorListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    InteriorListTypeInfo,
    InteriorListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  InteriorListTypeInfo,
  InteriorListTypeInfo['fields']
>;

export type HardwareKitListTypeInfo = {
  key: 'HardwareKit';
  fields:
    | 'id'
    | 'name'
    | 'image'
    | 'description'
    | 'products'
    | 'productCategories';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly image?: string | null;
    readonly description?: string | null;
    readonly products?: string | null;
    readonly productCategories?: string | null;
  };
  inputs: {
    where: HardwareKitWhereInput;
    create: HardwareKitCreateInput;
    update: HardwareKitUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: HardwareKitWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortHardwareKitsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type HardwareKitListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    HardwareKitListTypeInfo,
    HardwareKitListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  HardwareKitListTypeInfo,
  HardwareKitListTypeInfo['fields']
>;

export type GlassColorListTypeInfo = {
  key: 'GlassColor';
  fields: 'id' | 'name' | 'image' | 'description' | 'parent';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly image?: string | null;
    readonly description?: string | null;
    readonly parent?: string | null;
  };
  inputs: {
    where: GlassColorWhereInput;
    create: GlassColorCreateInput;
    update: GlassColorUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: GlassColorWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortGlassColorsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type GlassColorListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    GlassColorListTypeInfo,
    GlassColorListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  GlassColorListTypeInfo,
  GlassColorListTypeInfo['fields']
>;

export type GlassListTypeInfo = {
  key: 'Glass';
  fields:
    | 'id'
    | 'name'
    | 'image'
    | 'description'
    | 'products'
    | 'productCategories'
    | 'colors';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly image?: string | null;
    readonly description?: string | null;
    readonly products?: string | null;
    readonly productCategories?: string | null;
    readonly colors?: string | null;
  };
  inputs: {
    where: GlassWhereInput;
    create: GlassCreateInput;
    update: GlassUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: GlassWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortGlassesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type GlassListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    GlassListTypeInfo,
    GlassListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  GlassListTypeInfo,
  GlassListTypeInfo['fields']
>;

export type ExteriorListTypeInfo = {
  key: 'Exterior';
  fields:
    | 'id'
    | 'name'
    | 'image'
    | 'description'
    | 'products'
    | 'productCategories';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly image?: string | null;
    readonly description?: string | null;
    readonly products?: string | null;
    readonly productCategories?: string | null;
  };
  inputs: {
    where: ExteriorWhereInput;
    create: ExteriorCreateInput;
    update: ExteriorUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ExteriorWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortExteriorsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ExteriorListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ExteriorListTypeInfo,
    ExteriorListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ExteriorListTypeInfo,
  ExteriorListTypeInfo['fields']
>;

export type DividedLiteListTypeInfo = {
  key: 'DividedLite';
  fields:
    | 'id'
    | 'name'
    | 'image'
    | 'description'
    | 'products'
    | 'productCategories';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly image?: string | null;
    readonly description?: string | null;
    readonly products?: string | null;
    readonly productCategories?: string | null;
  };
  inputs: {
    where: DividedLiteWhereInput;
    create: DividedLiteCreateInput;
    update: DividedLiteUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: DividedLiteWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortDividedLitesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type DividedLiteListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    DividedLiteListTypeInfo,
    DividedLiteListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  DividedLiteListTypeInfo,
  DividedLiteListTypeInfo['fields']
>;

export type BrickmoldAndTrimListTypeInfo = {
  key: 'BrickmoldAndTrim';
  fields:
    | 'id'
    | 'name'
    | 'image'
    | 'description'
    | 'products'
    | 'productCategories';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly image?: string | null;
    readonly description?: string | null;
    readonly products?: string | null;
    readonly productCategories?: string | null;
  };
  inputs: {
    where: BrickmoldAndTrimWhereInput;
    create: BrickmoldAndTrimCreateInput;
    update: BrickmoldAndTrimUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BrickmoldAndTrimWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBrickmoldAndTrimsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BrickmoldAndTrimListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BrickmoldAndTrimListTypeInfo,
    BrickmoldAndTrimListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BrickmoldAndTrimListTypeInfo,
  BrickmoldAndTrimListTypeInfo['fields']
>;

export type RoleListTypeInfo = {
  key: 'Role';
  fields:
    | 'id'
    | 'name'
    | 'canManageProducts'
    | 'canSeeOtherUsers'
    | 'canManageUsers'
    | 'canManageRoles'
    | 'assignedTo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly canManageProducts?: boolean | null;
    readonly canSeeOtherUsers?: boolean | null;
    readonly canManageUsers?: boolean | null;
    readonly canManageRoles?: boolean | null;
    readonly assignedTo?: string | null;
  };
  inputs: {
    where: RoleWhereInput;
    create: RoleCreateInput;
    update: RoleUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RoleWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRolesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RoleListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RoleListTypeInfo,
    RoleListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RoleListTypeInfo,
  RoleListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly ProductCategory: ProductCategoryListTypeInfo;
  readonly Product: ProductListTypeInfo;
  readonly Operation: OperationListTypeInfo;
  readonly Imagine: ImagineListTypeInfo;
  readonly ForgottenPasswordToken: ForgottenPasswordTokenListTypeInfo;
  readonly Dealer: DealerListTypeInfo;
  readonly ContactUsForm: ContactUsFormListTypeInfo;
  readonly BackEndUser: BackEndUserListTypeInfo;
  readonly Screen: ScreenListTypeInfo;
  readonly Interior: InteriorListTypeInfo;
  readonly HardwareKit: HardwareKitListTypeInfo;
  readonly GlassColor: GlassColorListTypeInfo;
  readonly Glass: GlassListTypeInfo;
  readonly Exterior: ExteriorListTypeInfo;
  readonly DividedLite: DividedLiteListTypeInfo;
  readonly BrickmoldAndTrim: BrickmoldAndTrimListTypeInfo;
  readonly Role: RoleListTypeInfo;
};
