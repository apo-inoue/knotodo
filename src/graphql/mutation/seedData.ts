import { gql } from '@apollo/client';

export const SEED_DATA_CATEGORY = gql`
  mutation SeedDataCategory {
    insert_categories(
      objects: [{ category: "仕事" }, { category: "プライベート" }]
    ) {
      returning {
        id
      }
    }
  }
`;

export const SEED_DATA_TODO = gql`
  mutation SeedDataTodo($category_id_work: uuid, $category_id_private: uuid) {
    insert_todos(
      objects: [
        {
          title: "例) 第一四半期決算の締め処理"
          urgency: week
          workload: 5
          isToday: true
          isCompleted: false
          category_id: $category_id_work
        }
        {
          title: "例) ケーキを買って帰る"
          urgency: week
          workload: 1
          isToday: true
          isCompleted: false
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
