import React from "react";
import { Button } from "@mui/material";
import TextField from "./TextField";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
import CheckBoxGroup from "./CheckBoxGroup";

function MyForm() {
    return (
        <div>
            <TextField
                name="firstName"
                label="First Name"
                rules={{ required: "Required!" }}
            />
            <br />
            <br />
            <TextField
                name="lastName"
                label="Last Name"
                rules={{ required: "Required!" }}
            />

            <br />
            <br />
            <Select
                name="age"
                label="Age"
                style={{ width: "120px" }}
                rules={{ required: "Required!" }}
                defaultItem={{ name: "Select", value: "" }}
                items={[
                    { name: "Ten", value: 10 },
                    { name: "Twenty", value: 20 },
                    { name: "Thirty", value: 30 },
                    { name: "Fourty", value: 40 },
                ]}
            />

            <br />
            <br />
            <RadioGroup
                name="gender"
                label="Gender"
                rules={{ required: "Required!" }}
                items={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" },
                ]}
            />

            <br />
            <br />

            <CheckBoxGroup
                name="hobbies"
                label="Hobbies"
                rules={{ required: "Required!" }}
                items={[
                    { name: "Skateboarding", value: "skateboarding" },
                    { name: "Cabriolets", value: "cabriolets" },
                    { name: "Pizza", value: "pizza" },
                    { name: "Bitcoin", value: "bitcoin" },
                    { name: "Coding", value: "coding" },
                ]}
            />

            <br />
            <br />
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </div>
    );
}

export default MyForm;
