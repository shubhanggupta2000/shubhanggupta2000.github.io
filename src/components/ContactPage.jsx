import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitle";
import { lightTheme } from "./Themes";
import img from "../assets/Images/aman-pal-15r9RAOy38Q-unsplash.jpg";
import {
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import {
  BsGithub,
  BsLinkedin,
  BsPerson,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { FaSquareXTwitter, FaMedium, FaQuora } from "react-icons/fa6";
import MapComponent from "./MapComponent";
import { SiLeetcode } from "react-icons/si";

const MainBox = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const ContactForm = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactFormContainer = styled.div`
  background-color: transparent;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 1);
  border-radius: 20px;
  margin: 10rem;
  padding: 3rem;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 5rem;
  maxW="container.xl"
  mt={0}
  centerContent
  overflow="hidden"
`;

const socialMediaIcons = [
  { label: "GitHub", icon: <BsGithub size="28px" />, platform: "github" },
  { label: "LinkedIn", icon: <BsLinkedin size="28px" />, platform: "linkedin" },
  { label: "Leetcode", icon: <SiLeetcode size="28px" />, platform: "leetcode" },
  { label: "Medium", icon: <FaMedium size="28px" />, platform: "medium" },
  {
    label: "Twitter",
    icon: <FaSquareXTwitter size="28px" />,
    platform: "twitter",
  },
  { label: "Quora", icon: <FaQuora size="28px" />, platform: "quora" },
  { label: "Facebook", icon: <BsFacebook size="28px" />, platform: "facebook" },
  {
    label: "Instagram",
    icon: <BsInstagram size="28px" />,
    platform: "instagram",
  },
];

const ContactPage = () => {
  const socialMediaLinks = {
    github: "https://github.com/shubhanggupta2000",
    linkedin: "https://www.linkedin.com/in/gupta-shubhang/",
    leetcode: "https://leetcode.com/u/Shubhang_Gupta/",
    medium: "https://medium.com/@guptashubhang2000",
    twitter: "https://twitter.com/ShubhangGupta13",
    quora: "https://www.quora.com/profile/Shubhang-Gupta-31",
    facebook: "https://www.facebook.com/shubhang.agarwal.71/",
    instagram: "https://www.instagram.com/guptashubhang2000/",
  };

  const handleButtonClick = (platform) => {
    const link = socialMediaLinks[platform];
    window.open(link, "_blank");
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <MainBox>
        <Container>
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />

          <div>
            <ContactForm>
              <ContactFormContainer>
                <form>
                  <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                    <Flex>
                      <WrapItem padding="0 1rem">
                        <Box>
                          <Heading color="black">Contact</Heading>
                          <Text
                            mt={{ sm: 3, md: 3, lg: 5 }}
                            color="black"
                            marginBottom={8}
                          >
                            Fill up the form below to contact
                          </Text>
                          <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                            <VStack pl={0} spacing={3} alignItems="flex-start">
                              <Button
                                height="45px"
                                variant="ghost"
                                background="none !important"
                                border="none"
                                justifyContent="flex-start"
                                leftIcon={
                                  <MdPhone color="#000000" size="20px" />
                                }
                              >
                                +91-7976224204
                              </Button>
                              <Button
                                height="40px"
                                variant="ghost"
                                background="none !important"
                                justifyContent="flex-start"
                                border="none"
                                leftIcon={
                                  <MdEmail color="#000000" size="20px" />
                                }
                              >
                                guptashubhang2000@gmail.com
                              </Button>
                              <Button
                                height="45px"
                                variant="ghost"
                                background="none !important"
                                justifyContent="flex-start"
                                border="none"
                                leftIcon={
                                  <MdLocationOn color="#000000" size="20px" />
                                }
                              >
                                Hyderabad, India
                              </Button>
                            </VStack>
                          </Box>
                          <HStack
                            mt={{ lg: 10, md: 10 }}
                            spacing={8}
                            alignItems="flex-start"
                            marginTop={8}
                          >
                            {socialMediaIcons.map(
                              ({ label, icon, platform }) => (
                                <IconButton
                                  key={platform}
                                  aria-label={label}
                                  variant="ghost"
                                  size="lg"
                                  _hover={{ bg: "transparent", color: "white" }}
                                  icon={icon}
                                  onClick={() => handleButtonClick(platform)}
                                  border="none"
                                />
                              )
                            )}
                          </HStack>
                        </Box>
                      </WrapItem>
                      <WrapItem padding="0 1rem">
                        <Box borderRadius="lg">
                          <Box m={8} color="#0B0E3F">
                            <VStack spacing={5} alignItems="flex-start">
                              <FormControl id="contact-name">
                                <FormLabel>Your Name</FormLabel>
                                <InputGroup>
                                  <InputLeftElement>
                                    <BsPerson color="gray.800" />
                                  </InputLeftElement>
                                  <Input
                                    type="text"
                                    size="md"
                                    border="none"
                                    background="none"
                                    borderBottom="2px solid black"
                                    outline="none"
                                    paddingLeft="1.1rem"
                                    autoComplete="name"
                                  />
                                </InputGroup>
                              </FormControl>
                              <FormControl id="contact-email">
                                <FormLabel>Mail</FormLabel>
                                <InputGroup>
                                  <InputLeftElement>
                                    <MdOutlineEmail color="gray.800" />
                                  </InputLeftElement>
                                  <Input
                                    type="text"
                                    size="md"
                                    border="none"
                                    background="none"
                                    borderBottom="2px solid black"
                                    outline="none"
                                    paddingLeft="1.1rem"
                                    autoComplete="email"
                                  />
                                </InputGroup>
                              </FormControl>
                              <FormControl id="contact-message">
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                  border="none"
                                  borderBottom="2px solid black"
                                  borderRadius="none"
                                  background="none"
                                  outline="none"
                                  _focus={{
                                    borderBottom: "2px solid black",
                                  }}
                                  placeholder="write your message..."
                                  autoComplete="off"
                                />
                              </FormControl>
                              <FormControl id="name" float="right">
                                <Button
                                  variant="solid"
                                  bg="transparent"
                                  borderRadius="5px"
                                  padding={6}
                                  _hover={{
                                    bg: "black",
                                    color: "white",
                                  }}
                                  _active={{
                                    bg: "white",
                                    color: "black",
                                  }}
                                >
                                  Send Message
                                </Button>
                              </FormControl>
                            </VStack>
                          </Box>
                        </Box>
                      </WrapItem>
                    </Flex>
                  </Wrap>
                </form>
              </ContactFormContainer>
            </ContactForm>

            <div
              style={{
                display: "block",
                margin: "0 auto",
                width: "50%",
              }}
            >
              <MapComponent />
            </div>
          </div>

          <BigTitle text="CONTACT" $top="10%" $left="8%" />
        </Container>
      </MainBox>
    </ThemeProvider>
  );
};

export default ContactPage;
