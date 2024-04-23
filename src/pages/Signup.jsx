import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DesktopHeader from "../components/DesktopHeader";
import background from "../assets/bg.jpg";
import promotion1 from "../assets/promotion1.jpg";
import promotion2 from "../assets/promotion2.jpg";
import promotion3 from "../assets/promotion3.jpg";
import promotion4 from "../assets/promotion4.jpg";

import {
  Container,
  Heading,
  Image,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      localStorage.setItem('isLoggedIn', true);
      toast.success("Signup successful! Welcome aboard!");
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <div className="content relative z-10 w-screen" style={{ height: '703px' }}>
        <img className="h-full w-full absolute top-0 left-0 opacity-50" src={background} alt="background" style={{ zIndex: '-1' }} />
        <DesktopHeader showLoginBtn={true} />
        <div className="body flex flex-col items-center justify-center" style={{ height: `${703 - 80}px` }}>
          <div className="text text-center">
            <h1 className="text-4xl font-extrabold mb-4 text-white">
              Unlimited movies, TV shows, and more.
            </h1>
            <h4 className="text-2xl mb-4 text-white">Watch anywhere. Cancel anytime.</h4>
            <h6 className="text-xl mb-8 text-white">
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="block w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-900 bg-opacity-50"
              style={{ border: '1px solid rgb(180 173 173)', outline: 'none' }}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="block w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-900 bg-opacity-50"
                style={{ border: '1px solid rgb(180 173 173)', outline: 'none' }}
              />
            )}
            {!showPassword && (
              <button
                onClick={() => setShowPassword(true)}
                className="block w-full p-4 mb-4 text-white rounded-md hover:bg-red-700 focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: 'rgb(229, 9, 20)' }}
              >
                Get Started
              </button>
            )}
            {showPassword && (
              <button
                onClick={handleSignUp}
                className="block w-full p-4 mb-4 text-white rounded-md hover:bg-red-700 focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: 'rgb(229, 9, 20)' }}
              >
                Register Now
              </button>
            )}
          </div>
        </div>
      </div>

      <Container borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"} p="40px" minW="100%" justifyContent={"center"} justifyItems="center" bgColor="rgb(0,0,0)">
        <Stack color="rgb(178,178,178)" gap={{ base: "30px", md: "0px" }} direction={{ base: "column", md: "row" }} alignItems={"center"} justifySelf={"center"} m="auto" maxW="80%">
          <Stack direction={"column"}>
            <Heading fontSize={{ base: "35px", md: "55px" }}>Enjoy on your TV.</Heading>
            <Text fontSize={{ base: "20px", md: "30px" }}>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </Text>
          </Stack>
          <Image width="500px" src={promotion1} />
        </Stack>
      </Container>

      <Container borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"} p="40px" minW="100%" justifyContent={"center"} justifyItems="center" bgColor="rgb(0,0,0)">
        <Stack color="rgb(178,178,178)" gap={{ base: "30px", md: "0px" }} direction={{ base: "column", md: "row-reverse" }} alignItems={"center"} justifySelf={"center"} m="auto" maxW="80%">
          <Stack direction={"column"}>
            <Heading fontSize={{ base: "35px", md: "55px" }}>Download your shows to watch offline.
            </Heading>
            <Text fontSize={{ base: "20px", md: "30px" }}>
              Save your favourites easily and always have something to watch.
            </Text>
          </Stack>
          <Image width="500px" src={promotion2} />
        </Stack>
      </Container>

      <Container borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"} p="40px" minW="100%" justifyContent={"center"} justifyItems="center" bgColor="rgb(0,0,0)">
        <Stack color="rgb(178,178,178)" gap={{ base: "30px", md: "0px" }} direction={{ base: "column", md: "row" }} justifyContent="center" alignItems={"center"} justifySelf={"center"} m="auto" maxW="80%">
          <Stack direction={{ base: "column", md: "column" }}>
            <Heading fontSize={{ base: "35px", md: "55px" }}>Watch everywhere.</Heading>
            <Text fontSize={{ base: "20px", md: "30px" }}>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </Text>
          </Stack>
          <Image width="500px" src={promotion3} />
        </Stack>
      </Container>

      <Container borderBottom="8px"
        borderBottomColor={"rgb(34,34,34)"} p="40px" minW="100%" justifyContent={"center"} justifyItems="center" bgColor="rgb(0,0,0)">
        <Stack color="rgb(178,178,178)" gap={{ base: "30px", md: "unset" }} justifyContent={"space-between"} direction={{ base: "column", md: "row-reverse" }} alignItems={"center"} justifySelf={"center"} m="auto" maxW="80%">
          <Stack direction={{ base: "column", md: "column" }}>
            <Heading fontSize={{ base: "35px", md: "55px" }}>Create profiles for children.</Heading>
            <Text fontSize={{ base: "20px", md: "30px" }}>
              Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </Text>
          </Stack>
          <Image width="500px" src={promotion4} />
        </Stack>
      </Container>

      <Container borderBottom="8px" padding={'30px 0px'}
        borderBottomColor={"rgb(34,34,34)"} minW="100%" bgColor="rgb(0,0,0)">
        <Container pb={{ base: "20px", md: "40px" }} gap="20px" spacing="10px" color="rgb(255,255,255)" minW="65%" bgColor="rgb(0,0,0)">
          <Stack direction="column" textAlign={"center"} gap="10px">
            <Heading fontSize={{ base: "25px", md: "50px" }} pt="10px" pb="16px">
              Frequently Asked Questions
            </Heading>
            <Accordion defaultIndex={[0]} allowMultiple>
              <Stack direction="column" gap="10px">
                <AccordionItem bgColor="rgb(48,48,48)" border="0px">
                  <h2>
                    <AccordionButton height="70px">
                      <Box fontSize={{ base: "20px", md: "25px" }} as="span" flex='1' textAlign='left'>
                        What is Netflix?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize="20px" textAlign={'left'}>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bgColor="rgb(48,48,48)" border="0px">
                  <h2>
                    <AccordionButton height="70px">
                      <Box fontSize={{ base: "20px", md: "25px" }} as="span" flex='1' textAlign='left'>
                        How much does Netflix cost?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize="20px" textAlign={'left'}>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bgColor="rgb(48,48,48)" border="0px">
                  <h2>
                    <AccordionButton height="70px">
                      <Box fontSize={{ base: "20px", md: "25px" }} as="span" flex='1' textAlign='left'>
                        Where can I watch?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize="20px" textAlign={'left'}>
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bgColor="rgb(48,48,48)" border="0px">
                  <h2>
                    <AccordionButton height="70px">
                      <Box fontSize={{ base: "20px", md: "25px" }} as="span" flex='1' textAlign='left'>
                        How do I cancel?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={{ base: "17px", md: "20px" }} textAlign={'left'}>
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bgColor="rgb(48,48,48)" border="0px">
                  <h2>
                    <AccordionButton height="70px">
                      <Box fontSize={{ base: "20px", md: "25px" }} as="span" flex='1' textAlign='left'>
                        What can I watch on Netflix?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize="20px" textAlign={'left'}>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bgColor="rgb(48,48,48)" border="0px">
                  <h2>
                    <AccordionButton height="70px">
                      <Box fontSize={{ base: "20px", md: "25px" }} as="span" flex='1' textAlign='left'>
                        Is Netflix good for Kids?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize="20px" textAlign={'left'}>
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                  </AccordionPanel>
                </AccordionItem>
              </Stack>
            </Accordion>
          </Stack>
        </Container>
      </Container>

      <Footer />
    </>
  );
}