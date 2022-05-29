import { ReactElement, createElement } from "react";
import { Animated, TextStyle, View, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { DisplayBarNativeProps } from "../typings/DisplayBarNativeProps";
import Big from "big.js";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function DisplayBarNative(props: DisplayBarNativeProps<CustomStyle>): ReactElement {
    const newWidth = (props.value.value || Big(0))
        .div((props.highDynamicVal?.value || props.highVal).minus(props.lowDynamicVal?.value || props.lowVal))
        .toNumber();

    return (
        <View
            style={{
                flexDirection: "row",
                height: 20,
                flex: 1,
                margin: 10
            }}
        >
            <Animated.View
                style={{
                    backgroundColor: props.color.value,
                    borderRadius: 5,
                    flex: newWidth
                }}
            />
            <Animated.View
                style={{
                    flex: 1 - newWidth
                }}
            />
        </View>
    );
}
