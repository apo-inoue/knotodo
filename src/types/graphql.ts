import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  title: Scalars['String'];
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export type Categories_Constraint = 
  /** unique or primary key constraint */
  | 'category_pkey';

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "categories" */
export type Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "categories" */
export type Categories_Select_Column = 
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'title';

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  deleted_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "categories" */
export type Categories_Update_Column = 
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'title';

export type Color_Enum = 
  /** ブルー */
  | 'BLUE'
  /** デフォルト */
  | 'DEFAULT'
  /** グリーン */
  | 'GREEN'
  /** グレー */
  | 'GREY'
  /** オレンジ */
  | 'ORANGE'
  /** ピンク */
  | 'PINK';

/** expression to compare columns of type color_enum. All fields are combined with logical 'AND'. */
export type Color_Enum_Comparison_Exp = {
  _eq?: Maybe<Color_Enum>;
  _in?: Maybe<Array<Color_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Color_Enum>;
  _nin?: Maybe<Array<Color_Enum>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export type Order_By = 
  /** in the ascending order, nulls last */
  | 'asc'
  /** in the ascending order, nulls first */
  | 'asc_nulls_first'
  /** in the ascending order, nulls last */
  | 'asc_nulls_last'
  /** in the descending order, nulls first */
  | 'desc'
  /** in the descending order, nulls first */
  | 'desc_nulls_first'
  /** in the descending order, nulls last */
  | 'desc_nulls_last';

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  category_id: Scalars['Int'];
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  is_today: Scalars['Boolean'];
  title: Scalars['String'];
  urgency: Urgency_Enum;
  workload: Scalars['Int'];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields';
  avg?: Maybe<Todos_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
  stddev?: Maybe<Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Todos_Sum_Fields>;
  var_pop?: Maybe<Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Todos_Var_Samp_Fields>;
  variance?: Maybe<Todos_Variance_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todos" */
export type Todos_Aggregate_Order_By = {
  avg?: Maybe<Todos_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Todos_Max_Order_By>;
  min?: Maybe<Todos_Min_Order_By>;
  stddev?: Maybe<Todos_Stddev_Order_By>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Order_By>;
  sum?: Maybe<Todos_Sum_Order_By>;
  var_pop?: Maybe<Todos_Var_Pop_Order_By>;
  var_samp?: Maybe<Todos_Var_Samp_Order_By>;
  variance?: Maybe<Todos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: 'todos_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workload?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "todos" */
export type Todos_Avg_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  _not?: Maybe<Todos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  category_id?: Maybe<Int_Comparison_Exp>;
  completed_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_today?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  urgency?: Maybe<Urgency_Enum_Comparison_Exp>;
  workload?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export type Todos_Constraint = 
  /** unique or primary key constraint */
  | 'todo_pkey1';

/** input type for incrementing integer column in table "todos" */
export type Todos_Inc_Input = {
  category_id?: Maybe<Scalars['Int']>;
  workload?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  category_id?: Maybe<Scalars['Int']>;
  is_today?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  urgency?: Maybe<Urgency_Enum>;
  workload?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  workload?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "todos" */
export type Todos_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  workload?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "todos" */
export type Todos_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todos>;
};

/** input type for inserting object relation for remote table "todos" */
export type Todos_Obj_Rel_Insert_Input = {
  data: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns: Array<Todos_Update_Column>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** ordering options when selecting data from "todos" */
export type Todos_Order_By = {
  category_id?: Maybe<Order_By>;
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_today?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  urgency?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** primary key columns input for table: "todos" */
export type Todos_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todos" */
export type Todos_Select_Column = 
  /** column name */
  | 'category_id'
  /** column name */
  | 'completed_at'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'is_today'
  /** column name */
  | 'title'
  /** column name */
  | 'urgency'
  /** column name */
  | 'workload';

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  category_id?: Maybe<Scalars['Int']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  is_today?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  urgency?: Maybe<Urgency_Enum>;
  workload?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: 'todos_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workload?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "todos" */
export type Todos_Stddev_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: 'todos_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workload?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "todos" */
export type Todos_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: 'todos_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workload?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "todos" */
export type Todos_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: 'todos_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  workload?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todos" */
export type Todos_Sum_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** update columns of table "todos" */
export type Todos_Update_Column = 
  /** column name */
  | 'category_id'
  /** column name */
  | 'completed_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'is_today'
  /** column name */
  | 'title'
  /** column name */
  | 'urgency'
  /** column name */
  | 'workload';

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: 'todos_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workload?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "todos" */
export type Todos_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: 'todos_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workload?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "todos" */
export type Todos_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: 'todos_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  workload?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "todos" */
export type Todos_Variance_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
};

export type Urgency_Enum = 
  /** 月 */
  | 'MONTH'
  /** 週 */
  | 'WEEK'
  /** 年 */
  | 'YEAR';

/** expression to compare columns of type urgency_enum. All fields are combined with logical 'AND'. */
export type Urgency_Enum_Comparison_Exp = {
  _eq?: Maybe<Urgency_Enum>;
  _in?: Maybe<Array<Urgency_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Urgency_Enum>;
  _nin?: Maybe<Array<Urgency_Enum>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  auth_id: Scalars['String'];
  color?: Maybe<Color_Enum>;
  goal?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  auth_id?: Maybe<String_Comparison_Exp>;
  color?: Maybe<Color_Enum_Comparison_Exp>;
  goal?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint = 
  /** unique or primary key constraint */
  | 'user_pkey'
  /** unique or primary key constraint */
  | 'users_auth_id_key';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  color?: Maybe<Color_Enum>;
  goal?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  auth_id?: Maybe<Order_By>;
  color?: Maybe<Order_By>;
  goal?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export type Users_Select_Column = 
  /** column name */
  | 'auth_id'
  /** column name */
  | 'color'
  /** column name */
  | 'goal'
  /** column name */
  | 'id';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  auth_id?: Maybe<Scalars['String']>;
  color?: Maybe<Color_Enum>;
  goal?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export type Users_Update_Column = 
  /** column name */
  | 'auth_id'
  /** column name */
  | 'color'
  /** column name */
  | 'goal'
  /** column name */
  | 'nickname';

export type InsertCategoryMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type InsertCategoryMutation = (
  { __typename?: 'mutation_root' }
  & { insert_categories_one?: Maybe<(
    { __typename?: 'categories' }
    & Pick<Categories, 'id' | 'title'>
  )> }
);

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
}>;


export type UpdateCategoryMutation = (
  { __typename?: 'mutation_root' }
  & { update_categories_by_pk?: Maybe<(
    { __typename?: 'categories' }
    & Pick<Categories, 'id' | 'title'>
  )> }
);

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCategoryMutation = (
  { __typename?: 'mutation_root' }
  & { update_categories_by_pk?: Maybe<(
    { __typename?: 'categories' }
    & Pick<Categories, 'id' | 'title'>
  )> }
);

export type SeedDataCategoryMutationVariables = Exact<{ [key: string]: never; }>;


export type SeedDataCategoryMutation = (
  { __typename?: 'mutation_root' }
  & { insert_categories?: Maybe<(
    { __typename?: 'categories_mutation_response' }
    & { returning: Array<(
      { __typename?: 'categories' }
      & Pick<Categories, 'id' | 'title'>
    )> }
  )> }
);

export type SeedDataTodoMutationVariables = Exact<{
  category_id_work: Scalars['Int'];
  category_id_private: Scalars['Int'];
}>;


export type SeedDataTodoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todos?: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type InsertTodoMutationVariables = Exact<{
  title: Scalars['String'];
  urgency: Urgency_Enum;
  workload: Scalars['Int'];
  is_today: Scalars['Boolean'];
  category_id: Scalars['Int'];
}>;


export type InsertTodoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todos_one?: Maybe<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id'>
  )> }
);

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  urgency: Urgency_Enum;
  workload: Scalars['Int'];
  category_id: Scalars['Int'];
}>;


