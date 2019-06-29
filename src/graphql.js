import gql from "graphql-tag";

export const loginMutation = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const ordersQuery = gql`
  query {
    orders(ongoing: true) {
      id
      rider {
        first_name
        last_name
      }
      contact_name
      contact_phone
      store_name
      order
      createdAt
      status
    }
  }
`;

export const orderCreatedSubscription = gql`
  subscription {
    orderCreated {
      id
      rider {
        first_name
        last_name
      }
      contact_name
      contact_phone
      store_name
      order
      createdAt
      status
    }
  }
`;

export const orderUpdatedSubscription = gql`
  subscription {
    orderUpdated {
      id
      status
      rider {
        first_name
        last_name
      }
    }
  }
`;

export const ridersQuery = gql`
  query {
    riders {
      id
      first_name
      last_name
      current_order {
        id
        status
      }
    }
  }
`;

export const riderAssignedSubscription = gql`
  subscription {
    riderAssigned {
      status
      id
      rider_id
    }
  }
`;

export const updateOrderMutation = gql`
  mutation updateOrder($id: ID!, $rider_id: Int) {
    updateOrder(id: $id, rider_id: $rider_id) {
      status
    }
  }
`;
