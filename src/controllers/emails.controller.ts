import { Resend } from "resend";
import { config } from "../config";

const resend = new Resend(config.resend_api);
const own_email = config.own_email as string;
const google_sheet_url = config.google_sheet_url;

class EmailController {
  async sendEmail({ email }: { email: string }) {
    const { error } = await resend.emails.send({
      to: [own_email],
      from: "info@ceominds.net",
      cc: ["maykerting@gmail.com", "adri@yuppiecreativo.com"],
      subject: "A new person has been added to the CEOminds' database. ",
      html: `
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>Email Confirmation</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style type="text/css">
            /**
             * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
             */
            @media screen {
                @font-face {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
                }
                @font-face {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 700;
                src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
                }
            }
            /**
             * Avoid browser level font resizing.
             * 1. Windows Mobile
             * 2. iOS / OSX
             */
            body,
            table,
            td,
            a {
                -ms-text-size-adjust: 100%; /* 1 */
                -webkit-text-size-adjust: 100%; /* 2 */
            }
            /**
             * Remove extra space added to tables and cells in Outlook.
             */
            table,
            td {
                mso-table-rspace: 0pt;
                mso-table-lspace: 0pt;
            }
            /**
             * Better fluid images in Internet Explorer.
             */
            img {
                -ms-interpolation-mode: bicubic;
            }
            /**
             * Remove blue links for iOS devices.
             */
            a[x-apple-data-detectors] {
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                color: inherit !important;
                text-decoration: none !important;
            }
            /**
             * Fix centering issues in Android 4.4.
             */
            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }
            body {
                width: 100% !important;
                height: 100% !important;
                padding: 0 !important;
                margin: 0 !important;
            }
            /**
             * Collapse table borders to avoid space between cells.
             */
            table {
                border-collapse: collapse !important;
            }
            a {
                color: #1a82e2;
            }
            img {
                height: auto;
                line-height: 100%;
                text-decoration: none;
                border: 0;
                outline: none;
            }

            .button-container {
                display: flex; /* Enable flexbox layout */
                justify-content: center; /* Center horizontally */
                align-items: center; /* Center vertically */
                padding: 20px; /* Add padding to the container */
            }
            </style>
            
            </head>
            <body style="background-color: #e9ecef;">
                <!-- start body -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <!-- start hero -->
                    <tr>
                    <td align="center" bgcolor="#e9ecef">
                        <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                        <tr>
                        <td align="center" valign="top" width="600">
                        <![endif]-->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                            <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">New User Added</h1>
                            </td>
                        </tr>
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                    </td>
                    </tr>
                    <!-- end hero -->
                
                    <!-- start copy block -->
                    <tr>
                    <td align="center" bgcolor="#e9ecef">
                        <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                        <tr>
                        <td align="center" valign="top" width="600">
                        <![endif]-->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

                        <!-- start message -->
                        <tr>
                            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                                <p style="margin: 0; font-weight: 700;">Message:</p>
                                <p style="margin: 0;">New user: ${email}</p>
                                <p style="margin: 0;">A new user has been added to the database and to excel, you can verify it by clicking on the following button</p>
                                <div class="button-container">
                                    <a href='${google_sheet_url}' style="display: inline-block;
                                    padding: 10px 20px; 
                                    background-color: #393E41; 
                                    color: white; 
                                    text-decoration: none; 
                                    border: none; 
                                    border-radius: 5px; 
                                    cursor: pointer;" target="_blank">
                                        Go to google sheet
                                    </a>
                                </div>
                            </td>
                            
                        </tr>
                        <!-- end message -->
                
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                    </td>
                    </tr>
                    <!-- end copy block -->
                
                    <!-- start footer -->
                    <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
                        <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                        <tr>
                        <td align="center" valign="top" width="600">
                        <![endif]-->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                    </td>
                    </tr>
                    <!-- end footer -->
                
                </table>
                <!-- end body -->
            </body>
        </html>
        `,
    });

    return { error };
  }

