import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const styles = {
  customBtnContained: {
    backgroundColor: "text.secondary",
    color: "background.default",
    "&:hover": {
      backgroundColor: "text.secondary",
      opacity: 0.85,
    },
  },
  customBtnOutlined: {
    backgroundColor: "background.default",
    borderColor: "text.secondary",
    color: "text.secondary",
    "&:hover": {
      borderColor: "text.secondary",
      backgroundColor: "background.default",
      opacity: 0.85,
    },
  },
};

type From = {
  name?: string;
  img?: string;
};
type Body = {
  text?: string;
};

type MessageBodyProps = {
  id: number;
  type: string;
  title?: string;
  body?: Body;
  isRead: boolean;
  timeStamp?: string;
  from?: From;
};

const MessageBody = ({
  title,
  from,
  timeStamp,
  type,
  body,
}: MessageBodyProps) => {
  return (
    <Box>
      <Stack gap={2} p={1} direction="row">
        <Box>
          <Avatar src={from?.img} />
        </Box>
        <Box>
          <Box gap={1} alignItems="center">
            <Typography
              component="div"
              display="inline"
              variant="body2"
              fontWeight="bold"
              color="text.secondary"
            >
              {from?.name}
              <Typography
                ml={1}
                component="div"
                display="inline"
                variant="body2"
                color="text.secondary"
              >
                {title}
              </Typography>
            </Typography>

            <Typography display="block" variant="caption">
              {timeStamp}
            </Typography>
          </Box>
          <Box>
            {type === "request" ? (
              <></>
            ) : (
              <Box>
                <Paper elevation={0} sx={{ p: 2, my: 1 }}>
                  {body?.text}
                </Paper>
              </Box>
            )}

            {type === "request" ? (
              <Stack my={1} gap={2} direction="row">
                <Button
                  size="small"
                  sx={styles.customBtnContained}
                  variant="contained"
                >
                  Accept
                </Button>
                <Button
                  size="small"
                  sx={styles.customBtnOutlined}
                  variant="outlined"
                >
                  Decline
                </Button>
              </Stack>
            ) : (
              <Box my={1}>
                <Button
                  size="small"
                  sx={styles.customBtnContained}
                  variant="contained"
                >
                  Reply
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
};

export default MessageBody;
