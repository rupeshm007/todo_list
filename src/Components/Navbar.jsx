import { Heading, Flex, Box, Image, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, Button, Avatar } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon, SettingsIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
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
          <MenuButton as={IconButton} rightIcon={<ChevronDownIcon />} aria-label="Options" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
            </svg>} p={8} size="sm" variant="ghost" colorScheme="whiteAlpha" > Button Name
          </MenuButton>
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Button leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
          </svg>} borderRadius='100px' size="sm" colorScheme='green' color="white" variant='transparent'>
          Payment
        </Button>  

        <Button leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
          </svg>} borderRadius='100px' size="sm" colorScheme='teal' color="white" variant='solid'>
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
