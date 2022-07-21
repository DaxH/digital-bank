import Fade from "@mui/material/Fade";

import colors from "../base/colors";
import typography from "../base/typography";
import borders from "../base/borders";

import pxToRem from "../functions/pxToRem";

const { toolTip } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const tooltip = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(200),
      backgroundColor: toolTip.main,
      color: toolTip.text,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
    },

    arrow: {
      color: toolTip.main,
    },
  },
};

export default tooltip;