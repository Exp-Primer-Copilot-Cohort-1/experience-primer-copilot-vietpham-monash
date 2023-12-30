//Create web server with express
const express = require('express');
const app = express();

//Create server with express
const server = require('http').createServer(app);

//Import socket.io
const io = require('socket.io')(server);

//Import mongoose
const mongoose = require('mongoose');

//Import body-parser
const bodyParser = require('body-parser');

//Import express-session
const session = require('express-session');

//Import connect-mongo
const MongoStore = require('connect-mongo')(session);

//Import connect-flash
const flash = require('connect-flash');

//Import passport
const passport = require('passport');

//Import config
const config = require('./config/database');

//Import path
const path = require('path');

//Import pug
const pug = require('pug');

//Import express-validator
const { check, validationResult } = require('express-validator');

//Import express-validator
const { matchedData, sanitize } = require('express-validator');

//Import express-validator
const { sanitizeBody } = require('express-validator');

//Import moment
const moment = require('moment');

//Import multer
const multer = require('multer');

//Import fs
const fs = require('fs');

//Import Jimp
const Jimp = require('jimp');

//Import bcrypt
const bcrypt = require('bcryptjs');

//Import User
const User = require('./models/user');

//Import Comment
const Comment = require('./models/comment');

//Import Post
const Post = require('./models/post');

//Import Chat
const Chat = require('./models/chat');

//Import Group
const Group = require('./models/group');

//Import GroupMessage
const GroupMessage = require('./models/groupMessage');

//Import GroupMessage
const GroupMember = require('./models/groupMember');

//Import User
const User = require('./models/user');

//Import Message
const Message = require('./models/message');

//Im
