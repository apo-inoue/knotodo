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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** delete data from the table: "urgency" */
  delete_urgency?: Maybe<Urgency_Mutation_Response>;
  /** delete single row from the table: "urgency" */
  delete_urgency_by_pk?: Maybe<Urgency>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** insert data into the table: "urgency" */
  insert_urgency?: Maybe<Urgency_Mutation_Response>;
  /** insert a single row into the table: "urgency" */
  insert_urgency_one?: Maybe<Urgency>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
  /** update data of the table: "urgency" */
  update_urgency?: Maybe<Urgency_Mutation_Response>;
  /** update single row of the table: "urgency" */
  update_urgency_by_pk?: Maybe<Urgency>;
};


/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UrgencyArgs = {
  objects: Array<Urgency_Insert_Input>;
  on_conflict?: Maybe<Urgency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Urgency_OneArgs = {
  object: Urgency_Insert_Input;
  on_conflict?: Maybe<Urgency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _set?: Maybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _set?: Maybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UrgencyArgs = {
  _set?: Maybe<Urgency_Set_Input>;
  where: Urgency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Urgency_By_PkArgs = {
  _set?: Maybe<Urgency_Set_Input>;
  pk_columns: Urgency_Pk_Columns_Input;
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
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table: "urgency" */
  urgency: Array<Urgency>;
  /** fetch aggregated fields from the table: "urgency" */
  urgency_aggregate: Urgency_Aggregate;
  /** fetch data from the table: "urgency" using primary key columns */
  urgency_by_pk?: Maybe<Urgency>;
};


/** query root */
export type Query_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUrgencyArgs = {
  distinct_on?: Maybe<Array<Urgency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Urgency_Order_By>>;
  where?: Maybe<Urgency_Bool_Exp>;
};


/** query root */
export type Query_RootUrgency_AggregateArgs = {
  distinct_on?: Maybe<Array<Urgency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Urgency_Order_By>>;
  where?: Maybe<Urgency_Bool_Exp>;
};


/** query root */
export type Query_RootUrgency_By_PkArgs = {
  urgency_type: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
  /** fetch data from the table: "urgency" */
  urgency: Array<Urgency>;
  /** fetch aggregated fields from the table: "urgency" */
  urgency_aggregate: Urgency_Aggregate;
  /** fetch data from the table: "urgency" using primary key columns */
  urgency_by_pk?: Maybe<Urgency>;
};


/** subscription root */
export type Subscription_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUrgencyArgs = {
  distinct_on?: Maybe<Array<Urgency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Urgency_Order_By>>;
  where?: Maybe<Urgency_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUrgency_AggregateArgs = {
  distinct_on?: Maybe<Array<Urgency_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Urgency_Order_By>>;
  where?: Maybe<Urgency_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUrgency_By_PkArgs = {
  urgency_type: Scalars['String'];
};

/**
 * urgency
 * 
 * 
 * columns and relationships of "todo"
 */
export type Todo = {
  __typename?: 'todo';
  id: Scalars['uuid'];
  isToday: Scalars['Boolean'];
  title: Scalars['String'];
  urgency?: Maybe<Urgency_Enum>;
};

/** aggregated selection of "todo" */
export type Todo_Aggregate = {
  __typename?: 'todo_aggregate';
  aggregate?: Maybe<Todo_Aggregate_Fields>;
  nodes: Array<Todo>;
};

/** aggregate fields of "todo" */
export type Todo_Aggregate_Fields = {
  __typename?: 'todo_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todo_Max_Fields>;
  min?: Maybe<Todo_Min_Fields>;
};


/** aggregate fields of "todo" */
export type Todo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todo" */
export type Todo_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Todo_Max_Order_By>;
  min?: Maybe<Todo_Min_Order_By>;
};

/** input type for inserting array relation for remote table "todo" */
export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  _not?: Maybe<Todo_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isToday?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  urgency?: Maybe<Urgency_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export type Todo_Constraint = 
  /** unique or primary key constraint */
  | 'todo_pkey';

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  isToday?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  urgency?: Maybe<Urgency_Enum>;
};

/** aggregate max on columns */
export type Todo_Max_Fields = {
  __typename?: 'todo_max_fields';
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "todo" */
export type Todo_Max_Order_By = {
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todo_Min_Fields = {
  __typename?: 'todo_min_fields';
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "todo" */
export type Todo_Min_Order_By = {
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todo>;
};

/** input type for inserting object relation for remote table "todo" */
export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns: Array<Todo_Update_Column>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** ordering options when selecting data from "todo" */
export type Todo_Order_By = {
  id?: Maybe<Order_By>;
  isToday?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  urgency?: Maybe<Order_By>;
};

/** primary key columns input for table: "todo" */
export type Todo_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todo" */
export type Todo_Select_Column = 
  /** column name */
  | 'id'
  /** column name */
  | 'isToday'
  /** column name */
  | 'title'
  /** column name */
  | 'urgency';

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  isToday?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  urgency?: Maybe<Urgency_Enum>;
};

/** update columns of table "todo" */
export type Todo_Update_Column = 
  /** column name */
  | 'id'
  /** column name */
  | 'isToday'
  /** column name */
  | 'title'
  /** column name */
  | 'urgency';

/** columns and relationships of "urgency" */
export type Urgency = {
  __typename?: 'urgency';
  urgency_type: Scalars['String'];
};

/** aggregated selection of "urgency" */
export type Urgency_Aggregate = {
  __typename?: 'urgency_aggregate';
  aggregate?: Maybe<Urgency_Aggregate_Fields>;
  nodes: Array<Urgency>;
};

/** aggregate fields of "urgency" */
export type Urgency_Aggregate_Fields = {
  __typename?: 'urgency_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Urgency_Max_Fields>;
  min?: Maybe<Urgency_Min_Fields>;
};


/** aggregate fields of "urgency" */
export type Urgency_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Urgency_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "urgency" */
export type Urgency_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Urgency_Max_Order_By>;
  min?: Maybe<Urgency_Min_Order_By>;
};

/** input type for inserting array relation for remote table "urgency" */
export type Urgency_Arr_Rel_Insert_Input = {
  data: Array<Urgency_Insert_Input>;
  on_conflict?: Maybe<Urgency_On_Conflict>;
};

/** Boolean expression to filter rows from the table "urgency". All fields are combined with a logical 'AND'. */
export type Urgency_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Urgency_Bool_Exp>>>;
  _not?: Maybe<Urgency_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Urgency_Bool_Exp>>>;
  urgency_type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "urgency" */
export type Urgency_Constraint = 
  /** unique or primary key constraint */
  | 'urgency_pkey';

export type Urgency_Enum = 
  | 'month'
  | 'week'
  | 'year';

/** expression to compare columns of type urgency_enum. All fields are combined with logical 'AND'. */
export type Urgency_Enum_Comparison_Exp = {
  _eq?: Maybe<Urgency_Enum>;
  _in?: Maybe<Array<Urgency_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Urgency_Enum>;
  _nin?: Maybe<Array<Urgency_Enum>>;
};

/** input type for inserting data into table "urgency" */
export type Urgency_Insert_Input = {
  urgency_type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Urgency_Max_Fields = {
  __typename?: 'urgency_max_fields';
  urgency_type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "urgency" */
export type Urgency_Max_Order_By = {
  urgency_type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Urgency_Min_Fields = {
  __typename?: 'urgency_min_fields';
  urgency_type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "urgency" */
export type Urgency_Min_Order_By = {
  urgency_type?: Maybe<Order_By>;
};

/** response of any mutation on the table "urgency" */
export type Urgency_Mutation_Response = {
  __typename?: 'urgency_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Urgency>;
};

/** input type for inserting object relation for remote table "urgency" */
export type Urgency_Obj_Rel_Insert_Input = {
  data: Urgency_Insert_Input;
  on_conflict?: Maybe<Urgency_On_Conflict>;
};

/** on conflict condition type for table "urgency" */
export type Urgency_On_Conflict = {
  constraint: Urgency_Constraint;
  update_columns: Array<Urgency_Update_Column>;
  where?: Maybe<Urgency_Bool_Exp>;
};

/** ordering options when selecting data from "urgency" */
export type Urgency_Order_By = {
  urgency_type?: Maybe<Order_By>;
};

/** primary key columns input for table: "urgency" */
export type Urgency_Pk_Columns_Input = {
  urgency_type: Scalars['String'];
};

/** select columns of table "urgency" */
export type Urgency_Select_Column = 
  /** column name */
  | 'urgency_type';

/** input type for updating data in table "urgency" */
export type Urgency_Set_Input = {
  urgency_type?: Maybe<Scalars['String']>;
};

/** update columns of table "urgency" */
export type Urgency_Update_Column = 
  /** column name */
  | 'urgency_type';


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetTodosQueryVariables = Exact<{
  isToday?: Maybe<Scalars['Boolean']>;
}>;


export type GetTodosQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id' | 'isToday' | 'title'>
  )> }
);

export type GetAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodosQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id' | 'isToday' | 'title'>
  )> }
);


export const GetTodosDocument = gql`
    query getTodos($isToday: Boolean) {
  todo(where: {isToday: {_eq: $isToday}}) {
    id
    isToday
    title
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *      isToday: // value for 'isToday'
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, baseOptions);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, baseOptions);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export const GetAllTodosDocument = gql`
    query getAllTodos {
  todo {
    id
    isToday
    title
  }
}
    `;

/**
 * __useGetAllTodosQuery__
 *
 * To run a query within a React component, call `useGetAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
        return Apollo.useQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, baseOptions);
      }
export function useGetAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
          return Apollo.useLazyQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, baseOptions);
        }
export type GetAllTodosQueryHookResult = ReturnType<typeof useGetAllTodosQuery>;
export type GetAllTodosLazyQueryHookResult = ReturnType<typeof useGetAllTodosLazyQuery>;
export type GetAllTodosQueryResult = Apollo.QueryResult<GetAllTodosQuery, GetAllTodosQueryVariables>;