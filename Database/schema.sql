CREATE DATABASE DB;
USE DB;
CREATE TABLE users(
    user_id INT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    profile_picture VARCHAR(255),
    join_date DATE TIMESTAMP,
    subscriptionCount INT
);
CREATE TABLE video(
    videoid INT PRIMARY KEY,
    userid INT,
    title VARCHAR(255),
    description VARCHAR(255),
    videoUrl VARCHAR(255),
    thumbnailUrl VARCHAR(255),
    views INT,
    duration INT,
    uploadDate DATE TIMESTAMP,
    FOREIGN KEY (userid) REFERENCES users(user_id),
    FOREIGN KEY (videoId) REFERENCES comments(videoId),
    FOREIGN KEY (videoId) REFERENCES likes(videoId),
    FOREIGN KEY (videoId) REFERENCES dislikes(videoId),
    FOREIGN KEY (videoId) REFERENCES playlists(videoId),
    privacy ENUM('public','private','unlisted')
);
CREATE TABLE comments(
    commentId INT PRIMARY KEY,
    videoId INT,
    userId INT,
    content VARCHAR(255),
    parentCommentId INT,
    timestamp DATE TIMESTAMP,
    FOREIGN KEY (videoId) REFERENCES video(videoId),
    FOREIGN KEY (userId) REFERENCES users(user_id)
);
CREATE TABLE likes(
    likeId INT PRIMARY KEY,
    videoId INT,
    commentId INT,
    userId INT,
    timestamp DATE TIMESTAMP,
    FOREIGN KEY (videoId) REFERENCES video(videoId),
    FOREIGN KEY (userId) REFERENCES users(user_id)
);
CREATE TABLE dislikes(
    dislikeId INT PRIMARY KEY,
    videoId INT,
    commentId INT,
    userId INT,
    timestamp DATE TIMESTAMP,
    FOREIGN KEY (videoId) REFERENCES video(videoId),
    FOREIGN KEY (userId) REFERENCES users(user_id)
);
CREATE TABLE playlists(
    playlistId INT PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    createDate DATE TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(user_id)
);
CREATE TABLE playlist_videos(
    playlistId INT,
    videoId INT,
    PRIMARY KEY (playlistId, videoId),
    FOREIGN KEY (playlistId) REFERENCES playlists(playlistId),
    FOREIGN KEY (videoId) REFERENCES video(videoId)
);
CREATE TABLE subscriptions(
    subscriptionId INT PRIMARY KEY,
    subscriberId INT,
    subscribedToId INT,
    timestamp DATE TIMESTAMP,
    FOREIGN KEY (subscriberId) REFERENCES users(user_id),
    FOREIGN KEY (subscribedToId) REFERENCES users(user_id)
);
CREATE TABLE Channels(
    channelId STRING PRIMARY KEY,
    userId STRING,
    channelName STRING,
    description STRING,
    joinDate DATE TIMESTAMP,
    totalViews INT,
    subscribesrCount INT,
    FOREIGN KEY (userId) REFERENCES users(user_id)
);
CREATE TABLE category(
    categoryId VARCHAR(255) PRIMARY KEY,
    categoryName VARCHAR(255),
);
CREATE TABLE video_category(
    videoId INT,
    categoryId VARCHAR(255),
    PRIMARY KEY (videoId, categoryId),
    FOREIGN KEY (videoId) REFERENCES video(videoId),
    FOREIGN KEY (categoryId) REFERENCES category(categoryId)
);