import { StyleSheet } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import CustomersScreen from "./screens/CustomersScreen";
import utilities from "./tailwind.json";
import RootNavigator from "./navigator/RootNavigator";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.100.113:5001/api/pugnacious-moose",
  cache: new InMemoryCache(),
});

export default function App() {
  // @ts-ignore - Tailwind Provider is missing type definition
  return (
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