  async sendPricing({ email }: { email: string }) {
    const { error } = await resend.emails.send({
      to: [email],
      from: "info@ceominds.net",
      subject: "Hola CEO Minder",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link
      rel="preload"
      as="image"
      href="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Recurso+1+1.png" />
    <link
      rel="preload"
      as="image"
      href="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Ellipse+1.png" />
    <link
      rel="preload"
      as="image"
      href="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/pricingGroup.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <div
    style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
    Métodos de pago
    <div>
       ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
    </div>
  </div>
  <body
    style='background-color:rgb(0,0,0);margin-top:auto;margin-bottom:auto;margin-left:auto;margin-right:auto;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";padding-left:0.5rem;padding-right:0.5rem'>
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="margin-top:40px;margin-left:auto;margin-right:auto;padding-top:45px;max-width:465px;color:rgb(255,255,255)">
      <tbody>
        <tr style="width:100%">
          <td>
            <img
              alt="CEOMinds Logo"
              height="16.565074135"
              src="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Recurso+1+1.png"
              style="margin-top:0px;margin-bottom:1.25rem;margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none"
              width="120" />
            <h1
              style="font-weight:200;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto;text-transform:uppercase;text-align:center;font-size:3.75rem;line-height:1">
              MÉTODOS <br />
            </h1>
            <h1
              style="text-transform:uppercase;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto;text-align:center;font-size:3.75rem;line-height:1;letter-spacing:0.025em">
              de pago
            </h1>
            <img
              height="60"
              src="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/Ellipse+1.png"
              style="margin-top:0.75rem;margin-bottom:0px;margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none"
              width="350" />
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style='background-color:rgb(255,255,255);border-top-left-radius:1.5rem;border-top-right-radius:1.5rem;margin-top:auto;margin-bottom:auto;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";max-width:600px;color:rgb(0,0,0)'>
              <tbody>
                <tr>
                  <td>
                    <h2
                      style="font-weight:500;text-align:center;margin-top:2rem">
                      Confirmación de pago <br /><b>de tu membresía</b>
                    </h2>
                    <hr
                      style="max-width:50%;margin-left:auto;margin-right:auto;height:0.6px;background-color:rgb(0,0,0);width:100%;border:none;border-top:1px solid #eaeaea" />
                    <p
                      style="text-align:center;padding-left:1rem;padding-right:1rem;font-size:16px;line-height:24px;margin:16px 0">
                      ¡Gracias por asegurar tu membresía con nosotros! Para
                      agilizar la validación de tu pago, puedes reportarlo
                      directamente enviando tus datos<br />
                      en este mismo correo:
                    </p>
                    <ul
                      class="space-y-2"
                      style="list-style-type:disc;list-style-position:inside;margin-left:auto;margin-right:auto;max-width:75%;padding-left:1rem;padding-right:1rem;margin-top:1.5rem;margin-bottom:1.5rem">
                      <li style="font-weight:700">Número de referencia</li>
                      <li style="font-weight:700">Monto transferido</li>
                      <li style="font-weight:700">
                        Método utilizado (ejm: transferencia, binance, pago
                        móvil, etc)
                      </li>
                    </ul>
                    <p
                      style="text-align:center;margin-left:auto;margin-right:auto;font-size:16px;line-height:24px;margin:16px 0">
                      Si tienes dudas o necesitas ayuda, haznos saber.<!-- -->
                      <br />Estamos para apoyarte.
                    </p>
                    <div
                      style="border-width:2px;border-color:rgb(0,0,0);border-radius:9999px">
                      <p
                        style="text-align:center;margin-left:auto;margin-right:auto;font-size:14px;line-height:24px;margin:16px 0">
                        <b style="font-size:1.25rem;line-height:1.75rem"
                          >¡Esperamos verte pronto!</b
                        >
                        <br />
                        Equipo de CEO Minds.
                      </p>
                    </div>
                    <hr
                      style="max-width:50%;margin-left:auto;margin-right:auto;height:0.6px;background-color:rgb(0,0,0);width:100%;border:none;border-top:1px solid #eaeaea" />
                    <img
                      height="380"
                      src="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/pricingGroup.png"
                      style="margin-left:auto;margin-right:auto;margin-bottom:1.25rem;margin-top:1.5rem;display:block;outline:none;border:none;text-decoration:none"
                      width="420" />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`,
    });

    return { error };
  }

  async sendAttendance({ userEmail }: { userEmail: string }) {
    const { error } = await resend.emails.send({
      to: [own_email, userEmail],
      from: "info@ceominds.net",
      cc: ["maykerting@gmail.com", "adri@yuppiecreativo.com"],
      subject: "Attendance",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link
      rel="preload"
      as="image"
      href="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/magin+carmona.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <body style="padding-top:2.5rem;padding-bottom:2.5rem">
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em">
      <tbody>
        <tr style="width:100%">
          <td>
            <img
              alt="CEOMinds Attendance"
              src="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/magin+carmona.png"
              style="border-radius:0.5rem;object-position:center;max-width:95%;max-height:95%;margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none" />
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`,
    });

    return { error };
  }

  async sendAttendanceEmailCarolinaMontes({
    userEmail,
  }: {
    userEmail: string;
  }) {
    const { error } = await resend.emails.send({
      to: [own_email, userEmail],
      from: "CEO Minds <info@ceominds.net>",
      cc: ["maykerting@gmail.com", "adri@yuppiecreativo.com"],
      subject: "Asistencia confirmada - “Carolina Montes” 24 de mayo",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link
      rel="preload"
      as="image"
      href="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/carolina+montes.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <body style="padding-top:2.5rem;padding-bottom:2.5rem">
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em">
      <tbody>
        <tr style="width:100%">
          <td>
            <img
              alt="CEOMinds Attendance"
              src="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/carolina+montes.png"
              style="border-radius:0.5rem;object-position:center;max-width:95%;max-height:95%;margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none" />
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`,
    });
    return { error };
  }

  async sendAttendanceEmailJoseRamonFermin({
    userEmail,
  }: {
    userEmail: string;
  }) {
    const { error } = await resend.emails.send({
      to: [own_email, userEmail],
      from: "CEO Minds <info@ceominds.net>",
      cc: ["maykerting@gmail.com", "adri@yuppiecreativo.com"],
      subject: "Asistencia confirmada - “Jose Ramón Fermín” 21 de Junio",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <link
      rel="preload"
      as="image"
      href="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/JoseRamonFerminEmail.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <body style="padding-top:2.5rem;padding-bottom:2.5rem">
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em">
      <tbody>
        <tr style="width:100%">
          <td>
            <img
              alt="CEOMinds Attendance"
              src="https://yuppie-bucket.s3.us-east-1.amazonaws.com/ceominds/emails/JoseRamonFerminEmail.png"
              style="border-radius:0.5rem;object-position:center;max-width:95%;max-height:95%;margin-left:auto;margin-right:auto;display:block;outline:none;border:none;text-decoration:none" />
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`,
    });
    return { error };
  }

}

export default new EmailController();
