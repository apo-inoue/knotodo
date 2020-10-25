import { gql } from '@apollo/client';

export const SEED_DATA_CATEGORY = gql`
  mutation SeedDataCategory {
    insert_categories(objects: [{ title: "仕事" }, { title: "プライベート" }]) {
      returning {
        id
        title
      }
    }
  }
`;

export const SEED_DATA_TODO = gql`
  mutation SeedDataTodo($category_id_work: Int!, $category_id_private: Int!) {
    insert_todos(
      objects: [
        {
          title: "例) 第一四半期決算の締め処理"
          urgency: WEEK
          workload: 5
          is_today: true
          category_id: $category_id_work
        }
        {
          title: "例) ケーキを買って帰る"
          urgency: WEEK
          workload: 1
          is_today: true
          category_id: $category_id_private
        }
      ]
    ) {
      returning {
        id
      }
    }
  }
`;
