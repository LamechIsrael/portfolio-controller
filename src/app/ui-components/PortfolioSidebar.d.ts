/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PortfolioSidebarOverridesProps = {
    PortfolioSidebar?: PrimitiveOverrideProps<ViewProps>;
    "Frame 437"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 438"?: PrimitiveOverrideProps<ViewProps>;
    "Contact Buttons"?: PrimitiveOverrideProps<ViewProps>;
    LinkedInButton?: PrimitiveOverrideProps<ImageProps>;
    GithubButton?: PrimitiveOverrideProps<ImageProps>;
    FiverrButton?: PrimitiveOverrideProps<ImageProps>;
    Certifications38491885?: PrimitiveOverrideProps<ViewProps>;
    "Frame 43938491880"?: PrimitiveOverrideProps<ViewProps>;
    "WGU Back-End Certificate"?: PrimitiveOverrideProps<ViewProps>;
    "WGU Certificate: Back-End Developer"?: PrimitiveOverrideProps<TextProps>;
    "WGU Front-End Certificate Badge38531945"?: PrimitiveOverrideProps<ImageProps>;
    "ITIL 4 Certification"?: PrimitiveOverrideProps<ViewProps>;
    "ITIL 4 Foundation Certificate in IT Service Management"?: PrimitiveOverrideProps<TextProps>;
    "PeopleCert Badge"?: PrimitiveOverrideProps<ImageProps>;
    "WGU Front-End Certificate"?: PrimitiveOverrideProps<ViewProps>;
    "WGU Certificate: Front-End Developer"?: PrimitiveOverrideProps<TextProps>;
    "WGU Front-End Certificate Badge38531966"?: PrimitiveOverrideProps<ImageProps>;
    Certifications38491881?: PrimitiveOverrideProps<TextProps>;
    "Degrees Earned"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 43938491887"?: PrimitiveOverrideProps<ViewProps>;
    "B.S. Software Engineering - WGU"?: PrimitiveOverrideProps<TextProps>;
    "MFA Creative Writing - Full Sail University"?: PrimitiveOverrideProps<TextProps>;
    "Degrees:"?: PrimitiveOverrideProps<TextProps>;
    "Programming Languages"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 440"?: PrimitiveOverrideProps<ViewProps>;
    CSSLogo?: PrimitiveOverrideProps<ImageProps>;
    HTMLLogo?: PrimitiveOverrideProps<ImageProps>;
    JavaScriptLogo?: PrimitiveOverrideProps<ImageProps>;
    PostgreSQLLogo?: PrimitiveOverrideProps<ImageProps>;
    MySQLLogo?: PrimitiveOverrideProps<ImageProps>;
    MongoDBLogo?: PrimitiveOverrideProps<ImageProps>;
    DockerLogo?: PrimitiveOverrideProps<ImageProps>;
    AWSLogo?: PrimitiveOverrideProps<ImageProps>;
    TypeScriptLogo?: PrimitiveOverrideProps<ImageProps>;
    ReactJSLogo?: PrimitiveOverrideProps<ImageProps>;
    NextJSLogo?: PrimitiveOverrideProps<ImageProps>;
    JavaLogo?: PrimitiveOverrideProps<ImageProps>;
    SpringBootLogo?: PrimitiveOverrideProps<ImageProps>;
    "Programming Skills:"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type PortfolioSidebarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PortfolioSidebarOverridesProps | undefined | null;
}>;
export default function PortfolioSidebar(props: PortfolioSidebarProps): React.ReactElement;
