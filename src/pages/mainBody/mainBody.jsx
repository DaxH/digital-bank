import React, { useRef, useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import colors from "../../styles/theme/base/colors";
import LoginIcon from "@mui/icons-material/Login";
import { Slider } from "../slider/Slider";

export const MainBody = () => {
  const [gadget, setGadget] = useState([
    {
      label: "ChatBot",
      description: "Consulta de saldos, transferencias, y pago de servicios en messenger y whatsapp",
      imgPath: "/assets/images/gadget1.png",
    },
    {
      label: "Banca virtual",
      description: "Banca-Cooperativa en línea compatible en todos los navegadores.",
      imgPath: "/assets/images/gadget2.png",
    },
    {
      label: "Wallet",
      description: "Pagos con código QR en locales o cobros con link personalizados",
      imgPath: "/assets/images/gadget3.png",
    },
    {
      label: "Apertura de cuenta",
      description: "Permite a tus clientes aperturar una cuenta desde la comodidad de su hogar",
      imgPath: "/assets/images/gadget4.png",
    },
    {
      label: "Blockchain",
      description: "Añade seguridad y trazabilidad a tus transacciones.",
      imgPath: "/assets/images/gadget5.png",
    },
    {
      label: "App móvil",
      description: "Transacciona y accede a servicios financieros desde el móvil",
      imgPath: "/assets/images/gadget6.png",
    },
    {
      label: "Corresponsales no bancarios",
      description: "Permite acceder a sectores no bancarizados desde distintos comercios",
      imgPath: "/assets/images/gadget7.png",
    },
  ]);
  return (
    <Grid
      container
      width="100%"
      height="100%"
      justifyContent={"center"}
      alignItems={"center"}
      margin={"0px"}
      marginBottom={"50px"}
    >
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        boxShadow={1}
        sx={{
          backgroundColor: colors.light.main,
        }}
      >
        <Grid item xs={12}>
          <Grid container alignItems={"center"}>
            <Grid item xs={2} paddingBottom={"50px"}>
              <Grid container direction={"column"} alignItems={"center"}></Grid>
            </Grid>
            <Grid item xs={3} paddingBottom={"50px"}>
              <Grid container direction={"column"} alignItems={"center"}>
                <Typography
                  variant="h1"
                  fontFamily={"DarkerGrotesque"}
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                  lineHeight="80%"
                  paddingBottom={"25px"}
                >
                  Lo que tus{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `<label style='font-family:DarkerGrotesque-Extrabold; color:${colors.dark.main}'>clientes merecen</label>`,
                    }}
                  />
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  A través de nuestros canales electrónicos o las  de tu proveedor de confianza, nos integramos a tu core financiero mediante un moderno midelware para brindarte la mejor experiencia en canales para atención al cliente.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={7} paddingBottom={"50px"}>
              <Grid container direction={"column"} alignItems={"center"}>
                <img
                  src="/assets/images/banner_pc.png"
                  alt=""
                  width={"50%"}
                  height={"50%"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant="h2"
        sx={{ color: colors.dark.main }}
        textAlign={"center"}
        fontFamily={"DarkerGrotesque-Extrabold"}
        margin={"auto"}
        paddingTop={"15px"}
        paddingBottom={"20px"}
      >
        Soluciones para entidades financieras
      </Typography>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={1}
          paddingTop={"50px"}
          paddingBottom={"50px"}
          sx={{
            backgroundColor: colors.light.main,
          }}
        >
          <Grid item xs={12}>
            <Grid container direction={"column"} alignItems={"center"}>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  Entidad Financiera + Cliente + Comodidad + Confort +
                </Typography>
                <Typography
                  variant="h1"
                  fontFamily={"DarkerGrotesque"}
                  sx={{ color: colors.dark.main }}
                  textAlign={"center"}
                >
                  Nuestros servicios
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              columnSpacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {gadget &&
                gadget.map((gdt, index) => (
                  <Grid item xs={4} key={index}>
                    <Grid
                      container
                      columnSpacing={2}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid item xs={2}>
                        {gadget.length > 0 && (
                          <img
                            src={gdt.imgPath}
                            alt={gdt.label}
                            width={"90%"}
                            height={"90%"}
                          />
                        )}
                      </Grid>
                      <Grid item xs={8}>
                        <Grid
                          container
                          direction={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Grid item>
                            {gadget.length > 0 && (
                              <Typography
                                variant="h4"
                                fontFamily={"DarkerGrotesque"}
                                sx={{ color: colors.dark.main }}
                                textAlign={"left"}
                              >
                                {gdt.label}
                              </Typography>
                            )}
                            {gadget.length > 0 && (
                              <Typography
                                variant="body1"
                                fontFamily={"DarkerGrotesque"}
                                sx={{ color: colors.dark.main }}
                                textAlign={"left"}
                              >
                                {gdt.description}
                              </Typography>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={5}>
            <Typography
              variant="h2"
              sx={{ color: colors.dark.main }}
              textAlign={"center"}
              margin={"auto"}
              paddingTop={"10px"}
              paddingBottom={"25px"}
              lineHeight={"80%"}
            >
              Te presentamos{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: `<label style='font-family:DarkerGrotesque-Extrabold; color:${colors.dark.main}'>variedad de temas</label>`,
                }}
              />{" "}
              que se{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: `<label style='font-family:DarkerGrotesque-Extrabold; color:${colors.dark.main}'>adaptan</label>`,
                }}
              />{" "}
              a tus{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: `<label style='font-family:DarkerGrotesque-Extrabold; color:${colors.dark.main}'>necesidades.</label>`,
                }}
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: colors.dark.main }}
              textAlign={"center"}
              paddingBottom={"25px"}
            >
              ¡Plantillas prediseñadas y más!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={12}>
            <Slider />
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction={"column"}
              alignItems={"center"}
              padding={"25px"}
            >
              <Button
                variant="contained"
                startIcon={<LoginIcon />}
                sx={{
                  color: colors.white.main,
                  backgroundColor: colors.green.main,
                }}
              >
                Ver temas
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
