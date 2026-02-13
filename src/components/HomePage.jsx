"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
import Badge from "@mui/material/Badge";
import InputAdornment from "@mui/material/InputAdornment";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function HomePage() {
  const [postText, setPostText] = React.useState("");

  const handlePost = () => {
    if (postText.trim()) {
      console.log("Posting:", postText);
      setPostText("");
    }
  };

  return (
    <Box>
      {/* Header */}
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" sx={{ mr: 3 }}>
              LinkedIn
            </Typography>
            <TextField
              placeholder="Search"
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              sx={{ bgcolor: "white", borderRadius: 1, width: 280 }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="error">
                  <PeopleIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <WorkIcon />
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={2} color="error">
                  <MessageIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={5} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Avatar sx={{ width: 28, height: 28 }}>PS</Avatar>
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ bgcolor: "#f4f2ee", minHeight: "100vh", py: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Left Sidebar */}
            <Grid item xs={12} md={3}>
              <Paper>
                <Box sx={{ p: 2 }}>
                  <Box display="flex" flexDirection="column" alignItems="center" sx={{ mb: 2 }}>
                    <Avatar sx={{ width: 72, height: 72, mb: 2 }}>PS</Avatar>
                    <Typography variant="h6" align="center">
                      Priyanka S
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Operations Manager at Instalanes
                    </Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ py: 2 }}>
                    <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Profile viewers
                      </Typography>
                      <Typography variant="body2" color="primary">
                        142
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="body2" color="text.secondary">
                        Post impressions
                      </Typography>
                      <Typography variant="body2" color="primary">
                        1,284
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ pt: 2 }}>
                    <Typography variant="body2" gutterBottom>
                      Access exclusive tools & insights
                    </Typography>
                    <Button variant="text" color="primary" size="small">
                      Try Premium
                    </Button>
                  </Box>
                </Box>
              </Paper>

              <Paper sx={{ mt: 2, p: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Recent
                </Typography>
                <List dense>
                  <ListItem button>
                    <ListItemText primary="# React Developers" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="# JavaScript Community" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="# Web Development" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            {/* Center Feed */}
            <Grid item xs={12} md={6}>
              {/* Post Composer */}
              <Card>
                <CardContent>
                  <Box display="flex" gap={2}>
                    <Avatar>PS</Avatar>
                    <TextField
                      placeholder="Start a post"
                      fullWidth
                      multiline
                      rows={2}
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button size="small" startIcon={<PhotoCameraIcon />}>
                    Photo
                  </Button>
                  <Button size="small" startIcon={<VideocamIcon />}>
                    Video
                  </Button>
                  <Button size="small" startIcon={<EventIcon />}>
                    Event
                  </Button>
                  <Button size="small" startIcon={<ArticleIcon />}>
                    Article
                  </Button>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained" onClick={handlePost} disabled={!postText.trim()}>
                    Post
                  </Button>
                </CardActions>
              </Card>

              <Divider sx={{ my: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  Sort by: Top
                </Typography>
              </Divider>

              {/* Feed Posts */}
              {[
                {
                  name: "Prasad Nallajala",
                  role: "MERN Stack Developer",
                  time: "1h",
                  content:
                    "Excited to share that I've officially started my journey as a Freelance MERN Stack Developer! Looking forward to building scalable SaaS platforms and collaborating with talented teams.",
                  hashtags: "#freelance #mernstack #nextjs",
                  likes: 32,
                  comments: 6,
                },
                {
                  name: "Alice Johnson",
                  role: "Product Manager",
                  time: "2h",
                  content:
                    "Excited to share that our team just launched a new feature that will help millions of users connect better!",
                  hashtags: "#productlaunch #teamwork",
                  likes: 124,
                  comments: 18,
                },
                {
                  name: "Michael Brown",
                  role: "Senior Developer",
                  time: "5h",
                  content:
                    "Just published a new article on clean code principles and best practices for React applications.",
                  hashtags: "#react #cleancode",
                  likes: 89,
                  comments: 12,
                },
              ].map((post, idx) => (
                <Card key={idx} sx={{ mb: 2 }}>
                  <CardHeader
                    avatar={<Avatar>{post.name.split(" ").map((n) => n[0]).join("")}</Avatar>}
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={post.name}
                    subheader={`${post.role} • ${post.time}`}
                  />
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      {post.content}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {post.hashtags}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <Box sx={{ px: 2, py: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      {post.likes} likes • {post.comments} comments
                    </Typography>
                  </Box>
                  <Divider />
                  <CardActions>
                    <Button size="small" startIcon={<ThumbUpIcon />} fullWidth>
                      Like
                    </Button>
                    <Button size="small" startIcon={<CommentIcon />} fullWidth>
                      Comment
                    </Button>
                    <Button size="small" startIcon={<ShareIcon />} fullWidth>
                      Repost
                    </Button>
                    <Button size="small" startIcon={<SendIcon />} fullWidth>
                      Send
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>

            {/* Right Sidebar */}
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Add to your feed
                </Typography>
                <List>
                  {[
                    { name: "Sarah Williams", role: "UX Designer" },
                    { name: "David Chen", role: "Tech Lead" },
                    { name: "Emily Davis", role: "Data Scientist" },
                  ].map((person, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar>{person.name.split(" ").map((n) => n[0]).join("")}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={person.name} secondary={person.role} />
                      <Button variant="outlined" size="small">
                        Follow
                      </Button>
                    </ListItem>
                  ))}
                </List>
                <Button size="small" fullWidth>
                  View all recommendations
                </Button>
              </Paper>

              <Paper sx={{ p: 2, mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Today's top courses
                </Typography>
                <List dense>
                  {[
                    { title: "React Advanced Patterns", level: "Advanced", time: "2.5 hrs" },
                    { title: "System Design Fundamentals", level: "Intermediate", time: "4 hrs" },
                    { title: "Leadership Skills", level: "Beginner", time: "1.5 hrs" },
                  ].map((course, idx) => (
                    <ListItem key={idx}>
                      <ListItemText
                        primary={course.title}
                        secondary={`${course.level} • ${course.time}`}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button size="small" fullWidth>
                  Show more
                </Button>
              </Paper>

              <Paper sx={{ p: 2, mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Trending now
                </Typography>
                <Stack spacing={2}>
                  {[
                    { category: "Technology", topic: "AI and Machine Learning", posts: "12,547" },
                    { category: "Careers", topic: "Remote Work Culture", posts: "8,234" },
                    { category: "Development", topic: "React 19 Features", posts: "5,891" },
                  ].map((trend, idx) => (
                    <Box key={idx}>
                      <Typography variant="caption" color="text.secondary">
                        Trending in {trend.category}
                      </Typography>
                      <Typography variant="body2">{trend.topic}</Typography>
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
    </Box>
  );
}