export type UpdateTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos_by_pk?: Maybe<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id'>
  )> }
);

export type CompleteTodoMutationVariables = Exact<{
  _eq: Scalars['Int'];
}>;


export type CompleteTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos?: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type DeleteTodoMutationVariables = Exact<{
  _eq: Scalars['Int'];
}>;


export type DeleteTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos?: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type SetTodayTodoMutationVariables = Exact<{
  _eq: Scalars['Int'];
}>;


export type SetTodayTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos?: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type RescheduleTodoMutationVariables = Exact<{
  _eq: Scalars['Int'];
}>;


export type RescheduleTodoMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos?: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type RestoreNotTodayMutationVariables = Exact<{
  _eq: Scalars['Int'];
}>;


export type RestoreNotTodayMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos?: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type RestoreTodayMutationVariables = Exact<{
  _eq: Scalars['Int'];
}>;


export type RestoreTodayMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos?: Maybe<(
    { __typename?: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type UpdateUserColorMutationVariables = Exact<{
  color?: Maybe<Color_Enum>;
  _eq?: Maybe<Scalars['String']>;
}>;


export type UpdateUserColorMutation = (
  { __typename?: 'mutation_root' }
  & { update_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'color'>
    )> }
  )> }
);

export type UpdateUserGoalMutationVariables = Exact<{
  goal?: Maybe<Scalars['String']>;
  _eq?: Maybe<Scalars['String']>;
}>;


