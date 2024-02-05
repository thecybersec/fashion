import React from "react";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import ReactHtmlParser from "react-html-parser";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqContent = () => {
  const [faqMenu, setFaqMenu] = useState([]);
  const [rightSideHeader, setRightSideHeader] = useState([]);

  const LeftSideContent = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/faqsuperquestion/get",
      });
      setFaqMenu(response.data.faqsuperquestions);
    } catch (err) {
      console.error(err);
    }
  };

  const RightSideContent = async (id) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/faqanswer/get",
        data: {
          faq_id: id,
        },
      });

      setRightSideHeader(response.data.faqanswers);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    LeftSideContent();
    if (faqMenu.length != 0) {
      RightSideContent(faqMenu[0]._id);
    }
  }, []);

  useEffect(() => {
    if (faqMenu.length != 0) {
      RightSideContent(faqMenu[0]._id);
    }
  }, [faqMenu]);

  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="faq-sidebar">
                <ul>
                  {faqMenu &&
                    faqMenu.map((data, index) => {
                      return (
                        <li
                          onClick={() => RightSideContent(data._id)}
                          key={index}
                        >
                          <Link href="/faq">
                            <a>{data.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  {rightSideHeader &&
                    rightSideHeader.map((items, index) => {
                      const ans = items && items.answer;
                      return (
                        <AccordionItem uuid={index} key={index}>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              {items && items.question}
                            </AccordionItemButton>
                          </AccordionItemHeading>

                          <AccordionItemPanel>
                            <p>{ReactHtmlParser(ans)}</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      );
                    })}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
