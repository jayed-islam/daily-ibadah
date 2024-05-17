import { useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Label from "@/components/label";
import Iconify from "@/components/iconify";
import IbadahEditDialog from "../ibadah/view/ibadah-edit-modal";
import useBoolean from "@/hooks/use-boolean";

// ----------------------------------------------------------------------

export default function IbadahSheetTableRow({
  selected,
  name,
  avatarUrl,
  company,
  role,
  isVerified,
  status,
  handleClick,
}) {
  const editModal = useBoolean();

  return (
    <>
      <TableRow hover>
        <TableCell
          component="th"
          scope="row"
          padding="none"
          sx={{
            border: "1px solid #000",
          }}
          align="center"
        >
          <Typography variant="subtitle2" noWrap>
            17 May
          </Typography>
        </TableCell>

        <TableCell
          align="center"
          sx={{
            border: "1px solid #000",
          }}
        >
          Friday
        </TableCell>

        <TableCell
          align="center"
          sx={{
            border: "1px solid #000",
          }}
        >
          5 Waktah
        </TableCell>

        <TableCell
          align="center"
          sx={{
            border: "1px solid #000",
          }}
        >
          32 Rakat
        </TableCell>

        <TableCell
          align="center"
          sx={{
            border: "1px solid #000",
          }}
        >
          5 Page
        </TableCell>

        <TableCell
          align="center"
          sx={{
            border: "1px solid #000",
          }}
        >
          7 Piece
        </TableCell>

        <TableCell
          align="center"
          sx={{
            border: "1px solid #000",
          }}
        >
          7 Piece
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={editModal.setTrue}>
            <Iconify icon="tabler:edit" />
          </IconButton>
        </TableCell>
      </TableRow>

      <IbadahEditDialog dialog={editModal} />
    </>
  );
}

IbadahSheetTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
