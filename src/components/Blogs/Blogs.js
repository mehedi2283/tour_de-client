import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Blogs() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment clasname="">
        <h1 className="text-6xl font-black text-center mb-5">Blogs</h1>
      <Accordion className="w-1/2 mx-auto border rounded p-4 " open={open === 1}>
        <AccordionHeader className="mb-4" onClick={() => handleOpen(1)}>
        Difference between SQL and NoSQL
        </AccordionHeader>
        <AccordionBody >
        SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
        </AccordionBody>
      </Accordion>
      <Accordion className="w-1/2 mx-auto border rounded p-4 " open={open === 2}>
        <AccordionHeader className="mb-4" onClick={() => handleOpen(2)}>
        What is JWT, and how does it work?
        </AccordionHeader>
        <AccordionBody>
        What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)
        </AccordionBody>
      </Accordion>
      <Accordion className="w-1/2 mx-auto border rounded p-4 " open={open === 3}>
        <AccordionHeader className="mb-4" onClick={() => handleOpen(3)}>
        What is the difference between javascript and NodeJS?
        </AccordionHeader>
        <AccordionBody>
        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
        </AccordionBody>
      </Accordion>
      <Accordion className="w-1/2 mx-auto border rounded p-4 " open={open === 3}>
        <AccordionHeader className="mb-4" onClick={() => handleOpen(3)}>
        How does NodeJS handle multiple requests at the same time?
        </AccordionHeader>
        <AccordionBody>
        How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}