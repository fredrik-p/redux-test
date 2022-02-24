import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "../features/Users";
import { Button, TextField, Typography, Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';



function Users() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");

    return (
        <div className="App">
            {" "}
            <div className="addUser">
                <TextField
                    variant="outlined"
                    sx={{ marginRight: 2 }}
                    size="small"
                    type="text"
                    placeholder="Name..."
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    variant="outlined"
                    type="text"
                    size="small"
                    placeholder="Username..."
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <Button
                    onClick={() => {
                        dispatch(
                            addUser({
                                id: userList[userList.length - 1].id + 1,
                                name,
                                username,
                            })
                        );
                    }}
                >
                    {" "}
                    Add User
                </Button>
            </div>
            <div>
                {userList.map((user) => {
                    return (

                        <Card className="card" raised="true">
                            <CardContent>
                                <Typography variant="h5" align='center'>
                                    {user.name}

                                </Typography>
                                <Typography variant="h6" align='center' gutterBottom component="div">

                                    {user.username}
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    sx={{ width: 300, marginRight: 2 }}
                                    size="small"
                                    type="text"
                                    placeholder="New Username..."
                                    onChange={(event) => {
                                        setNewUsername(event.target.value);
                                    }}
                                />
                                <Button
                                    color="secondary"
                                    onClick={() => {
                                        dispatch(
                                            updateUsername({ id: user.id, username: newUsername })
                                        );
                                    }}
                                >
                                    {" "}
                                    Update Username
                                </Button>
                                <Button
                                    color="error"
                                    onClick={() => {
                                        dispatch(deleteUser({ id: user.id }));
                                    }}
                                >
                                    Delete User
                                </Button>
                            </CardContent>
                        </Card>

                    );
                })}
            </div>

        </div>
    );
}

export default Users;
