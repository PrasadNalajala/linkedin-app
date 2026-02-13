"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

export default function HomePage() {
  const [postText, setPostText] = React.useState("");

  const handlePost = () => {
    if (postText.trim()) {
      console.log("Posting:", postText);
      setPostText("");
    }
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Grid container spacing={2.5}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper elevation={0} sx={{ mb: 2, overflow: "hidden" }}>
              {/* Profile Cover */}
              <Box
                sx={{
                  height: 54,
                  background: "radial-gradient( #667eea 30%, #764ba2 100%)",
                }}
              />
              <Box sx={{ px: 2, pb: 2, mt: -4 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Avatar
                    sx={{
                      width: 72,
                      height: 72,
                      mb: 1,
                      border: "2px solid white",
                      bgcolor: "primary.main",
                    }}
                    alt="User Profile"
                  >
                    PS
                  </Avatar>
                  <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
                    Priyanka S
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 2 }}
                  >
                    Operations Manager at Instalanes
                  </Typography>
                </Box>
                <Divider sx={{ my: 1.5 }} />
                <Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{
                      py: 0.75,
                      "&:hover": { bgcolor: "rgba(0,0,0,0.04)", cursor: "pointer" },
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Profile viewers
                    </Typography>
                    <Typography variant="body2" color="primary" fontWeight={600}>
                      142
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{
                      py: 0.75,
                      "&:hover": { bgcolor: "rgba(0,0,0,0.04)", cursor: "pointer" },
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Post impressions
                    </Typography>
                    <Typography variant="body2" color="primary" fontWeight={600}>
                      1,284
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 1.5 }} />
                <Box>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                    Access exclusive tools & insights
                  </Typography>
                  <Button
                    variant="text"
                    size="small"
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      color: "text.primary",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                    }}
                  >
                    🟡 Try Premium for free
                  </Button>
                </Box>
              </Box>
            </Paper>

            <Paper elevation={0} sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom color="primary">
                Recent
              </Typography>
              <List dense disablePadding>
                {["React Developers", "JavaScript Community", "Web Development"].map(
                  (item, idx) => (
                    <ListItem
                      key={idx}
                      button
                      sx={{
                        px: 0,
                        py: 0.5,
                        "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                      }}
                    >
                      <Typography variant="body2" fontWeight={500}>
                        # {item}
                      </Typography>
                    </ListItem>
                  )
                )}
              </List>
            </Paper>
          </Grid>

          {/* Center Feed */}
          <Grid item xs={12} md={6}>
            {/* Post Composer */}
            <Card elevation={0} sx={{ mb: 2 }}>
              <CardContent>
                <Box display="flex" gap={1.5}>
                  <Avatar sx={{ bgcolor: "primary.main" }}>PS</Avatar>
                  <TextField
                    placeholder="Start a post"
                    fullWidth
                    multiline
                    rows={1}
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 25,
                        bgcolor: "background.default",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.03)",
                        },
                        "&.Mui-focused": {
                          bgcolor: "background.paper",
                        },
                      },
                    }}
                  />
                </Box>
              </CardContent>
              <Divider />
              <CardActions sx={{ px: 2, py: 1 }}>
                <Stack direction="row" spacing={0.5} sx={{ flex: 1 }}>
                  <Button
                    size="small"
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    📷 Photo
                  </Button>
                  <Button
                    size="small"
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    🎥 Video
                  </Button>
                  <Button
                    size="small"
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    📅 Event
                  </Button>
                  <Button
                    size="small"
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    📝 Article
                  </Button>
                </Stack>
              </CardActions>
            </Card>

            <Divider sx={{ my: 1 }}>
              <Typography variant="caption" color="text.secondary">
                Sort by: Top
              </Typography>
            </Divider>

            {/* Feed Posts */}
            {[
              {
                name: "Prasad Nallajala",
                role: "MERN Stack Developer • Freelancer",
                time: "1h",
                content:
                  "Excited to share that I’ve officially started my journey as a Freelance MERN Stack Developer! 🚀\n\nLooking forward to building scalable SaaS platforms, crafting responsive user interfaces with Next.js & MUI, and collaborating with talented teams across the globe.\n\nGrateful for the opportunity and excited for what’s ahead!",
                hashtags: "#freelance #mernstack #nextjs #saas #webdevelopment",
                likes: 32,
                comments: 6,
              },
              {
                name: "Alice Johnson",
                role: "Product Manager",
                time: "2h",
                content:
                  "Excited to share that our team just launched a new feature that will help millions of users connect better. It's been an amazing journey working with such talented people!",
                hashtags: "#productlaunch #teamwork #innovation",
                likes: 124,
                comments: 18,
              },
              {
                name: "Michael Brown",
                role: "Senior Developer",
                time: "5h",
                content:
                  "Just published a new article on clean code principles and best practices for React applications. Check it out!",
                hashtags: "#react #cleancode #webdev",
                likes: 89,
                comments: 12,
              },
              {
                name: "Sarah Chen",
                role: "UX Designer",
                time: "1d",
                content:
                  "Design thinking workshop was incredible! Learned so much about user-centered design and accessibility. Can't wait to apply these insights to our next project.",
                hashtags: "#ux #design #accessibility",
                likes: 156,
                comments: 24,
              },
            ].map((post, idx) => (
              <Card key={idx} elevation={0} sx={{ mb: 2 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                      {post.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                  }
                  action={
                    <IconButton size="small">
                      <Typography variant="h6">⋯</Typography>
                    </IconButton>
                  }
                  title={
                    <Typography variant="subtitle2" fontWeight={600}>
                      {post.name}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="caption" color="text.secondary">
                      {post.role} • {post.time}
                    </Typography>
                  }
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body1" paragraph>
                    {post.content}
                  </Typography>
                  <Typography variant="body2" color="primary" fontWeight={500}>
                    {post.hashtags}
                  </Typography>
                </CardContent>
                <Divider />
                <Box sx={{ px: 2, py: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    👍 {post.likes} • {post.comments} comments
                  </Typography>
                </Box>
                <Divider />
                <CardActions sx={{ px: 1, py: 0.5 }}>
                  <Button
                    size="small"
                    fullWidth
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    👍 Like
                  </Button>
                  <Button
                    size="small"
                    fullWidth
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    💬 Comment
                  </Button>
                  <Button
                    size="small"
                    fullWidth
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    🔁 Repost
                  </Button>
                  <Button
                    size="small"
                    fullWidth
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    📤 Send
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper elevation={0} sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                Add to your feed
              </Typography>
              <List disablePadding>
                {[
                  { name: "Sarah Williams", role: "UX Designer", initials: "SW" },
                  { name: "David Chen", role: "Tech Lead", initials: "DC" },
                  { name: "Emily Davis", role: "Data Scientist", initials: "ED" },
                ].map((person, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: "secondary.light",
                          color: "text.primary",
                        }}
                      >
                        {person.initials}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2" fontWeight={600}>
                          {person.name}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="caption" color="text.secondary">
                          {person.role}
                        </Typography>
                      }
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ ml: 1, minWidth: 80 }}
                    >
                      Follow
                    </Button>
                  </ListItem>
                ))}
              </List>
              <Button
                size="small"
                fullWidth
                sx={{
                  mt: 1,
                  color: "text.secondary",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                }}
              >
                View all recommendations →
              </Button>
            </Paper>

            <Paper elevation={0} sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                Today's top courses
              </Typography>
              <List dense disablePadding>
                {[
                  { title: "React Advanced Patterns", level: "Advanced", time: "2.5 hrs" },
                  { title: "System Design Fundamentals", level: "Intermediate", time: "4 hrs" },
                  { title: "Leadership Skills", level: "Beginner", time: "1.5 hrs" },
                ].map((course, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      px: 0,
                      py: 1.5,
                      "&:hover": { bgcolor: "rgba(0,0,0,0.02)", cursor: "pointer" },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography variant="body2" fontWeight={600}>
                          {course.title}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="caption" color="text.secondary">
                          {course.level} • {course.time}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Button
                size="small"
                fullWidth
                sx={{
                  mt: 1,
                  color: "text.secondary",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
                }}
              >
                Show more →
              </Button>
            </Paper>

            <Paper elevation={0} sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                Trending now
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                {[
                  { category: "Technology", topic: "AI and Machine Learning", posts: "12,547" },
                  { category: "Careers", topic: "Remote Work Culture", posts: "8,234" },
                  { category: "Development", topic: "React 19 Features", posts: "5,891" },
                ].map((trend, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      "&:hover": { bgcolor: "rgba(0,0,0,0.02)", cursor: "pointer" },
                      p: 1,
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      Trending in {trend.category}
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {trend.topic}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {trend.posts} posts
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}