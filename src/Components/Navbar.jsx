import { Heading, Flex, Box, Image, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, Button, Avatar } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon, SettingsIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIndianRupeeSign, faReceipt, faFileLines, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add( faIndianRupeeSign, faReceipt, faFileLines, faThLarge);
//import '/src/styles/Navigation.scss';
export default function Navbar() {
  return (
    
    <Flex bg="grey.200" justify="space-between" wrap="wrap">
      <Box w="150px" h="65px" bg="black">
        <Image
          borderRadius='full'
          boxSize='65px'
          src='../img/logo.png'
          alt='GSM'
        />    
      </Box>
      <Box w="150px" h="65px" flexGrow="1" bg="black">
        <Heading as='h4' color='white' size='sm' justify="center" p={5} pl={0}>
          Grave Sites Management
        </Heading>
      </Box>
      <Box w="150px" h="65px" flexGrow="1" bg="black">      
        <Menu>
          <MenuButton as={IconButton} rightIcon={<ChevronDownIcon />} aria-label="Options" icon={<FontAwesomeIcon icon={faThLarge}/>} p={8} size="sm" variant="ghost" colorScheme="whiteAlpha" > Button Name
          </MenuButton>
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Button leftIcon={<FontAwesomeIcon icon={faIndianRupeeSign}/>} borderRadius='100px' size="sm" colorScheme='green' color="white" variant='transparent'>
          Payment
        </Button>  

        <Button leftIcon={<FontAwesomeIcon icon={faFileLines}/>} borderRadius='100px' size="sm" colorScheme='teal' color="white" variant='solid'>
          Reports
        </Button> 
      </Box>
  
      <Box w="150px" h="65px" flexGrow="1" bg="black">
        <IconButton p={8}
          colorScheme='transparent'
          aria-label='Search database'
          icon={<SearchIcon />}
        />
        <IconButton
          colorScheme='white'
          aria-label='Call Segun'
          size='lg'
          icon={<SettingsIcon />}
        />
        <IconButton
          colorScheme='white'
          aria-label='Call Segun'
          size='lg'
          icon={<QuestionOutlineIcon />}
        />
      </Box>
      <Box w="150px" h="65px" flexGrow="1" bg="black" >
      <Flex p={3.5} align="center" justify="center">    
      <Avatar name="Rupesh M" size="sm" colorScheme="green" />
          
            <Text color='white' fontWeight="bold">Rupesh M</Text>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<ChevronDownIcon />}
                color="white"
                size="sm"
                variant="ghost"
                colorScheme="gray"
              />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Change Password</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      
    </Flex>
  )
}
