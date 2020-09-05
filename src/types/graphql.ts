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
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: Maybe<Scalars['Boolean']>;
  _gt: Maybe<Scalars['Boolean']>;
  _gte: Maybe<Scalars['Boolean']>;
  _in: Maybe<Array<Scalars['Boolean']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['Boolean']>;
  _lte: Maybe<Scalars['Boolean']>;
  _neq: Maybe<Scalars['Boolean']>;
  _nin: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: Maybe<Scalars['Int']>;
  _gt: Maybe<Scalars['Int']>;
  _gte: Maybe<Scalars['Int']>;
  _in: Maybe<Array<Scalars['Int']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['Int']>;
  _lte: Maybe<Scalars['Int']>;
  _neq: Maybe<Scalars['Int']>;
  _nin: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: Maybe<Scalars['String']>;
  _gt: Maybe<Scalars['String']>;
  _gte: Maybe<Scalars['String']>;
  _ilike: Maybe<Scalars['String']>;
  _in: Maybe<Array<Scalars['String']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _like: Maybe<Scalars['String']>;
  _lt: Maybe<Scalars['String']>;
  _lte: Maybe<Scalars['String']>;
  _neq: Maybe<Scalars['String']>;
  _nilike: Maybe<Scalars['String']>;
  _nin: Maybe<Array<Scalars['String']>>;
  _nlike: Maybe<Scalars['String']>;
  _nsimilar: Maybe<Scalars['String']>;
  _similar: Maybe<Scalars['String']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename: 'categories';
  category: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregated array relationship */
  todos_aggregate: Todos_Aggregate;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};


/** columns and relationships of "categories" */
export type CategoriesTodosArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesTodos_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  on_conflict: Maybe<Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  _not: Maybe<Categories_Bool_Exp>;
  _or: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  category: Maybe<String_Comparison_Exp>;
  id: Maybe<Uuid_Comparison_Exp>;
  todos: Maybe<Todos_Bool_Exp>;
  user: Maybe<Users_Bool_Exp>;
  user_id: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export type Categories_Constraint = 
  /** unique or primary key constraint */
  | 'categories_pkey';

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  category: Maybe<Scalars['String']>;
  todos: Maybe<Todos_Arr_Rel_Insert_Input>;
  user: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename: 'categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  on_conflict: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns: Array<Categories_Update_Column>;
  where: Maybe<Categories_Bool_Exp>;
};

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  category: Maybe<Order_By>;
  id: Maybe<Order_By>;
  todos_aggregate: Maybe<Todos_Aggregate_Order_By>;
  user: Maybe<Users_Order_By>;
  user_id: Maybe<Order_By>;
};

/** primary key columns input for table: "categories" */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export type Categories_Select_Column = 
  /** column name */
  | 'category'
  /** column name */
  | 'id'
  /** column name */
  | 'user_id';

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  category: Maybe<Scalars['String']>;
};

/** update columns of table "categories" */
export type Categories_Update_Column = 
  /** column name */
  | 'category';

