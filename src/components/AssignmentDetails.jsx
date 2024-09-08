import { Button, Heading, Img } from "./..";
import React from "react";

export default function AssignmentDetails({
    assignmentTitle = "Assignment 2 is Due",
    dueDateText = "Sunday, 8 September, 11.59PM",
    courseEventText = "Course Event",
    courseTitle = "IS4108 Natural Language Processing",
    submitButton = "Submit",
    ...props
}) {

    return (
        <div        
            {...props}
            className={`${props.className} flex flex-1 items-end p-2.5 bg-[#4096ff7f] rounded-[10px] container-xs`}
        >
            <div className="mt-3 flex w-full flex-col items-center gap-3.5 sm:w-full sm:gap-3.5">
                <div className="flex items-start gap-2">
                    <Img src="images/img_file.svg" alt="Assignment 2 Is" className="h-[24px] w-[24px]" />
                    <Heading size="headinglg" as="h5" className="self-center tracking-[2.00px] sm:text-[17px]" >
                        {assignmentTitle}
                    </Heading>
                </div>
                <div className="mx-[18px] flex items-center gap-9 self-stretch sm:mx-0">
                </div>
            </div>
        </div>
    )
}