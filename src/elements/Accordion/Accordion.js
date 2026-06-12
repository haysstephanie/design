import React, { useState, useRef, useEffect } from "react";
import {
  AccordionWrapper,
  Trigger,
  TriggerIcon,
  ExpandedContent,
  ExpandedText,
  ExpandedImages,
} from "./Accordion.stitches";

const ChevronDown = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );
};

const ChevronUp = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </svg>
  );
};

const Accordion = (props) => {
  const { moreContent } = props;

  const [isOpen, setIsOpen] = useState(false);

  console.log(moreContent);

  return (
    <AccordionWrapper>
      <Trigger
        onClick={() => {
          if (isOpen === false) {
            setIsOpen(true);
          } else if (isOpen === true) {
            setIsOpen(false);
          }
        }}
      >
        Read More
        <TriggerIcon>{isOpen ? <ChevronUp /> : <ChevronDown />}</TriggerIcon>
      </Trigger>
      <ExpandedContent
        css={{
          maxHeight: isOpen ? "100vh" : "0",
          overflow: "hidden",
          transition: "max-height 400ms ease",
          // display: isOpen ? "block" : "none",
        }}
        className={`expanded-content ${isOpen ? "expanded-content-open" : ""}`}
      >
        <ExpandedImages>
          <img src="/projects/moneywar/upkeep-a1-mock.png" alt="" />
        </ExpandedImages>
        <ExpandedText>{moreContent.text}</ExpandedText>
      </ExpandedContent>
    </AccordionWrapper>
  );
};

export default Accordion;
