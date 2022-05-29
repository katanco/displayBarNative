/**
 * This file was generated from DisplayBarNative.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface DisplayBarNativeProps<Style> {
    name: string;
    style: Style[];
    value: EditableValue<Big>;
    lowVal: Big;
    highVal: Big;
    lowDynamicVal?: EditableValue<Big>;
    highDynamicVal?: EditableValue<Big>;
    color: DynamicValue<string>;
}

export interface DisplayBarNativePreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    value: string;
    lowVal: number | null;
    highVal: number | null;
    lowDynamicVal: string;
    highDynamicVal: string;
    color: string;
}