export type UpdateUserGoalMutation = (
  { __typename?: 'mutation_root' }
  & { update_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'goal'>
    )> }
  )> }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'query_root' }
  & { categories: Array<(
    { __typename?: 'categories' }
    & Pick<Categories, 'id' | 'title'>
  )> }
);

export type TodayTodosQueryVariables = Exact<{
  _in?: Maybe<Array<Scalars['Int']>>;
  order_by?: Maybe<Array<Todos_Order_By>>;
}>;


export type TodayTodosQuery = (
  { __typename?: 'query_root' }
  & { todos: Array<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id' | 'title' | 'urgency' | 'workload' | 'is_today' | 'category_id'>
  )> }
);

export type FutureTodosQueryVariables = Exact<{
  _in?: Maybe<Array<Scalars['Int']>>;
  order_by?: Maybe<Array<Todos_Order_By>>;
}>;


export type FutureTodosQuery = (
  { __typename?: 'query_root' }
  & { todos: Array<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id' | 'title' | 'urgency' | 'workload' | 'is_today' | 'category_id'>
  )> }
);

export type PastTodosQueryVariables = Exact<{
  _in?: Maybe<Array<Scalars['Int']>>;
  order_by?: Maybe<Array<Todos_Order_By>>;
}>;


export type PastTodosQuery = (
  { __typename?: 'query_root' }
  & { todos: Array<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id' | 'title' | 'urgency' | 'workload' | 'is_today' | 'category_id'>
  )> }
);

export type AccomplishmentAndGoalQueryVariables = Exact<{
  _gte1: Scalars['timestamptz'];
  _gte2: Scalars['timestamptz'];
  _gte3: Scalars['timestamptz'];
}>;


export type AccomplishmentAndGoalQuery = (
  { __typename?: 'query_root' }
  & { week: (
    { __typename?: 'todos_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'todos_aggregate_fields' }
      & Pick<Todos_Aggregate_Fields, 'count'>
    )> }
  ), month: (
    { __typename?: 'todos_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'todos_aggregate_fields' }
      & Pick<Todos_Aggregate_Fields, 'count'>
    )> }
  ), year: (
    { __typename?: 'todos_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'todos_aggregate_fields' }
      & Pick<Todos_Aggregate_Fields, 'count'>
    )> }
  ), users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'goal'>
  )> }
);

export type TodayWorkloadTotalQueryVariables = Exact<{ [key: string]: never; }>;


export type TodayWorkloadTotalQuery = (
  { __typename?: 'query_root' }
  & { todos_aggregate: (
    { __typename?: 'todos_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'todos_aggregate_fields' }
      & { sum?: Maybe<(
        { __typename?: 'todos_sum_fields' }
        & Pick<Todos_Sum_Fields, 'workload'>
      )> }
    )> }
  ) }
);

export type UserColorQueryVariables = Exact<{ [key: string]: never; }>;


export type UserColorQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'color'>
  )> }
);

export type UserGoalQueryVariables = Exact<{ [key: string]: never; }>;


export type UserGoalQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'goal'>
  )> }
);


export const InsertCategoryDocument = gql`
    mutation InsertCategory($title: String!) {
  insert_categories_one(object: {title: $title}) {
    id
    title
  }
}
    `;
export type InsertCategoryMutationFn = Apollo.MutationFunction<InsertCategoryMutation, InsertCategoryMutationVariables>;

/**
 * __useInsertCategoryMutation__
 *
 * To run a mutation, you first call `useInsertCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCategoryMutation, { data, loading, error }] = useInsertCategoryMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useInsertCategoryMutation(baseOptions?: Apollo.MutationHookOptions<InsertCategoryMutation, InsertCategoryMutationVariables>) {
        return Apollo.useMutation<InsertCategoryMutation, InsertCategoryMutationVariables>(InsertCategoryDocument, baseOptions);
      }
export type InsertCategoryMutationHookResult = ReturnType<typeof useInsertCategoryMutation>;
export type InsertCategoryMutationResult = Apollo.MutationResult<InsertCategoryMutation>;
export type InsertCategoryMutationOptions = Apollo.BaseMutationOptions<InsertCategoryMutation, InsertCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: Int!, $title: String!) {
  update_categories_by_pk(pk_columns: {id: $id}, _set: {title: $title}) {
    id
    title
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, baseOptions);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: Int!) {
  update_categories_by_pk(pk_columns: {id: $id}, _set: {deleted_at: "now()"}) {
    id
    title
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, baseOptions);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const SeedDataCategoryDocument = gql`
    mutation SeedDataCategory {
  insert_categories(objects: [{title: "仕事"}, {title: "プライベート"}]) {
    returning {
      id
      title
    }
  }
}
    `;
export type SeedDataCategoryMutationFn = Apollo.MutationFunction<SeedDataCategoryMutation, SeedDataCategoryMutationVariables>;

/**
 * __useSeedDataCategoryMutation__
 *
 * To run a mutation, you first call `useSeedDataCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSeedDataCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [seedDataCategoryMutation, { data, loading, error }] = useSeedDataCategoryMutation({
 *   variables: {
 *   },
 * });
 */
