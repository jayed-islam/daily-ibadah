"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import AppDailyIbadahView from "./app-daily-ibadah";
import { Avatar, Card, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function AppSummeryView() {
  const generateIbadahData = () => {
    const currentDate = new Date();
    const labels = Array.from({ length: 9 }, (_, i) => {
      const date = new Date();
      date.setDate(currentDate.getDate() - i);
      return date.toISOString().split("T")[0];
    }).reverse();

    const series = [
      {
        name: "Salat",
        type: "column",
        fill: "solid",
        data: Array.from({ length: 9 }, () => {
          const randomRakat = Math.floor(Math.random() * 1) + 10;
          return Math.min(randomRakat, 32);
        }),
      },
      {
        name: "Quran Telwat",
        type: "area",
        fill: "gradient",
        data: Array.from(
          { length: 9 },
          () => Math.floor(Math.random() * 11) + 5
        ),
      },
      {
        name: "Hadith Reading",
        type: "line",
        fill: "solid",
        data: Array.from(
          { length: 9 },
          () => Math.floor(Math.random() * 9) + 2
        ),
      },
      {
        name: "Sadaqah",
        type: "line",
        fill: "solid",
        data: Array.from(
          { length: 9 },
          () => Math.floor(Math.random() * 5) + 1
        ),
      },
    ];

    return { labels, series };
  };

  const [ibadahData] = useState(generateIbadahData());

  const topUserData = [
    {
      profile: "assets/img/avatar_10.jpg",
      name: "Abul Qasem",
      position: "First",
    },
    { profile: "assets/img/avatar_11.jpg", name: "Jubaer", position: "Second" },
    {
      profile: "assets/img/avatar_19.jpg",
      name: "Mahbub",
      position: "Third",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ mt: "2rem" }}>
          <Grid xs={12} md={6} lg={8}>
            <AppDailyIbadahView
              title="Daily Ibadah"
              subheader="Previous 9 days summery"
              chart={ibadahData}
            />
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <Card className="p-5 mb-5">
              <Typography>
                আহলে কিতাবদের মধ্যে যারা কাফির (অর্থাৎ ইয়াহুদী ও নাসারা) এবং
                মুশরিকরা মোটেই পছন্দ করেনা যে, তোমাদের রবের পক্ষ হতে তোমাদের উপর
                কোন কল্যাণ বর্ষিত হোক, আর আল্লাহ যাকে ইচ্ছা করেন তাঁর করুণার
                জন্য নির্দিষ্ট করে নেন এবং আল্লাহ মহা করুণাময়।
                <span className="font-semibold"> আল-বাকারা: 105</span>
              </Typography>
            </Card>
            <Typography variant="h6">Previous week winners!!</Typography>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {topUserData.map((item, index) => (
                <Card
                  key={index}
                  className="flex items-center justify-center flex-col p-5"
                >
                  <Avatar src={item.profile} className="h-16 w-16" />
                  <Typography
                    variant="body2"
                    sx={{
                      pt: "0.3rem",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle2">{item.position}</Typography>
                </Card>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

{
  /* <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />
            }
          />
        </Grid> */
}

{
  /* <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: "America", value: 4344 },
                { label: "Asia", value: 5435 },
                { label: "Europe", value: 1443 },
                { label: "Africa", value: 4443 },
              ],
            }}
          />
        </Grid> */
}
