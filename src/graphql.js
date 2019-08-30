import gql from "graphql-tag";

export const loginMutation = gql`
  mutation login($username: String!, $password: String!, $type: Int!) {
    login(username: $username, password: $password, type: $type) {
      token
    }
  }
`;

export const ongoingOrdersQuery = gql`
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

export const ordersQuery = gql`
  query {
    orders {
      id
      rider {
        first_name
        last_name
      }
      customer {
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
      total
      order_date
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

export const ridersQuery = gql`
  query {
    riders {
      id
      first_name
      middle_name
      last_name
      phone
      current_order {
        id
        status {
          id
          name
        }
        current_location {
          establishment
        }
      }
    }
  }
`;

export const settingsQuery = gql`
  query {
    settings {
      key
      value
    }
  }
`;

export const saveSettingsMutation = gql`
  mutation saveSettings($settings: [SettingInput!]!) {
    saveSettings(settings: $settings)
  }
`;


export const riderAssignedSubscription = gql`
  subscription {
    riderAssigned {
      id
      status {
        id
        name
      }
      rider_id
      current_location {
        establishment
      }
    }
  }
`;

export const riderOrderUpdatedSubscription = gql`
  subscription {
    riderOrderUpdated {
      id
      first_name
      middle_name
      last_name
      phone
      current_order {
        id
        status {
          id
          name
        }
        current_location {
          establishment
        }
      }
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
      current_location {
        establishment
      }
    }
  }
`;

export const createRider = gql`
  mutation createRider(
    $first_name: String!
    $middle_name: String
    $last_name: String!
    $ride_make: String
    $ride_model: String
    $phone: String!
  ) {
    createRider(
      first_name: $first_name
      middle_name: $middle_name
      last_name: $last_name
      ride_make: $ride_make
      ride_model: $ride_model
      phone: $phone
    ) {
      id
      first_name
      middle_name
      last_name
      phone
    }
  }
`;
