import React from "react";

export default function ButtonsResult({ data, reset, setValue }) {
    return (
        <>
            {data && (
                <pre style={{ textAlign: "left", color: "darkgrey" }}>
                    {JSON.stringify(
                        {
                            ...data,

                        },
                        null,
                        2
                    )}
                </pre>
            )}

            <button
                className="button buttonBlack"
                type="button"
                onClick={() => {
                    reset({

                        TextField: "",
                        Select: "",
                        ReactSelect: { value: "vanilla", label: "Vanilla" },
                        Checkbox: false,
                        switch: false,
                        RadioGroup: "",
                    });
                }}
            >
                Reset Form
            </button>
            <button className="button">submit</button>
        </>
    );
};
