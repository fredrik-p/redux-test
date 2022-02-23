import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./features/Counter";
import { Button, Typography, Card, CardContent } from "@mui/material";

export default function Counter() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="counter">
            <Card raised="true">
                <CardContent>
                    <Typography variant="h5" align='center'>
                        The count is: {count}
                    </Typography>

                    <Button onClick={() => dispatch(increment())}>increment</Button>
                    <Button onClick={() => dispatch(decrement())}>decrement</Button>
                    <Button onClick={() => dispatch(incrementByAmount(10))}>
                        Increment by 10
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
