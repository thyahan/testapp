import { Button, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Button
        title="Call API"
        onPress={() => {
          fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then(response => {
              console.log("response: ", response);
            })
            .catch(error => {
              console.log("error: ", error);
            });
        }}
      />
    </View>
  );
}
