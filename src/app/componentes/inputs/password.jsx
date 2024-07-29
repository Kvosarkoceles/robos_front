

'use client'
import { Input } from "@nextui-org/input";
import { EyeFilledIcon } from "@/app/componentes/inputpassoword/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/componentes/inputpassoword/EyeSlashFilledIcon";
import React from "react";

export const Password = ({ name, id, value, onChange, placeholder, className }) => {

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <Input
                label="Password"
                name = {name}
                variant="bordered"
                placeholder={placeholder}
                id="password"
             
                value={value}
                onChange={(e) => setPassword(e.target.value)}
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}

                className="max-w-xs"

            />
        </>
    );
}