/** mutation root */
export type Mutation_Root = {
  __typename: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk: Maybe<Categories>;
  /** delete data from the table: "todos" */
  delete_todos: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk: Maybe<Todos>;
  /** delete data from the table: "urgency" */
  delete_urgency: Maybe<Urgency_Mutation_Response>;
  /** delete single row from the table: "urgency" */
  delete_urgency_by_pk: Maybe<Urgency>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** insert data into the table: "categories" */
  insert_categories: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one: Maybe<Categories>;
  /** insert data into the table: "todos" */
  insert_todos: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one: Maybe<Todos>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk: Maybe<Categories>;
  /** update data of the table: "todos" */
  update_todos: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk: Maybe<Todos>;
  /** update data of the table: "urgency" */
  update_urgency: Maybe<Urgency_Mutation_Response>;
  /** update single row of the table: "urgency" */
  update_urgency_by_pk: Maybe<Urgency>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UrgencyArgs = {
  where: Urgency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Urgency_By_PkArgs = {
  urgency_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _set: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _set: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UrgencyArgs = {
  _set: Maybe<Urgency_Set_Input>;
  where: Urgency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Urgency_By_PkArgs = {
  _set: Maybe<Urgency_Set_Input>;
  pk_columns: Urgency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set: Maybe<Users_Set_Input>;
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
  __typename: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk: Maybe<Categories>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: Maybe<Todos>;
  /** fetch data from the table: "urgency" */
  urgency: Array<Urgency>;
  /** fetch data from the table: "urgency" using primary key columns */
  urgency_by_pk: Maybe<Urgency>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


/** query root */
export type Query_RootCategoriesArgs = {
  distinct_on: Maybe<Array<Categories_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Categories_Order_By>>;
  where: Maybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTodosArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootUrgencyArgs = {
  distinct_on: Maybe<Array<Urgency_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Urgency_Order_By>>;
  where: Maybe<Urgency_Bool_Exp>;
};


/** query root */
export type Query_RootUrgency_By_PkArgs = {
  urgency_type: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on: Maybe<Array<Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Users_Order_By>>;
  where: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk: Maybe<Categories>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: Maybe<Todos>;
  /** fetch data from the table: "urgency" */
  urgency: Array<Urgency>;
  /** fetch data from the table: "urgency" using primary key columns */
  urgency_by_pk: Maybe<Urgency>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootCategoriesArgs = {
  distinct_on: Maybe<Array<Categories_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Categories_Order_By>>;
  where: Maybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTodosArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUrgencyArgs = {
  distinct_on: Maybe<Array<Urgency_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Urgency_Order_By>>;
  where: Maybe<Urgency_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUrgency_By_PkArgs = {
  urgency_type: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on: Maybe<Array<Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Users_Order_By>>;
  where: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/**
 * urgency
 * 
 * 
 * columns and relationships of "todos"
 */
export type Todos = {
  __typename: 'todos';
  category: Maybe<Scalars['uuid']>;
  /** An object relationship */
  categoryByCategory: Maybe<Categories>;
  id: Scalars['String'];
  isCompleted: Scalars['Boolean'];
  isToday: Scalars['Boolean'];
  title: Scalars['String'];
  urgency: Urgency_Enum;
  /** An object relationship */
  urgencyByUrgency: Urgency;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
  workload: Scalars['Int'];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename: 'todos_aggregate';
  aggregate: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename: 'todos_aggregate_fields';
  avg: Maybe<Todos_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<Todos_Max_Fields>;
  min: Maybe<Todos_Min_Fields>;
  stddev: Maybe<Todos_Stddev_Fields>;
  stddev_pop: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Todos_Stddev_Samp_Fields>;
  sum: Maybe<Todos_Sum_Fields>;
  var_pop: Maybe<Todos_Var_Pop_Fields>;
  var_samp: Maybe<Todos_Var_Samp_Fields>;
  variance: Maybe<Todos_Variance_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<Todos_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todos" */
export type Todos_Aggregate_Order_By = {
  avg: Maybe<Todos_Avg_Order_By>;
  count: Maybe<Order_By>;
  max: Maybe<Todos_Max_Order_By>;
  min: Maybe<Todos_Min_Order_By>;
  stddev: Maybe<Todos_Stddev_Order_By>;
  stddev_pop: Maybe<Todos_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<Todos_Stddev_Samp_Order_By>;
  sum: Maybe<Todos_Sum_Order_By>;
  var_pop: Maybe<Todos_Var_Pop_Order_By>;
  var_samp: Maybe<Todos_Var_Samp_Order_By>;
  variance: Maybe<Todos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  on_conflict: Maybe<Todos_On_Conflict>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename: 'todos_avg_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "todos" */
export type Todos_Avg_Order_By = {
  workload: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  _not: Maybe<Todos_Bool_Exp>;
  _or: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  category: Maybe<Uuid_Comparison_Exp>;
  categoryByCategory: Maybe<Categories_Bool_Exp>;
  id: Maybe<String_Comparison_Exp>;
  isCompleted: Maybe<Boolean_Comparison_Exp>;
  isToday: Maybe<Boolean_Comparison_Exp>;
  title: Maybe<String_Comparison_Exp>;
  urgency: Maybe<Urgency_Enum_Comparison_Exp>;
  urgencyByUrgency: Maybe<Urgency_Bool_Exp>;
  user: Maybe<Users_Bool_Exp>;
  user_id: Maybe<String_Comparison_Exp>;
  workload: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export type Todos_Constraint = 
  /** unique or primary key constraint */
  | 'todo_pkey';

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  category: Maybe<Scalars['uuid']>;
  categoryByCategory: Maybe<Categories_Obj_Rel_Insert_Input>;
  isCompleted: Maybe<Scalars['Boolean']>;
  isToday: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  urgency: Maybe<Urgency_Enum>;
  user: Maybe<Users_Obj_Rel_Insert_Input>;
  workload: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename: 'todos_max_fields';
  category: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['String']>;
  workload: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "todos" */
export type Todos_Max_Order_By = {
  category: Maybe<Order_By>;
  id: Maybe<Order_By>;
  title: Maybe<Order_By>;
  user_id: Maybe<Order_By>;
  workload: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename: 'todos_min_fields';
  category: Maybe<Scalars['uuid']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  user_id: Maybe<Scalars['String']>;
  workload: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "todos" */
export type Todos_Min_Order_By = {
  category: Maybe<Order_By>;
  id: Maybe<Order_By>;
  title: Maybe<Order_By>;
  user_id: Maybe<Order_By>;
  workload: Maybe<Order_By>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename: 'todos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todos>;
};

/** input type for inserting object relation for remote table "todos" */
export type Todos_Obj_Rel_Insert_Input = {
  data: Todos_Insert_Input;
  on_conflict: Maybe<Todos_On_Conflict>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns: Array<Todos_Update_Column>;
  where: Maybe<Todos_Bool_Exp>;
};

/** ordering options when selecting data from "todos" */
export type Todos_Order_By = {
  category: Maybe<Order_By>;
  categoryByCategory: Maybe<Categories_Order_By>;
  id: Maybe<Order_By>;
  isCompleted: Maybe<Order_By>;
  isToday: Maybe<Order_By>;
  title: Maybe<Order_By>;
  urgency: Maybe<Order_By>;
  urgencyByUrgency: Maybe<Urgency_Order_By>;
  user: Maybe<Users_Order_By>;
  user_id: Maybe<Order_By>;
  workload: Maybe<Order_By>;
};

/** primary key columns input for table: "todos" */
export type Todos_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "todos" */
export type Todos_Select_Column = 
  /** column name */
  | 'category'
  /** column name */
  | 'id'
  /** column name */
  | 'isCompleted'
  /** column name */
  | 'isToday'
  /** column name */
  | 'title'
  /** column name */
  | 'urgency'
  /** column name */
  | 'user_id'
  /** column name */
  | 'workload';

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  isCompleted: Maybe<Scalars['Boolean']>;
  isToday: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  urgency: Maybe<Urgency_Enum>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename: 'todos_stddev_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "todos" */
export type Todos_Stddev_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename: 'todos_stddev_pop_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "todos" */
export type Todos_Stddev_Pop_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename: 'todos_stddev_samp_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "todos" */
export type Todos_Stddev_Samp_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename: 'todos_sum_fields';
  workload: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todos" */
export type Todos_Sum_Order_By = {
  workload: Maybe<Order_By>;
};

/** update columns of table "todos" */
export type Todos_Update_Column = 
  /** column name */
  | 'isCompleted'
  /** column name */
  | 'isToday'
  /** column name */
  | 'title'
  /** column name */
  | 'urgency';

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename: 'todos_var_pop_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "todos" */
export type Todos_Var_Pop_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename: 'todos_var_samp_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "todos" */
export type Todos_Var_Samp_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename: 'todos_variance_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "todos" */
export type Todos_Variance_Order_By = {
  workload: Maybe<Order_By>;
};

/** columns and relationships of "urgency" */
export type Urgency = {
  __typename: 'urgency';
  id: Maybe<Scalars['String']>;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregated array relationship */
  todos_aggregate: Todos_Aggregate;
  urgency_type: Scalars['String'];
};


/** columns and relationships of "urgency" */
export type UrgencyTodosArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "urgency" */
export type UrgencyTodos_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "urgency". All fields are combined with a logical 'AND'. */
export type Urgency_Bool_Exp = {
  _and: Maybe<Array<Maybe<Urgency_Bool_Exp>>>;
  _not: Maybe<Urgency_Bool_Exp>;
  _or: Maybe<Array<Maybe<Urgency_Bool_Exp>>>;
  id: Maybe<String_Comparison_Exp>;
  todos: Maybe<Todos_Bool_Exp>;
  urgency_type: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "urgency" */
export type Urgency_Constraint = 
  /** unique or primary key constraint */
  | 'urgency_id_key'
  /** unique or primary key constraint */
  | 'urgency_pkey';

export type Urgency_Enum = 
  /** 2 */
  | 'month'
  /** 1 */
  | 'week'
  /** 3 */
  | 'year';

/** expression to compare columns of type urgency_enum. All fields are combined with logical 'AND'. */
export type Urgency_Enum_Comparison_Exp = {
  _eq: Maybe<Urgency_Enum>;
  _in: Maybe<Array<Urgency_Enum>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _neq: Maybe<Urgency_Enum>;
  _nin: Maybe<Array<Urgency_Enum>>;
};

/** response of any mutation on the table "urgency" */
export type Urgency_Mutation_Response = {
  __typename: 'urgency_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Urgency>;
};

/** on conflict condition type for table "urgency" */
export type Urgency_On_Conflict = {
  constraint: Urgency_Constraint;
  update_columns: Array<Urgency_Update_Column>;
  where: Maybe<Urgency_Bool_Exp>;
};

/** ordering options when selecting data from "urgency" */
export type Urgency_Order_By = {
  id: Maybe<Order_By>;
  todos_aggregate: Maybe<Todos_Aggregate_Order_By>;
  urgency_type: Maybe<Order_By>;
};

/** primary key columns input for table: "urgency" */
export type Urgency_Pk_Columns_Input = {
  urgency_type: Scalars['String'];
};

/** select columns of table "urgency" */
export type Urgency_Select_Column = 
  /** column name */
  | 'id'
  /** column name */
  | 'urgency_type';

/** input type for updating data in table "urgency" */
export type Urgency_Set_Input = {
  id: Maybe<Scalars['String']>;
  urgency_type: Maybe<Scalars['String']>;
};

/** update columns of table "urgency" */
export type Urgency_Update_Column = 
  /** column name */
  | 'id'
  /** column name */
  | 'urgency_type';

/** columns and relationships of "users" */
export type Users = {
  __typename: 'users';
  /** An array relationship */
  categories: Array<Categories>;
  id: Scalars['String'];
  nickname: Scalars['String'];
  /** An array relationship */
  tousers: Array<Todos>;
  /** An aggregated array relationship */
  tousers_aggregate: Todos_Aggregate;
};


/** columns and relationships of "users" */
export type UsersCategoriesArgs = {
  distinct_on: Maybe<Array<Categories_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Categories_Order_By>>;
  where: Maybe<Categories_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTousersArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTousers_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not: Maybe<Users_Bool_Exp>;
  _or: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  categories: Maybe<Categories_Bool_Exp>;
  id: Maybe<String_Comparison_Exp>;
  nickname: Maybe<String_Comparison_Exp>;
  tousers: Maybe<Todos_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint = 
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  categories: Maybe<Categories_Arr_Rel_Insert_Input>;
  id: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  tousers: Maybe<Todos_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id: Maybe<Order_By>;
  nickname: Maybe<Order_By>;
  tousers_aggregate: Maybe<Todos_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export type Users_Select_Column = 
  /** column name */
  | 'id'
  /** column name */
  | 'nickname';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export type Users_Update_Column = 
  /** column name */
  | 'id'
  /** column name */
  | 'nickname';


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: Maybe<Scalars['uuid']>;
  _gt: Maybe<Scalars['uuid']>;
  _gte: Maybe<Scalars['uuid']>;
  _in: Maybe<Array<Scalars['uuid']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['uuid']>;
  _lte: Maybe<Scalars['uuid']>;
  _neq: Maybe<Scalars['uuid']>;
  _nin: Maybe<Array<Scalars['uuid']>>;
};

export type InsertCategoryMutationVariables = Exact<{
  category?: Maybe<Scalars['String']>;
}>;


export type InsertCategoryMutation = (
  { __typename: 'mutation_root' }
  & { insert_categories_one: Maybe<(
    { __typename: 'categories' }
    & Pick<Categories, 'id'>
  )> }
);

export type InsertToDoMutationVariables = Exact<{
  isCompleted?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  urgency?: Maybe<Urgency_Enum>;
  isToday?: Maybe<Scalars['Boolean']>;
  workload?: Maybe<Scalars['Int']>;
}>;


export type InsertToDoMutation = (
  { __typename: 'mutation_root' }
  & { insert_todos_one: Maybe<(
    { __typename: 'todos' }
    & Pick<Todos, 'id'>
  )> }
);

export type CompleteToDoMutationVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type CompleteToDoMutation = (
  { __typename: 'mutation_root' }
  & { update_todos: Maybe<(
    { __typename: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type DeleteToDoMutationVariables = Exact<{
  _eq: Maybe<Scalars['String']>;
}>;


export type DeleteToDoMutation = (
  { __typename: 'mutation_root' }
  & { delete_todos: Maybe<(
    { __typename: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
  )> }
);

export type SetTodayTodoMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type SetTodayTodoMutation = (
  { __typename: 'mutation_root' }
  & { update_todos_by_pk: Maybe<(
    { __typename: 'todos' }
    & Pick<Todos, 'id' | 'title'>
  )> }
);

export type AllCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoryQuery = (
  { __typename: 'query_root' }
  & { categories: Array<(
    { __typename: 'categories' }
    & Pick<Categories, 'category' | 'id'>
  )> }
);

export type TodayTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodayTodosQuery = (
  { __typename: 'query_root' }
  & { todos: Array<(
    { __typename: 'todos' }
    & Pick<Todos, 'id' | 'isCompleted' | 'isToday' | 'title' | 'urgency' | 'category' | 'workload'>
  )> }
);

export type NotTodayTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type NotTodayTodosQuery = (
  { __typename: 'query_root' }
  & { todos: Array<(
    { __typename: 'todos' }
    & Pick<Todos, 'id' | 'isCompleted' | 'isToday' | 'title' | 'urgency' | 'category' | 'workload'>
  )> }
);

export type CompletedTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type CompletedTodosQuery = (
  { __typename: 'query_root' }
  & { todos: Array<(
    { __typename: 'todos' }
    & Pick<Todos, 'id' | 'isCompleted' | 'isToday' | 'title' | 'urgency' | 'category' | 'workload'>
  )> }
);


export const InsertCategoryDocument = gql`
    mutation InsertCategory($category: String = "") {
  insert_categories_one(object: {category: $category}) {
    id
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
 *      category: // value for 'category'
 *   },
 * });
 */
export function useInsertCategoryMutation(baseOptions?: Apollo.MutationHookOptions<InsertCategoryMutation, InsertCategoryMutationVariables>) {
        return Apollo.useMutation<InsertCategoryMutation, InsertCategoryMutationVariables>(InsertCategoryDocument, baseOptions);
      }
export type InsertCategoryMutationHookResult = ReturnType<typeof useInsertCategoryMutation>;
export type InsertCategoryMutationResult = Apollo.MutationResult<InsertCategoryMutation>;
export type InsertCategoryMutationOptions = Apollo.BaseMutationOptions<InsertCategoryMutation, InsertCategoryMutationVariables>;
export const InsertToDoDocument = gql`
    mutation InsertToDo($isCompleted: Boolean = false, $title: String = "", $urgency: urgency_enum = month, $isToday: Boolean = true, $workload: Int = 1) {
  insert_todos_one(object: {isCompleted: $isCompleted, isToday: $isToday, title: $title, urgency: $urgency, workload: $workload}) {
    id
  }
}
    `;
export type InsertToDoMutationFn = Apollo.MutationFunction<InsertToDoMutation, InsertToDoMutationVariables>;

/**
 * __useInsertToDoMutation__
 *
 * To run a mutation, you first call `useInsertToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertToDoMutation, { data, loading, error }] = useInsertToDoMutation({
 *   variables: {
 *      isCompleted: // value for 'isCompleted'
 *      title: // value for 'title'
 *      urgency: // value for 'urgency'
 *      isToday: // value for 'isToday'
 *      workload: // value for 'workload'
 *   },
 * });
 */
export function useInsertToDoMutation(baseOptions?: Apollo.MutationHookOptions<InsertToDoMutation, InsertToDoMutationVariables>) {
        return Apollo.useMutation<InsertToDoMutation, InsertToDoMutationVariables>(InsertToDoDocument, baseOptions);
      }
export type InsertToDoMutationHookResult = ReturnType<typeof useInsertToDoMutation>;
export type InsertToDoMutationResult = Apollo.MutationResult<InsertToDoMutation>;
export type InsertToDoMutationOptions = Apollo.BaseMutationOptions<InsertToDoMutation, InsertToDoMutationVariables>;
export const CompleteToDoDocument = gql`
    mutation CompleteToDo($_eq: String!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {isCompleted: true}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type CompleteToDoMutationFn = Apollo.MutationFunction<CompleteToDoMutation, CompleteToDoMutationVariables>;

/**
 * __useCompleteToDoMutation__
 *
 * To run a mutation, you first call `useCompleteToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeToDoMutation, { data, loading, error }] = useCompleteToDoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useCompleteToDoMutation(baseOptions?: Apollo.MutationHookOptions<CompleteToDoMutation, CompleteToDoMutationVariables>) {
        return Apollo.useMutation<CompleteToDoMutation, CompleteToDoMutationVariables>(CompleteToDoDocument, baseOptions);
      }
export type CompleteToDoMutationHookResult = ReturnType<typeof useCompleteToDoMutation>;
export type CompleteToDoMutationResult = Apollo.MutationResult<CompleteToDoMutation>;
export type CompleteToDoMutationOptions = Apollo.BaseMutationOptions<CompleteToDoMutation, CompleteToDoMutationVariables>;
export const DeleteToDoDocument = gql`
    mutation DeleteToDo($_eq: String) {
  delete_todos(where: {id: {_eq: $_eq}}) {
    affected_rows
  }
}
    `;
export type DeleteToDoMutationFn = Apollo.MutationFunction<DeleteToDoMutation, DeleteToDoMutationVariables>;

/**
 * __useDeleteToDoMutation__
 *
 * To run a mutation, you first call `useDeleteToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteToDoMutation, { data, loading, error }] = useDeleteToDoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteToDoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteToDoMutation, DeleteToDoMutationVariables>) {
        return Apollo.useMutation<DeleteToDoMutation, DeleteToDoMutationVariables>(DeleteToDoDocument, baseOptions);
      }
export type DeleteToDoMutationHookResult = ReturnType<typeof useDeleteToDoMutation>;
export type DeleteToDoMutationResult = Apollo.MutationResult<DeleteToDoMutation>;
export type DeleteToDoMutationOptions = Apollo.BaseMutationOptions<DeleteToDoMutation, DeleteToDoMutationVariables>;
export const SetTodayTodoDocument = gql`
    mutation SetTodayTodo($id: String!) {
  update_todos_by_pk(pk_columns: {id: $id}, _set: {isToday: true}) {
    __typename
    id
    title
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
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSetTodayTodoMutation(baseOptions?: Apollo.MutationHookOptions<SetTodayTodoMutation, SetTodayTodoMutationVariables>) {
        return Apollo.useMutation<SetTodayTodoMutation, SetTodayTodoMutationVariables>(SetTodayTodoDocument, baseOptions);
      }
export type SetTodayTodoMutationHookResult = ReturnType<typeof useSetTodayTodoMutation>;
export type SetTodayTodoMutationResult = Apollo.MutationResult<SetTodayTodoMutation>;
export type SetTodayTodoMutationOptions = Apollo.BaseMutationOptions<SetTodayTodoMutation, SetTodayTodoMutationVariables>;
export const AllCategoryDocument = gql`
    query AllCategory {
  categories {
    category
    id
  }
}
    `;

/**
 * __useAllCategoryQuery__
 *
 * To run a query within a React component, call `useAllCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoryQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoryQuery, AllCategoryQueryVariables>) {
        return Apollo.useQuery<AllCategoryQuery, AllCategoryQueryVariables>(AllCategoryDocument, baseOptions);
      }
export function useAllCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoryQuery, AllCategoryQueryVariables>) {
          return Apollo.useLazyQuery<AllCategoryQuery, AllCategoryQueryVariables>(AllCategoryDocument, baseOptions);
        }
export type AllCategoryQueryHookResult = ReturnType<typeof useAllCategoryQuery>;
export type AllCategoryLazyQueryHookResult = ReturnType<typeof useAllCategoryLazyQuery>;
export type AllCategoryQueryResult = Apollo.QueryResult<AllCategoryQuery, AllCategoryQueryVariables>;
export const TodayTodosDocument = gql`
    query todayTodos {
  todos(where: {isToday: {_eq: true}, isCompleted: {_eq: false}}) {
    id
    isCompleted
    isToday
    title
    urgency
    category
    workload
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
export const NotTodayTodosDocument = gql`
    query notTodayTodos {
  todos(where: {isToday: {_eq: false}, isCompleted: {_eq: false}}) {
    id
    isCompleted
    isToday
    title
    urgency
    category
    workload
  }
}
    `;

/**
 * __useNotTodayTodosQuery__
 *
 * To run a query within a React component, call `useNotTodayTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotTodayTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotTodayTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotTodayTodosQuery(baseOptions?: Apollo.QueryHookOptions<NotTodayTodosQuery, NotTodayTodosQueryVariables>) {
        return Apollo.useQuery<NotTodayTodosQuery, NotTodayTodosQueryVariables>(NotTodayTodosDocument, baseOptions);
      }
export function useNotTodayTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotTodayTodosQuery, NotTodayTodosQueryVariables>) {
          return Apollo.useLazyQuery<NotTodayTodosQuery, NotTodayTodosQueryVariables>(NotTodayTodosDocument, baseOptions);
        }
export type NotTodayTodosQueryHookResult = ReturnType<typeof useNotTodayTodosQuery>;
export type NotTodayTodosLazyQueryHookResult = ReturnType<typeof useNotTodayTodosLazyQuery>;
export type NotTodayTodosQueryResult = Apollo.QueryResult<NotTodayTodosQuery, NotTodayTodosQueryVariables>;
export const CompletedTodosDocument = gql`
    query completedTodos {
  todos(where: {isCompleted: {_eq: true}}) {
    id
    isCompleted
    isToday
    title
    urgency
    category
    workload
  }
}
    `;

/**
 * __useCompletedTodosQuery__
 *
 * To run a query within a React component, call `useCompletedTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompletedTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompletedTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompletedTodosQuery(baseOptions?: Apollo.QueryHookOptions<CompletedTodosQuery, CompletedTodosQueryVariables>) {
        return Apollo.useQuery<CompletedTodosQuery, CompletedTodosQueryVariables>(CompletedTodosDocument, baseOptions);
      }
export function useCompletedTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompletedTodosQuery, CompletedTodosQueryVariables>) {
          return Apollo.useLazyQuery<CompletedTodosQuery, CompletedTodosQueryVariables>(CompletedTodosDocument, baseOptions);
        }
export type CompletedTodosQueryHookResult = ReturnType<typeof useCompletedTodosQuery>;
export type CompletedTodosLazyQueryHookResult = ReturnType<typeof useCompletedTodosLazyQuery>;
export type CompletedTodosQueryResult = Apollo.QueryResult<CompletedTodosQuery, CompletedTodosQueryVariables>;