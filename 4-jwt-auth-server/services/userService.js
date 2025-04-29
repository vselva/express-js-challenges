const users = [
    {
        id:1,
        username: 'selva',
        password: '$2b$10$VR6JlC062pQjDRUYTUM6leav//PNcGY4lzkQ1nOBCy/Nh9ukSl.7q' // password123
    }
];

const findUserByName = (username) => {
    return users.find(u => u.username === username);
};

module.exports = {
    findUserByName
}
