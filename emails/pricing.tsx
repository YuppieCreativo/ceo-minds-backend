import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Tailwind,
  Section,
} from "@react-email/components";
import * as React from "react";

const PricingEmail = () => {
  const previewText = `Métodos de pago`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-black my-auto mx-auto font-sans px-2 ">
          <Container className=" mt-[40px] mx-auto pt-[45px] max-w-[465px] text-white">
            <Img
              src={
                "https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Recurso+1+1.png"
              }
              width={120}
              height={16.565074135}
              className="mt-0 mb-5 mx-auto"
              alt="CEOMinds Logo"
            />
            <Heading
              as="h1"
              className="font-extralight my-0 mx-auto uppercase text-center text-6xl"
            >
              MÉTODOS <br />
            </Heading>
            <Heading
              as="h1"
              className="uppercase my-0 mx-auto text-center text-6xl tracking-wide"
            >
              de pago
            </Heading>
            <Img
              src="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Ellipse+1.png"
              width={350}
              height={60}
              className="mt-3 mb-0 mx-auto"
            />

            <Section className="bg-white rounded-t-3xl my-auto font-sans max-w-[525px]">
              <Img
                src="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Group+1171275903.png"
                height={465}
                width={525}
                className="ml-12 mb-3 mt-8"
              />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PricingEmail;
