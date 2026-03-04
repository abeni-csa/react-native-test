import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Animated, { FadeIn, FadeOut, LinearTransition } from "react-native-reanimated";

import Feather from "@expo/vector-icons/Feather"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import AntDesign from "@expo/vector-icons/AntDesign"
import Ionicons from "@expo/vector-icons/Ionicons"
import { s } from "react-native-size-matters"

const PRI_COLOR = '#130057';
const SEC_COLOR = '#ffffff';
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const CustomNavBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {

        const { options } = descriptors[route.key];
        const lable =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        console.info("[+] options: ", options);
        console.info("[+] route: ", route);
        console.info("[+] index: ", index);
        return (
          <AnimatedTouchableOpacity
            layout={LinearTransition.springify().mass(0.5)}
            key={route.key}
            // accessibilityRole="button"
            // accessibilityState={isFocused ? { selected: true } : { selected: false }}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            style={[style.tabItems, { backgroundColor: isFocused ? SEC_COLOR : "transparent" }]}
          >
            {getIconByRouteName(route.name, isFocused ? PRI_COLOR : SEC_COLOR)}
            {isFocused &&
              <Animated.Text
                entering={FadeIn.duration(500)}
                exiting={FadeOut.duration(500)}

                style={style.text}
              >
                {lable as string}
              </Animated.Text>
            }
          </AnimatedTouchableOpacity>
        );
      })}
    </View>
  );

  function getIconByRouteName(routeName: string, color: string) {
    switch (routeName) {
      case "analytics":
        return <Feather name="pie-chart" size={s(18)} color={color} />;
      case "fee":
        return <Ionicons name="wallet-outline" size={s(18)} color={color} />;

      case "explor":
        return <Feather name="compass" size={s(18)} color={color} />;
      case "chat":
        return <AntDesign name="message" size={s(18)} color={color} />;
      case "profile":
        return <FontAwesome6 name="circle-user" size={s(18)} color={color} />;
      default:
        return <Feather name="pie-chart" size={s(18)} color={color} />;
    }

  }
}
const style = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRI_COLOR,
    alignSelf: "center",
    width: "98%",
    borderRadius: 30,
    bottom: 0,
    paddingHorizontal: 8,
    paddingVertical: 10
  },
  tabItems: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: s(36),
    paddingHorizontal: s(12),
    borderRadius: 30
  },
  text: {
    color: PRI_COLOR,
    marginLeft: s(8),
    fontWeight: 500
  }
})


export default CustomNavBar;

