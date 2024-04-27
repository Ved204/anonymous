import React from "react";
import Card from "@/components/home/card";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import Form from "platforms/components/form";

export default function TopicsForm() {
    //
    
    return(
        <div>
            <form className="">
                <label>Topic: </label>
                <input type="text" placeholder="Sports,Gaming,Music, e.t.c"></input>

                <label>Parent Category: </label>
                <input type='text' placeholder="Subtopics"></input>

                <label>Description: </label>
                <input type="text" placeholder="Description of the topic..."></input>
                

            </form>
        </div>
    )
}