export function useSeedDataCategoryMutation(baseOptions?: Apollo.MutationHookOptions<SeedDataCategoryMutation, SeedDataCategoryMutationVariables>) {
        return Apollo.useMutation<SeedDataCategoryMutation, SeedDataCategoryMutationVariables>(SeedDataCategoryDocument, baseOptions);
      }
export type SeedDataCategoryMutationHookResult = ReturnType<typeof useSeedDataCategoryMutation>;
export type SeedDataCategoryMutationResult = Apollo.MutationResult<SeedDataCategoryMutation>;
export type SeedDataCategoryMutationOptions = Apollo.BaseMutationOptions<SeedDataCategoryMutation, SeedDataCategoryMutationVariables>;
export const SeedDataTodoDocument = gql`
    mutation SeedDataTodo($category_id_work: Int!, $category_id_private: Int!) {
  insert_todos(objects: [{title: "例) 第一四半期決算の締め処理", urgency: WEEK, workload: 5, is_today: true, category_id: $category_id_work}, {title: "例) ケーキを買って帰る", urgency: WEEK, workload: 1, is_today: true, category_id: $category_id_private}]) {
    returning {
      id
    }
  }
}
    `;
export type SeedDataTodoMutationFn = Apollo.MutationFunction<SeedDataTodoMutation, SeedDataTodoMutationVariables>;

/**
 * __useSeedDataTodoMutation__
 *
 * To run a mutation, you first call `useSeedDataTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSeedDataTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [seedDataTodoMutation, { data, loading, error }] = useSeedDataTodoMutation({
 *   variables: {
 *      category_id_work: // value for 'category_id_work'
 *      category_id_private: // value for 'category_id_private'
 *   },
 * });
 */
export function useSeedDataTodoMutation(baseOptions?: Apollo.MutationHookOptions<SeedDataTodoMutation, SeedDataTodoMutationVariables>) {
        return Apollo.useMutation<SeedDataTodoMutation, SeedDataTodoMutationVariables>(SeedDataTodoDocument, baseOptions);
      }
export type SeedDataTodoMutationHookResult = ReturnType<typeof useSeedDataTodoMutation>;
export type SeedDataTodoMutationResult = Apollo.MutationResult<SeedDataTodoMutation>;
export type SeedDataTodoMutationOptions = Apollo.BaseMutationOptions<SeedDataTodoMutation, SeedDataTodoMutationVariables>;
export const InsertTodoDocument = gql`
    mutation InsertTodo($title: String!, $urgency: urgency_enum!, $workload: Int!, $is_today: Boolean!, $category_id: Int!) {
  insert_todos_one(object: {title: $title, urgency: $urgency, workload: $workload, is_today: $is_today, category_id: $category_id}) {
    id
  }
}
    `;
export type InsertTodoMutationFn = Apollo.MutationFunction<InsertTodoMutation, InsertTodoMutationVariables>;

/**
 * __useInsertTodoMutation__
 *
 * To run a mutation, you first call `useInsertTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTodoMutation, { data, loading, error }] = useInsertTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      urgency: // value for 'urgency'
 *      workload: // value for 'workload'
 *      is_today: // value for 'is_today'
 *      category_id: // value for 'category_id'
 *   },
 * });
 */
export function useInsertTodoMutation(baseOptions?: Apollo.MutationHookOptions<InsertTodoMutation, InsertTodoMutationVariables>) {
        return Apollo.useMutation<InsertTodoMutation, InsertTodoMutationVariables>(InsertTodoDocument, baseOptions);
      }
