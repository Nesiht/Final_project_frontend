import React from 'react'
import { useSelector } from 'react-redux'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import Moment from 'react-moment'
import { Container, Text, Title } from 'components/style'
import 'components/accordion.css'

export const SummaryEntrie = () => {
  const allUserEntries = useSelector((store) => store.entrie.entries)

  return (
    <>
    {allUserEntries.length > 0 && <Title size='2em'>Summary</Title>}
    {allUserEntries.length > 0 &&
      allUserEntries.map((entry) => (
    <Container key={entry._id}>
      <Accordion allowZeroExpanded='true'>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <Moment format="YYYY-MM-DD">
                {entry.createdAt}
              </Moment>- 
                {entry.title}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          {entry.text.blocks.map((item) => {
            return(
            <Text small align='left' key={item.key}>{item.text}</Text>
            )
            })}
          <Text small align='left'>Grade: {entry.grade}</Text>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Container>
    ))}
    </>
  )
}