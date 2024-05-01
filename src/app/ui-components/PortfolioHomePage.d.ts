/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PortfolioNavBarHeaderProps } from "./PortfolioNavBarHeader";
import { PortfolioSidebarProps } from "./PortfolioSidebar";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PortfolioHomePageOverridesProps = {
    PortfolioHomePage?: PrimitiveOverrideProps<FlexProps>;
    PortfolioNavBarHeader?: PortfolioNavBarHeaderProps;
    main?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4381"?: PrimitiveOverrideProps<ViewProps>;
    PortfolioSidebar?: PortfolioSidebarProps;
    "Frame 4373"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type PortfolioHomePageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PortfolioHomePageOverridesProps | undefined | null;
}>;
export default function PortfolioHomePage(props: PortfolioHomePageProps): React.ReactElement;
