import { View, Text, TouchableOpacity, Image } from 'react-native';

export function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View>
                <Image source={label==="Sách"?require("./image/a.png") : label==="Phát âm"?require("./image/a1.png") : label==="Khóa học"?require("./image/a2.png"): label==="Tiện ích"? require("./image/a3.png"): require("./image/a4.png") }
                style={{tintColor:isFocused ? 'red' : 'gray', width:19, height:20}}/>
                <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
                </Text>
            </View>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}
