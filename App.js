import { NavigationContainer } from "@react-navigation/native";
import { GlobalState } from "./src/context/GlobalState";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <GlobalState>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GlobalState>
  );
}
