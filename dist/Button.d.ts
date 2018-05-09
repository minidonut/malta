/// <reference types="react" />
import * as React from "react";
export interface IProps {
    borderRadius?: number | string;
    color?: string;
    bg?: string;
    fontSize?: number | string;
    height?: number | string;
    m?: number | string;
    mt?: number | string;
    mr?: number | string;
    mb?: number | string;
    ml?: number | string;
    width?: number | string;
}
export declare class Button extends React.Component<IProps, any> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
