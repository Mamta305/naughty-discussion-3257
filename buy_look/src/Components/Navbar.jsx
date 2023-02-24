import {
    Box,
    Flex,
    Text,
    Image,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
   Input,
   InputGroup,
   InputRightAddon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
//   import logo from "../Components/buylogo";
  import {
    HamburgerIcon,
    CloseIcon, 
    SearchIcon,
    EmailIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

            <img src="https://i.pinimg.com/474x/47/1d/b9/471db96831fa48707cf261e0097805c3--typografisch-logo-logo-branding.jpg" width={"5%"}
            alt='logo' />
            {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Logo
            </Text> */}
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <InputGroup size='lg'>
               <Input type="text" placeholder='Keyword or catlog item #' w={"50pc"} />
               <InputRightAddon children={<SearchIcon color='Blue.800' />}  />
            </InputGroup>
            </Flex>
          </Flex>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={'https://bit.ly/2Z4KKcF'} alt={"image"} />
      </Box>
  
          {/* <Flex
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}> */}
            
            {/* //   as={Button}
            //   display={{ base: 'none', md: 'inline-flex' }}
            //   fontSize={'sm'}
            //   fontWeight={600}
            //   color={'white'}
            //   bg={'pink.400'}
            //   href={'#'} */}
            {/* //   _hover={{
            //     bg: 'pink.300',
            //   }}  */}
    {/* Email
  </img> */}
          {/* </Flex> */}
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.800'}
              href={'#'}
              _hover={{
                bg: 'blue.800',
              }}>
              Sign Up
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.800'}
              href={'#'}
              _hover={{
                bg: 'blue.800',
              }}>
              Catlog
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.800'}
              href={'#'}
              _hover={{
                bg: 'blue.800',
              }}>
              Cart
            </Button>
          </Stack>
        </Flex>
      </Box>
    );
  }
  
  
  
  
  
   
  
 
        
  
  
