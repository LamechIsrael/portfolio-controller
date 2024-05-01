/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function PortfolioSidebar(props) {
  const { overrides, ...rest } = props;
  const linkedInButtonOnClick = useNavigateAction({
    type: "url",
    url: "https://www.linkedin.com/in/lamechisrael/",
  });
  const githubButtonOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://github.com/lamechisrael",
  });
  return (
    <View
      width="386px"
      height="806px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PortfolioSidebar")}
      {...rest}
    >
      <View
        width="386px"
        height="806px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Icon
          width="158px"
          height="159px"
          viewBox={{ minX: 0, minY: 0, width: 158, height: 159 }}
          paths={[
            {
              d: "M158 79.5C158 123.407 122.63 159 79 159C35.3695 159 0 123.407 0 79.5C0 35.5934 35.3695 0 79 0C122.63 0 158 35.5934 158 79.5Z",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="116px"
          src="s3://lamech-portfolio-pictures/profile-and-contact-images/Profile Picture.jpeg"
          {...getOverrideProps(overrides, "ProfilePicture")}
        ></Icon>
        <View
          width="367px"
          height="47px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="294px"
          left="19px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 438")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="324px"
          height="51px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="170px"
          left="31px"
          {...getOverrideProps(overrides, "Contact Buttons")}
        >
          <Image
            width="72.12px"
            height="51px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="s3://lamech-portfolio-pictures/profile-and-contact-images/LinkedIn_logo.png"
            onClick={() => {
              linkedInButtonOnClick();
            }}
            {...getOverrideProps(overrides, "LinkedInButton")}
          ></Image>
          <Image
            width="72.12px"
            height="51px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="125.94px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="s3://lamech-portfolio-pictures/profile-and-contact-images/GitHub_logo.png"
            onClick={() => {
              githubButtonOnClick();
            }}
            {...getOverrideProps(overrides, "GithubButton")}
          ></Image>
          <Image
            width="72.12px"
            height="51px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="251.88px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://lamech-portfolio-pictures.s3.amazonaws.com/profile-and-contact-images/fiverr-logo.jpg"
            {...getOverrideProps(overrides, "FiverrButton")}
          ></Image>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="324px"
          height="185px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="506px"
          left="31px"
          {...getOverrideProps(overrides, "Certifications38491885")}
        >
          <View
            width="324px"
            height="152px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="33px"
            left="0px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundImage="linear-gradient(-90deg, rgba(29,31,32,1), rgba(136,137,138,1))"
            {...getOverrideProps(overrides, "Frame 43938491880")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="316px"
              height="26px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="35px"
              left="4px"
              {...getOverrideProps(overrides, "WGU Back-End Certificate")}
            >
              <Text
                fontFamily="Inria Serif"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="288px"
                height="23px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0px"
                left="28px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="WGU Certificate: Back-End Developer"
                {...getOverrideProps(
                  overrides,
                  "WGU Certificate: Back-End Developer"
                )}
              ></Text>
              <Image
                width="25px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1px"
                left="0px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(
                  overrides,
                  "WGU Front-End Certificate Badge38531945"
                )}
              ></Image>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="316px"
              height="26px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="65px"
              left="4px"
              {...getOverrideProps(overrides, "ITIL 4 Certification")}
            >
              <Text
                fontFamily="Inria Serif"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="288px"
                height="23px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0px"
                left="28px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="ITIL 4 Foundation Certificate in IT Service Management"
                {...getOverrideProps(
                  overrides,
                  "ITIL 4 Foundation Certificate in IT Service Management"
                )}
              ></Text>
              <Image
                width="25px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1px"
                left="0px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(overrides, "PeopleCert Badge")}
              ></Image>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="316px"
              height="26px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5px"
              left="4px"
              {...getOverrideProps(overrides, "WGU Front-End Certificate")}
            >
              <Text
                fontFamily="Inria Serif"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
                width="288px"
                height="23px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0px"
                left="28px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="WGU Certificate: Front-End Developer"
                {...getOverrideProps(
                  overrides,
                  "WGU Certificate: Front-End Developer"
                )}
              ></Text>
              <Image
                width="25px"
                height="25px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="1px"
                left="0px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                {...getOverrideProps(
                  overrides,
                  "WGU Front-End Certificate Badge38531966"
                )}
              ></Image>
            </View>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="900"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="228.83px"
            height="21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="1.07px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Certifications:"
            {...getOverrideProps(overrides, "Certifications38491881")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="324px"
          height="117px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="379px"
          left="31px"
          {...getOverrideProps(overrides, "Degrees Earned")}
        >
          <View
            width="324px"
            height="84px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="33px"
            left="0px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundImage="linear-gradient(-90deg, rgba(105,108,110,1), rgba(29,30,32,1))"
            {...getOverrideProps(overrides, "Frame 43938491887")}
          >
            <Text
              fontFamily="Inria Serif"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="312px"
              height="23px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="24px"
              left="8px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="B.S. Software Engineering - WGU"
              {...getOverrideProps(
                overrides,
                "B.S. Software Engineering - WGU"
              )}
            ></Text>
            <Text
              fontFamily="Inria Serif"
              fontSize="15px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="312px"
              height="23px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="8px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="MFA Creative Writing - Full Sail University"
              {...getOverrideProps(
                overrides,
                "MFA Creative Writing - Full Sail University"
              )}
            ></Text>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="900"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="214px"
            height="21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Degrees:"
            {...getOverrideProps(overrides, "Degrees:")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="324px"
          height="124px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="245px"
          left="31px"
          {...getOverrideProps(overrides, "Programming Languages")}
        >
          <View
            width="324px"
            height="90px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="34px"
            left="0px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundImage="linear-gradient(-90deg, rgba(220,222,224,1), rgba(120,121,122,1))"
            {...getOverrideProps(overrides, "Frame 440")}
          >
            <Image
              width="28px"
              height="41px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 20.5px - 24.5px)"
              left="calc(50% - 14px - 109px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src="https://lamech-portfolio-pictures.s3.amazonaws.com/code-skill-images/CSS_logo.jpg"
              {...getOverrideProps(overrides, "CSSLogo")}
            ></Image>
            <Image
              width="24px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 17.5px - 24.5px)"
              left="calc(50% - 12px - 140px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "HTMLLogo")}
            ></Image>
            <Image
              width="37px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 17.5px - 24.5px)"
              left="calc(50% - 18.5px - 71.5px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "JavaScriptLogo")}
            ></Image>
            <Image
              width="36px"
              height="37px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 18.5px - -18.5px)"
              left="calc(50% - 18px - 47px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "PostgreSQLLogo")}
            ></Image>
            <Image
              width="36px"
              height="37px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 18.5px - -18.5px)"
              left="calc(50% - 18px - 88px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "MySQLLogo")}
            ></Image>
            <Image
              width="36px"
              height="37px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 18.5px - -18.5px)"
              left="calc(50% - 18px - -35px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "MongoDBLogo")}
            ></Image>
            <Image
              width="36px"
              height="37px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 18.5px - -18.5px)"
              left="calc(50% - 18px - 6px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "DockerLogo")}
            ></Image>
            <Image
              width="36px"
              height="37px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 18.5px - -18.5px)"
              left="calc(50% - 18px - -76px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "AWSLogo")}
            ></Image>
            <Image
              width="37px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 17.5px - 24.5px)"
              left="calc(50% - 18.5px - 29.5px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "TypeScriptLogo")}
            ></Image>
            <Image
              width="37px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 17.5px - 24.5px)"
              left="calc(50% - 18.5px - -12.5px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "ReactJSLogo")}
            ></Image>
            <Image
              width="37px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 17.5px - 24.5px)"
              left="calc(50% - 18.5px - -54.5px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "NextJSLogo")}
            ></Image>
            <Image
              width="37px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 17.5px - 24.5px)"
              left="calc(50% - 18.5px - -96.5px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "JavaLogo")}
            ></Image>
            <Image
              width="37px"
              height="35px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 17.5px - 24.5px)"
              left="calc(50% - 18.5px - -138.5px)"
              borderRadius="5px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "SpringBootLogo")}
            ></Image>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="900"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="214px"
            height="21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Programming Skills:"
            {...getOverrideProps(overrides, "Programming Skills:")}
          ></Text>
        </View>
      </View>
    </View>
  );
}
