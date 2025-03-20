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
  Text,
  Hr,
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

            <Section className="bg-white rounded-t-3xl my-auto font-sans max-w-[525px] text-black">
              <Heading as="h2" className="font-medium text-center mt-8">
                Confirmación de pago <br />
                <b>de tu membresía</b>
              </Heading>
              <Hr className="max-w-[50%] mx-auto h-[0.6px] bg-black" />
              <Text className="text-center mx-auto text-[16px]">
                ¡Gracias por asegurar tu membresía con nosotros! Para agilizar
                la <br />
                validación de tu pago, puedes reportarlo directamente enviando
                tus <br /> datos en este mismo correo:
              </Text>
              <ul className="list-disc list-inside space-y-2 mx-auto max-w-[75%] px-4 my-6">
                <li className="font-bold">Número de referencia</li>
                <li className="font-bold">Monto transferido</li>
                <li className="font-bold">
                  {
                    "Método utilizado (ejm: transferencia, binance, pago móvil, etc)"
                  }
                </li>
              </ul>
              <Text className="text-center mx-auto text-[16px]">
                Si tienes dudas o necesitas ayuda, haznos saber. Estamos para{" "}
                <br /> apoyarte.
              </Text>
              <div className="border-2 border-black rounded-full">
                <Text className="text-center mx-auto text-[14px] ">
                  <b className="text-xl">¡Esperamos verte pronto!</b> <br />{" "}
                  Equipo de CEO Minds.
                </Text>
              </div>
              <Hr className="max-w-[50%] mx-auto h-[0.6px] bg-black" />
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
