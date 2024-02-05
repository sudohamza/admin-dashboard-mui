import { Box, Paper, Stack, Typography, colors } from "@mui/material";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { green, red } from "@mui/material/colors";

type InfoLetProps = {
  subtitle: string;
  currentWeekSales: number;
  lastWeekSales: number;
  color: string;
  data: number[];
};

const InfoLet = ({
  subtitle,
  currentWeekSales,
  lastWeekSales,
  color,
  data,
}: InfoLetProps) => {
  const [showHighlight, setShowHighlight] = React.useState(true);
  const [showTooltip, setShowTooltip] = React.useState(true);

  const difference = currentWeekSales - lastWeekSales;
  const percentageOfDifference =
    ((currentWeekSales - lastWeekSales) / lastWeekSales) * 100;

  return (
    <Paper elevation={0}>
      <Stack
        direction="row"
        alignItems="center"
        py={2}
        sx={{ px: { lg: 5, xs: 2 } }}
      >
        <Box color="text.secondary">
          <Typography variant="subtitle1">{subtitle}</Typography>
          <Typography my={2} variant="h4" fontWeight="bold">
            {currentWeekSales.toLocaleString()}
          </Typography>
          <Box
            gap={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              display="flex"
              sx={{
                p: 0.5,
                color: difference > 0 ? green[400] : red[400],
                fontSize: 18,
                borderRadius: "100%",
                backgroundColor:
                  difference > 0 ? green[400] + "30" : red[400] + "30",
              }}
            >
              {difference > 0 ? (
                <TrendingUpIcon fontSize="inherit" />
              ) : (
                <TrendingDownIcon fontSize="inherit" />
              )}
            </Box>
            <Typography fontWeight="bold" variant="subtitle1">
              {percentageOfDifference > 0 && "+"}
              {percentageOfDifference.toFixed(1)}%
            </Typography>
            <Typography variant="body2" color="text.primary">
              than last week
            </Typography>
          </Box>
        </Box>
        <Box ml="auto">
          <SparkLineChart
            plotType="line"
            data={data}
            colors={[color]}
            height={70}
            width={100}
            showHighlight={showHighlight}
            showTooltip={showTooltip}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default InfoLet;
