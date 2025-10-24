import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

const CarolinaMontesEmail = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="py-10">
          <Container>
            <Img
              src={
                "https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Andreina+Barrera+-+Email.png"
              }
              className="rounded-lg object-center max-w-[95%] max-h-[95%] mx-auto"
              alt="CEOMinds Attendance"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CarolinaMontesEmail;
