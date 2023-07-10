import { Heading, Text, Container, Box, SimpleGrid, Card, CardFooter, CardHeader, Button, CardBody } from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCross, faIndianRupeeSign, faReceipt, faBox, faChurch, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCross, faIndianRupeeSign, faReceipt, faBox, faChurch, faTableColumns);

export default function Dashboard() {
  return (
    <div>
      <Container as="section" bg="#f9fafa" maxWidth="90%" p="20px">
        <Heading my="30px" p="10px">Reports</Heading>
        <Heading size="md" my="30px" p="10px"> Generate New Report </Heading>     
        
        <Box as="section" bg="white" maxWidth="90%" borderWidth="2px" borderRadius="lg" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" overflow="hidden">
          <SimpleGrid templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faCross} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Grave Sites</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faReceipt} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Payment History</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faIndianRupeeSign} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Payment Types</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faBox} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Burial Types</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faChurch} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Funeral Homes</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faTableColumns} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Section Codes</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      
         <Heading size="md" my="30px" p="10px"> Recently Generated </Heading>

        <Box as="section" maxWidth="90%">
        <SimpleGrid columns={4} spacing={20} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
          <Card width="325px" borderRadius="lg" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" overflow="hidden">
            <CardHeader>
              <FontAwesomeIcon icon={faCross} size="lg" />
            </CardHeader>
            <CardBody>
              <Heading size='sm'>Grave Site Report</Heading>
            </CardBody>
            <CardFooter>
              <table>
                <tr>
                  <td>Owner: Mrs.Jack Karmer</td>
                </tr>
                <tr>
                  <td>Date: All</td>
                </tr>
              </table>
            </CardFooter>
          </Card>

          <Card width="325px">
            <CardHeader>
              <FontAwesomeIcon icon={faReceipt} size="lg" />
            </CardHeader>
            <CardBody>
              <Heading size='sm'>Payment History Report</Heading>
            </CardBody>
            <CardFooter>
              <table>
                <tr>
                  <td>Posting Date: 10/1/2022-12/31/2022</td>
                </tr>
                <tr>
                  <td>Payment Type: All</td>
                </tr>
              </table>
            </CardFooter>
          </Card>

          <Card width="325px">
            <CardHeader>
              <FontAwesomeIcon icon={faCross} size="lg" />
            </CardHeader>
            <CardBody>
              <Heading size='sm'>Grave Site 01-1001-01.0</Heading>
            </CardBody>
            <CardFooter>
              <table>
                <tr>
                  <td>Buried Person: All</td>
                </tr>
                <tr>
                  <td>Date: 12/31/2022 - 02/07/2022</td>
                </tr>
              </table>
            </CardFooter>
          </Card>
        
          <Card width="325px">
            <CardHeader>
              <FontAwesomeIcon icon={faBox} size="lg" />
            </CardHeader>
            <CardBody>
              <Heading size='sm'>Burial Types</Heading>
            </CardBody>
            <CardFooter>
              <table>
                <tr>
                  <td>All Burial Types</td>
                </tr>
                <tr>
                <td></td>
                </tr>
              </table>
            </CardFooter>
          </Card>
          </SimpleGrid>
        </Box>
      </Container>
    </div>
  )
}