export type InsertTodoMutationHookResult = ReturnType<typeof useInsertTodoMutation>;
export type InsertTodoMutationResult = Apollo.MutationResult<InsertTodoMutation>;
export type InsertTodoMutationOptions = Apollo.BaseMutationOptions<InsertTodoMutation, InsertTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: Int!, $title: String!, $urgency: urgency_enum!, $workload: Int!, $category_id: Int!) {
  update_todos_by_pk(pk_columns: {id: $id}, _set: {title: $title, urgency: $urgency, workload: $workload, category_id: $category_id}) {
    id
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      urgency: // value for 'urgency'
 *      workload: // value for 'workload'
 *      category_id: // value for 'category_id'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const CompleteTodoDocument = gql`
    mutation CompleteTodo($_eq: Int!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {completed_at: "now()"}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type CompleteTodoMutationFn = Apollo.MutationFunction<CompleteTodoMutation, CompleteTodoMutationVariables>;

/**
 * __useCompleteTodoMutation__
 *
 * To run a mutation, you first call `useCompleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeTodoMutation, { data, loading, error }] = useCompleteTodoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useCompleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<CompleteTodoMutation, CompleteTodoMutationVariables>) {
        return Apollo.useMutation<CompleteTodoMutation, CompleteTodoMutationVariables>(CompleteTodoDocument, baseOptions);
      }
export type CompleteTodoMutationHookResult = ReturnType<typeof useCompleteTodoMutation>;
export type CompleteTodoMutationResult = Apollo.MutationResult<CompleteTodoMutation>;
export type CompleteTodoMutationOptions = Apollo.BaseMutationOptions<CompleteTodoMutation, CompleteTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($_eq: Int!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {deleted_at: "now()"}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, baseOptions);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const SetTodayTodoDocument = gql`
    mutation SetTodayTodo($_eq: Int!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {is_today: true}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type SetTodayTodoMutationFn = Apollo.MutationFunction<SetTodayTodoMutation, SetTodayTodoMutationVariables>;

/**
 * __useSetTodayTodoMutation__
 *
 * To run a mutation, you first call `useSetTodayTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTodayTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTodayTodoMutation, { data, loading, error }] = useSetTodayTodoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useSetTodayTodoMutation(baseOptions?: Apollo.MutationHookOptions<SetTodayTodoMutation, SetTodayTodoMutationVariables>) {
        return Apollo.useMutation<SetTodayTodoMutation, SetTodayTodoMutationVariables>(SetTodayTodoDocument, baseOptions);
      }
export type SetTodayTodoMutationHookResult = ReturnType<typeof useSetTodayTodoMutation>;
export type SetTodayTodoMutationResult = Apollo.MutationResult<SetTodayTodoMutation>;
export type SetTodayTodoMutationOptions = Apollo.BaseMutationOptions<SetTodayTodoMutation, SetTodayTodoMutationVariables>;
export const RescheduleTodoDocument = gql`
    mutation rescheduleTodo($_eq: Int!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {is_today: false}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type RescheduleTodoMutationFn = Apollo.MutationFunction<RescheduleTodoMutation, RescheduleTodoMutationVariables>;

/**
 * __useRescheduleTodoMutation__
 *
 * To run a mutation, you first call `useRescheduleTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRescheduleTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rescheduleTodoMutation, { data, loading, error }] = useRescheduleTodoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useRescheduleTodoMutation(baseOptions?: Apollo.MutationHookOptions<RescheduleTodoMutation, RescheduleTodoMutationVariables>) {
        return Apollo.useMutation<RescheduleTodoMutation, RescheduleTodoMutationVariables>(RescheduleTodoDocument, baseOptions);
      }
export type RescheduleTodoMutationHookResult = ReturnType<typeof useRescheduleTodoMutation>;
export type RescheduleTodoMutationResult = Apollo.MutationResult<RescheduleTodoMutation>;
export type RescheduleTodoMutationOptions = Apollo.BaseMutationOptions<RescheduleTodoMutation, RescheduleTodoMutationVariables>;
export const RestoreNotTodayDocument = gql`
    mutation RestoreNotToday($_eq: Int!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {is_today: false, completed_at: null, deleted_at: null}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type RestoreNotTodayMutationFn = Apollo.MutationFunction<RestoreNotTodayMutation, RestoreNotTodayMutationVariables>;

/**
 * __useRestoreNotTodayMutation__
 *
 * To run a mutation, you first call `useRestoreNotTodayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreNotTodayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreNotTodayMutation, { data, loading, error }] = useRestoreNotTodayMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useRestoreNotTodayMutation(baseOptions?: Apollo.MutationHookOptions<RestoreNotTodayMutation, RestoreNotTodayMutationVariables>) {
        return Apollo.useMutation<RestoreNotTodayMutation, RestoreNotTodayMutationVariables>(RestoreNotTodayDocument, baseOptions);
      }
export type RestoreNotTodayMutationHookResult = ReturnType<typeof useRestoreNotTodayMutation>;
export type RestoreNotTodayMutationResult = Apollo.MutationResult<RestoreNotTodayMutation>;
export type RestoreNotTodayMutationOptions = Apollo.BaseMutationOptions<RestoreNotTodayMutation, RestoreNotTodayMutationVariables>;
export const RestoreTodayDocument = gql`
    mutation RestoreToday($_eq: Int!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {is_today: true, completed_at: null, deleted_at: null}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type RestoreTodayMutationFn = Apollo.MutationFunction<RestoreTodayMutation, RestoreTodayMutationVariables>;

/**
 * __useRestoreTodayMutation__
 *
 * To run a mutation, you first call `useRestoreTodayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreTodayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreTodayMutation, { data, loading, error }] = useRestoreTodayMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useRestoreTodayMutation(baseOptions?: Apollo.MutationHookOptions<RestoreTodayMutation, RestoreTodayMutationVariables>) {
        return Apollo.useMutation<RestoreTodayMutation, RestoreTodayMutationVariables>(RestoreTodayDocument, baseOptions);
      }
export type RestoreTodayMutationHookResult = ReturnType<typeof useRestoreTodayMutation>;
export type RestoreTodayMutationResult = Apollo.MutationResult<RestoreTodayMutation>;
export type RestoreTodayMutationOptions = Apollo.BaseMutationOptions<RestoreTodayMutation, RestoreTodayMutationVariables>;
export const UpdateUserColorDocument = gql`
    mutation UpdateUserColor($color: color_enum, $_eq: String) {
  update_users(_set: {color: $color}, where: {auth_id: {_eq: $_eq}}) {
    affected_rows
    returning {
      id
      color
    }
  }
}
    `;
export type UpdateUserColorMutationFn = Apollo.MutationFunction<UpdateUserColorMutation, UpdateUserColorMutationVariables>;

/**
 * __useUpdateUserColorMutation__
 *
 * To run a mutation, you first call `useUpdateUserColorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserColorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserColorMutation, { data, loading, error }] = useUpdateUserColorMutation({
 *   variables: {
 *      color: // value for 'color'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useUpdateUserColorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserColorMutation, UpdateUserColorMutationVariables>) {
        return Apollo.useMutation<UpdateUserColorMutation, UpdateUserColorMutationVariables>(UpdateUserColorDocument, baseOptions);
      }
export type UpdateUserColorMutationHookResult = ReturnType<typeof useUpdateUserColorMutation>;
export type UpdateUserColorMutationResult = Apollo.MutationResult<UpdateUserColorMutation>;
export type UpdateUserColorMutationOptions = Apollo.BaseMutationOptions<UpdateUserColorMutation, UpdateUserColorMutationVariables>;
export const UpdateUserGoalDocument = gql`
    mutation UpdateUserGoal($goal: String, $_eq: String) {
  update_users(_set: {goal: $goal}, where: {auth_id: {_eq: $_eq}}) {
    affected_rows
    returning {
      id
      goal
    }
  }
}
    `;
export type UpdateUserGoalMutationFn = Apollo.MutationFunction<UpdateUserGoalMutation, UpdateUserGoalMutationVariables>;

/**
 * __useUpdateUserGoalMutation__
 *
 * To run a mutation, you first call `useUpdateUserGoalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserGoalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserGoalMutation, { data, loading, error }] = useUpdateUserGoalMutation({
 *   variables: {
 *      goal: // value for 'goal'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useUpdateUserGoalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserGoalMutation, UpdateUserGoalMutationVariables>) {
        return Apollo.useMutation<UpdateUserGoalMutation, UpdateUserGoalMutationVariables>(UpdateUserGoalDocument, baseOptions);
      }
export type UpdateUserGoalMutationHookResult = ReturnType<typeof useUpdateUserGoalMutation>;
export type UpdateUserGoalMutationResult = Apollo.MutationResult<UpdateUserGoalMutation>;
export type UpdateUserGoalMutationOptions = Apollo.BaseMutationOptions<UpdateUserGoalMutation, UpdateUserGoalMutationVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    title
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const TodayTodosDocument = gql`
    query TodayTodos($_in: [Int!], $order_by: [todos_order_by!]) {
  todos(where: {_and: {is_today: {_eq: true}, category_id: {_in: $_in}, completed_at: {_is_null: true}, deleted_at: {_is_null: true}}}, order_by: $order_by) {
    id
    title
    urgency
    workload
    is_today
    category_id
  }
}
    `;

/**
 * __useTodayTodosQuery__
 *
 * To run a query within a React component, call `useTodayTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodayTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodayTodosQuery({
 *   variables: {
 *      _in: // value for '_in'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useTodayTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodayTodosQuery, TodayTodosQueryVariables>) {
        return Apollo.useQuery<TodayTodosQuery, TodayTodosQueryVariables>(TodayTodosDocument, baseOptions);
      }
export function useTodayTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodayTodosQuery, TodayTodosQueryVariables>) {
          return Apollo.useLazyQuery<TodayTodosQuery, TodayTodosQueryVariables>(TodayTodosDocument, baseOptions);
        }
export type TodayTodosQueryHookResult = ReturnType<typeof useTodayTodosQuery>;
export type TodayTodosLazyQueryHookResult = ReturnType<typeof useTodayTodosLazyQuery>;
export type TodayTodosQueryResult = Apollo.QueryResult<TodayTodosQuery, TodayTodosQueryVariables>;
export const FutureTodosDocument = gql`
    query FutureTodos($_in: [Int!], $order_by: [todos_order_by!]) {
  todos(where: {is_today: {_eq: false}, category_id: {_in: $_in}, completed_at: {_is_null: true}, deleted_at: {_is_null: true}}, order_by: $order_by) {
    id
    title
    urgency
    workload
    is_today
    category_id
  }
}
    `;

/**
 * __useFutureTodosQuery__
 *
 * To run a query within a React component, call `useFutureTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFutureTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFutureTodosQuery({
 *   variables: {
 *      _in: // value for '_in'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useFutureTodosQuery(baseOptions?: Apollo.QueryHookOptions<FutureTodosQuery, FutureTodosQueryVariables>) {
        return Apollo.useQuery<FutureTodosQuery, FutureTodosQueryVariables>(FutureTodosDocument, baseOptions);
      }
export function useFutureTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FutureTodosQuery, FutureTodosQueryVariables>) {
          return Apollo.useLazyQuery<FutureTodosQuery, FutureTodosQueryVariables>(FutureTodosDocument, baseOptions);
        }
export type FutureTodosQueryHookResult = ReturnType<typeof useFutureTodosQuery>;
export type FutureTodosLazyQueryHookResult = ReturnType<typeof useFutureTodosLazyQuery>;
export type FutureTodosQueryResult = Apollo.QueryResult<FutureTodosQuery, FutureTodosQueryVariables>;
export const PastTodosDocument = gql`
    query PastTodos($_in: [Int!], $order_by: [todos_order_by!]) {
  todos(where: {category_id: {_in: $_in}, completed_at: {_is_null: false}, deleted_at: {_is_null: true}}, order_by: $order_by) {
    id
    title
    urgency
    workload
    is_today
    category_id
  }
}
    `;

/**
 * __usePastTodosQuery__
 *
 * To run a query within a React component, call `usePastTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePastTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePastTodosQuery({
 *   variables: {
 *      _in: // value for '_in'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function usePastTodosQuery(baseOptions?: Apollo.QueryHookOptions<PastTodosQuery, PastTodosQueryVariables>) {
        return Apollo.useQuery<PastTodosQuery, PastTodosQueryVariables>(PastTodosDocument, baseOptions);
      }
export function usePastTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PastTodosQuery, PastTodosQueryVariables>) {
          return Apollo.useLazyQuery<PastTodosQuery, PastTodosQueryVariables>(PastTodosDocument, baseOptions);
        }
export type PastTodosQueryHookResult = ReturnType<typeof usePastTodosQuery>;
export type PastTodosLazyQueryHookResult = ReturnType<typeof usePastTodosLazyQuery>;
export type PastTodosQueryResult = Apollo.QueryResult<PastTodosQuery, PastTodosQueryVariables>;
export const AccomplishmentAndGoalDocument = gql`
    query AccomplishmentAndGoal($_gte1: timestamptz!, $_gte2: timestamptz!, $_gte3: timestamptz!) {
  week: todos_aggregate(where: {completed_at: {_gte: $_gte1}}) {
    aggregate {
      count
    }
  }
  month: todos_aggregate(where: {completed_at: {_gte: $_gte2}}) {
    aggregate {
      count
    }
  }
  year: todos_aggregate(where: {completed_at: {_gte: $_gte3}}) {
    aggregate {
      count
    }
  }
  users {
    goal
  }
}
    `;

/**
 * __useAccomplishmentAndGoalQuery__
 *
 * To run a query within a React component, call `useAccomplishmentAndGoalQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccomplishmentAndGoalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccomplishmentAndGoalQuery({
 *   variables: {
 *      _gte1: // value for '_gte1'
 *      _gte2: // value for '_gte2'
 *      _gte3: // value for '_gte3'
 *   },
 * });
 */
export function useAccomplishmentAndGoalQuery(baseOptions?: Apollo.QueryHookOptions<AccomplishmentAndGoalQuery, AccomplishmentAndGoalQueryVariables>) {
        return Apollo.useQuery<AccomplishmentAndGoalQuery, AccomplishmentAndGoalQueryVariables>(AccomplishmentAndGoalDocument, baseOptions);
      }
export function useAccomplishmentAndGoalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccomplishmentAndGoalQuery, AccomplishmentAndGoalQueryVariables>) {
          return Apollo.useLazyQuery<AccomplishmentAndGoalQuery, AccomplishmentAndGoalQueryVariables>(AccomplishmentAndGoalDocument, baseOptions);
        }
export type AccomplishmentAndGoalQueryHookResult = ReturnType<typeof useAccomplishmentAndGoalQuery>;
export type AccomplishmentAndGoalLazyQueryHookResult = ReturnType<typeof useAccomplishmentAndGoalLazyQuery>;
export type AccomplishmentAndGoalQueryResult = Apollo.QueryResult<AccomplishmentAndGoalQuery, AccomplishmentAndGoalQueryVariables>;
export const TodayWorkloadTotalDocument = gql`
    query TodayWorkloadTotal {
  todos_aggregate(where: {is_today: {_eq: true}, completed_at: {_is_null: true}, deleted_at: {_is_null: true}}) {
    aggregate {
      sum {
        workload
      }
    }
  }
}
    `;

/**
 * __useTodayWorkloadTotalQuery__
 *
 * To run a query within a React component, call `useTodayWorkloadTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodayWorkloadTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodayWorkloadTotalQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodayWorkloadTotalQuery(baseOptions?: Apollo.QueryHookOptions<TodayWorkloadTotalQuery, TodayWorkloadTotalQueryVariables>) {
        return Apollo.useQuery<TodayWorkloadTotalQuery, TodayWorkloadTotalQueryVariables>(TodayWorkloadTotalDocument, baseOptions);
      }
export function useTodayWorkloadTotalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodayWorkloadTotalQuery, TodayWorkloadTotalQueryVariables>) {
          return Apollo.useLazyQuery<TodayWorkloadTotalQuery, TodayWorkloadTotalQueryVariables>(TodayWorkloadTotalDocument, baseOptions);
        }
export type TodayWorkloadTotalQueryHookResult = ReturnType<typeof useTodayWorkloadTotalQuery>;
export type TodayWorkloadTotalLazyQueryHookResult = ReturnType<typeof useTodayWorkloadTotalLazyQuery>;
export type TodayWorkloadTotalQueryResult = Apollo.QueryResult<TodayWorkloadTotalQuery, TodayWorkloadTotalQueryVariables>;
export const UserColorDocument = gql`
    query UserColor {
  users {
    id
    color
  }
}
    `;

/**
 * __useUserColorQuery__
 *
 * To run a query within a React component, call `useUserColorQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserColorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserColorQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserColorQuery(baseOptions?: Apollo.QueryHookOptions<UserColorQuery, UserColorQueryVariables>) {
        return Apollo.useQuery<UserColorQuery, UserColorQueryVariables>(UserColorDocument, baseOptions);
      }
export function useUserColorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserColorQuery, UserColorQueryVariables>) {
          return Apollo.useLazyQuery<UserColorQuery, UserColorQueryVariables>(UserColorDocument, baseOptions);
        }
export type UserColorQueryHookResult = ReturnType<typeof useUserColorQuery>;
export type UserColorLazyQueryHookResult = ReturnType<typeof useUserColorLazyQuery>;
export type UserColorQueryResult = Apollo.QueryResult<UserColorQuery, UserColorQueryVariables>;
export const UserGoalDocument = gql`
    query UserGoal {
  users {
    id
    goal
  }
}
    `;

/**
 * __useUserGoalQuery__
 *
 * To run a query within a React component, call `useUserGoalQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGoalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGoalQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGoalQuery(baseOptions?: Apollo.QueryHookOptions<UserGoalQuery, UserGoalQueryVariables>) {
        return Apollo.useQuery<UserGoalQuery, UserGoalQueryVariables>(UserGoalDocument, baseOptions);
      }
export function useUserGoalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserGoalQuery, UserGoalQueryVariables>) {
          return Apollo.useLazyQuery<UserGoalQuery, UserGoalQueryVariables>(UserGoalDocument, baseOptions);
        }
export type UserGoalQueryHookResult = ReturnType<typeof useUserGoalQuery>;
export type UserGoalLazyQueryHookResult = ReturnType<typeof useUserGoalLazyQuery>;
export type UserGoalQueryResult = Apollo.QueryResult<UserGoalQuery, UserGoalQueryVariables>;