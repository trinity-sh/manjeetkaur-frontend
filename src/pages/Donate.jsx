import React from "react";
import "./styles/donate.css";
import DonateImg from "../assets/work3.jpeg";
import {
    Box,
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    Slider,
    TextField,
} from "@mui/material";

function Donate() {
    return (
        <div
            id="donate-container"
            className="box-content mob:px-8 py-16 flex justify-center"
        >
            <div className="flex wide:flex-row mob:flex-col box-border max-w-[1024px] w-full">
                <div className="flex wide:w-1/2 flex-col mb-8">
                    <p className="monospace text-3xl mb-5 font-medium">
                        Donate to
                        <br />
                        <b className="monospace">Manjeet Kaur Foundation</b>
                    </p>
                    <hr /><br />
                    <img
                        className="rounded-2xl my-8"
                        src={DonateImg}
                        alt="Donation"
                    />
                    <div>
                        <p>
                            Every child deserves a chance at a better future,
                            but unfortunately, many children around the world
                            are facing unimaginable challenges like poverty,
                            hunger, and a lack of access to education and
                            healthcare. These challenges can have a devastating
                            impact on a child's life, hindering their ability to
                            reach their full potential and limiting their
                            opportunities. But with your help, we can make a
                            difference.
                        </p>
                        <br />

                        <p>
                            <b className="text-pink-600 text-2xl block mb-3 mt-5">Plea for Help</b>
                            We urgently need your help to provide these children
                            with the support they need to thrive. Every dollar
                            counts, and we implore you to make a donation today.
                            Your contribution will go towards providing food,
                            education, healthcare, and other essentials that can
                            change a child's life forever.
                        </p>
                        <br />

                        <p>
                            <b className="text-pink-600 text-2xl block mb-3 mt-5">How will your donation help?</b>
                            <b>
                                📌 Just $25 can provide a week's worth of
                                nutritious food for a hungry child.
                            </b>
                            <br />
                            <br />
                            <b>
                                📌 $50 can provide school supplies for a child
                                for an entire year, giving them the tools they
                                need to succeed.
                            </b>
                            <br />
                            <br />
                            <b>
                                📌 $100 can provide a month's worth of medical
                                care for a sick child, giving them the chance to
                                recover and stay healthy.
                            </b>
                        </p>
                    </div>
                </div>
                <div className="flex wide:w-1/2 wide:ml-10">
                    <div className="rounded-2xl bg-white p-6 h-full w-full space-y-10 flex flex-col">
                        <TextField
                            className="w-full m-3"
                            label="Name"
                            variant="outlined"
                            type="text"
                            required
                        />
                        <TextField
                            className="w-full"
                            label="Email"
                            variant="outlined"
                            type="email"
                            required
                        />
                        <TextField
                            className="w-full"
                            label="Phone"
                            variant="outlined"
                            type="tel"
                            required
                        />
                        <TextField
                            className="w-full"
                            label="Message (optional)"
                            multiline
                            maxRows={7}
                            minRows={7}
                        />
                        <p>
                            <hr />
                            <br />
                            Donation Type
                            <span className="text-red-600">{` `}*</span>
                        </p>

                        <RadioGroup
                            className="self-center"
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            label="Donation Type"
                        >
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="One Time"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Monthly"
                            />
                        </RadioGroup>
                        <hr />
                        <p>
                            Select donation amount (in USD){" "}
                            <span className="text-red-600">{` `}*</span>
                        </p>
                        <Box sx={{ width: 300 }} className="self-center">
                            <Slider
                                required
                                aria-label="Restricted values"
                                max={1000}
                                defaultValue={1000}
                                step={null}
                                valueLabelDisplay="on"
                                getAriaValueText={(val) => `USD ${val}`}
                                marks={[
                                    { value: 100, label: "$100" },
                                    { value: 250, label: "$200" },
                                    { value: 500, label: "$500" },
                                    { value: 1000, label: "$1000" },
                                ]}
                            />
                        </Box>
                        <hr />
                        <p>
                            Or enter amount (in USD){" "}
                            <span className="text-red-600">{` `}*</span>
                        </p>
                        <TextField
                            className="w-full"
                            label="$ USD.00"
                            variant="outlined"
                            type="email"
                        />
                        <Button
                            variant="outlined"
                            className="w-full"
                            size="large"
                        >
                            DONATE and support 💝
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donate;
