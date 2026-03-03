import React from "react";
import { Text, View, ScrollView} from "react-native";

interface CProps {
  color: string;
}

const ItemListColor: React.FC<CProps> = ({color}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, alignItems:"center"}}>
        {Array.from({length:100}).map((_,index) => {
          return (
            <View
              key={index +1 }
              style={{
                width:"95%",
                height: 120,
                backgroundColor: color,
                marginTop:12,
                borderRadius: 20,
                opacity: 10 - index * 0.1
              }}
             ><Text style={{
               margin: 20,
               flex: 1,
                fontSize:60,
               alignContent: "center",
               justifyContent: "center",
               alignSelf:"center"
             }}>{index + 1}</Text></View>
          );
        })}
    </View>
    </ScrollView>
  );
}
export default ItemListColor;
