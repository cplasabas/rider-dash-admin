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
      service_fee
      notes
      locations {
        address
        establishment
      }
      createdAt
      status_id
      status {
        id
        name
      }
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
      service_fee
      notes
      locations {
        id
        address
        establishment
      }
      createdAt
      status_id
      status {
        id
        name
      }
    }
  }
`;

export const orderUpdatedSubscription = gql`
  subscription {
    orderUpdated {
      id
      status {
        id
        name
      }
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
        status {
          id
          name
        }
      }
    }
  }
`;

export const riderAssignedSubscription = gql`
  subscription {
    riderAssigned {
      status {
        id
        name
      }
      id
      rider_id
    }
  }
`;

export const updateOrderMutation = gql`
  mutation updateOrder($id: ID!, $rider_id: Int, $status_id: Int) {
    updateOrder(id: $id, rider_id: $rider_id, status_id: $status_id) {
      status {
        id
        name
      }
    }
  }
`;
