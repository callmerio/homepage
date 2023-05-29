import Link from "next/link";
import Image from "next/image";

import styled from "@emotion/styled";
import { Text, useColorModeValue } from "@chakra-ui/react";

const LogoBox = styled.span` 
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
inline-height:20px;
padding: 6px;

&: hover img {
  transform: rotate(5deg);
}
`
const Logo = () => {
  // const footPrintImg = '/images/footprint${useColorModeValue("","-dark")}.png'; 
  const footPrintImg = '/images/footprint-dark.png';

  return (
    <Link href="/" legacyBehavior>
      <a>
        <LogoBox>
          <Image src={footPrintImg} alt="logo" width={30} height={30} />
          <Text
            color={useColorModeValue("gray.800", "whiteAplha.900")}
            fontFamily="Skia"
            fontWeight="bold"
            pt={2}
            ml={2}>
            Zong JinHong
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo;
