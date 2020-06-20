import React from 'react'
import { useSelector } from 'react-redux'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import Moment from 'react-moment'
import { Container, Text } from 'components/style'
import 'react-accessible-accordion/dist/fancy-example.css'

export const SummeryEntrie = () => {
  const allUserEntries = useSelector((store) => store.entrie.entries)

  return (
    <>
    {allUserEntries.length > 0 &&
      allUserEntries.map((entry) => (
    <Container key={entry._id}>
      <Accordion allowZeroExpanded='true'>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <Moment format="YYYY-MM-DD">
                {entry.createdAt}
              </Moment>
              {entry.title}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          {entry.text.blocks.map((item) => {
            return(
            <Text small key={item.key}>{item.text}</Text>
            )
            })}
          <Text>Grade: {entry.grade}</Text>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Container>
    ))}
    </>
  )
}