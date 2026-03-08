import { useContext, useState } from "react";
import { AuthContext } from "@/src/context/AuthContext";
import { View, Button } from "react-native";


const  Explor = () => {
  const { onLogOut} = useContext(AuthContext);
  const [isLoading] = useState(false);

  return (
            <View className="mt-2">
              <Button onPress={onLogOut} title="Logout" color="green" disabled={isLoading} />
            </View>
  );
}

export default Explor;
