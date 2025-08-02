import * as React from "react";
import {
    Html,
    Button,
    Img,
    Container,
    Section,
    Text,
    Column,
    Row,
    Head,
    Body,
    Tailwind,
} from "@react-email/components";

interface WebinarInvitationProps {
    webinarLink: string;
}

const WebinarInvitationFullHTML: React.FC<WebinarInvitationProps> = () => {
    const webinarLink =
        "https://us05web.zoom.us/j/83485652986?pwd=lKqSHk9FPilvOSYCnooVu5Ph58Q7WA.1";
    const backgroundImageUrl =
        "https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/historia+Carlos+Manuel+Enga%C3%B1a+3.png";

    const linkIconUrl =
        "https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Link.png";
    const zoomIconUrl =
        "https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/zoomIcon.png";

    return (
        <Html lang="es">
            <Head>
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
                    @import url('https://fonts.cdnfonts.com/css/giliran');
                    @import url('https://fonts.cdnfonts.com/css/poppins');
                `,
                    }}
                />
            </Head>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            fontFamily: {
                                sans: ["Josefin Sans", "sans-serif"],
                                giliran: ["Giliran", "sans-serif"],
                                poppins: ["Poppins", "sans-serif"],
                            },
                        },
                    },
                }}
            >
                <Body
                    className="bg-gray-100 font-sans text-white"
                    style={{ margin: 0, padding: 0 }}
                >
                    <Container
                        className={`mx-auto w-[390px] max-w-full my-10 shadow-lg rounded-lg py-6 overflow-hidden text-center bg-[url(${backgroundImageUrl})] bg-cover bg-no-repeat bg-center`}
                    >
                        <Section
                            className="w-full  text-center pt-8 pb-[100px]"
                            style={{
                                minHeight: "500px",
                                paddingTop: "32px",
                                paddingBottom: "100px",
                            }}
                        >
                            <Img
                                src="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Capa+1.png"
                                width={105}
                                className="max-w-[120px] mb-8 mx-auto"
                            />
                            <Text
                                className="text-2xl text-white text-center  uppercase leading-tight m-0 p-0 mb-8"
                                style={{
                                    lineHeight: "1.2",
                                    marginBottom: "32px",
                                }}
                            >
                                <span className="font-light">
                                    MICRO-HÁBITOS:
                                </span>{" "}
                                <br />
                                <span className="text-center font-extrabold px-2">
                                    EL CAMINO HACIA EL ALTO RENDIMIENTO
                                </span>
                            </Text>
                            <Text className="text-3xl mb-10 font-light capitalize">
                                carlos manuel egaña
                            </Text>

                            <Section className="w-full my-20 px-3">
                                <Row className="mx-auto">
                                    <Column className="w-1/3 text-start pl-3 text-white">
                                        <Text
                                            className={`text-2xl font-bold uppercase m-0 p-0`}
                                        >
                                            FECHA
                                        </Text>
                                        <Text
                                            className={`text-2xl tracking-wider  font-extralight font-[Giliran] m-0 p-0`}
                                            style={{
                                                marginTop: "-7px",
                                            }}
                                        >
                                            02.08
                                        </Text>
                                    </Column>
                                    <Column className="w-1/3" />
                                    <Column className="w-1/3 text-start pl-8 text-white">
                                        <Text
                                            className={`text-2xl font-bold uppercase m-0 p-0 `}
                                        >
                                            HORA
                                        </Text>
                                        <Text
                                            className="tracking-wider text-2xl font-extralight m-0 p-0 font-[Giliran] "
                                            style={{
                                                marginTop: "-7px",
                                            }}
                                        >
                                            10:00
                                            <span className="text-sm font-normal tracking-normal align-text-bottom">
                                                am
                                            </span>
                                        </Text>
                                    </Column>
                                </Row>
                            </Section>
                        </Section>

                        <Section className="w-full py-2 ">
                            <Row>
                                <Button
                                    href={webinarLink}
                                    className="bg-[#406CFF]  font-semibold py-2 px-4 rounded-lg text-center text-base text-white no-underline font-[Poppins]"
                                >
                                    <span
                                        style={{
                                            lineHeight: "1",
                                            display: "inline-block",
                                            verticalAlign: "middle",
                                        }}
                                    >
                                        Conéctate Aquí
                                    </span>
                                    <Img
                                        src={linkIconUrl}
                                        width="18"
                                        height="18"
                                        alt="Link Icon"
                                        className="inline-block ml-2 align-middle"
                                    />
                                </Button>
                            </Row>
                            <Row>
                                <Img
                                    src={zoomIconUrl}
                                    width={78}
                                    alt="Zoom Icon"
                                    className="inline-block mt-2 mx-auto"
                                />
                            </Row>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default WebinarInvitationFullHTML;
