import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Card, { CardProps } from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Chart, { useChart } from "@/components/chart";
import { ApexOptions } from "apexcharts";

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    labels: string[];
    colors?: string[];
    series: {
      name: string;
      type: string;
      fill?: string;
      data: number[];
    }[];
    options?: ApexOptions;
  };
}

export default function AppDailyIbadahView({
  title,
  subheader,
  chart,
  ...other
}: Props) {
  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: "16%",
      },
    },
    fill: {
      type: series.map((i) => i.fill) as string[],
    },
    labels,
    xaxis: {
      type: "datetime",
    },
    // tooltip: {
    //   shared: true,
    //   intersect: false,
    //   y: {
    //     formatter: (value: number) => {
    //       if (typeof value !== "undefined") {
    //         return `${value.toFixed(0)} visit`;
    //       }
    //       return value;
    //     },
    //   },
    // },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number, { seriesIndex, dataPointIndex, w }) => {
          const ibadahType = w.config.series[seriesIndex].name;
          const ibadahCount = w.config.series[seriesIndex].data[dataPointIndex];
          let ibadahUnit = "visit"; // Default to "visit"

          // Dynamically change the unit based on ibadah type
          if (ibadahType === "Salat") {
            ibadahUnit = "rakat";
          } else if (ibadahType === "Quran Telwat") {
            ibadahUnit = "ayah";
          } else if (ibadahType === "Sadaqah") {
            ibadahUnit = "money";
          } else if (ibadahType === "Hadith Reading") {
            ibadahUnit = "count";
          }

          return `${ibadahCount.toFixed(0)} ${ibadahUnit}`;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={285}
        />
      </Box>
    </Card>
  );
}

AppDailyIbadahView.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
