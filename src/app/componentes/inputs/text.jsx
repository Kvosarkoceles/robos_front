import { Input } from "@nextui-org/input";

export const Text = ({ type = "text", name, id, value, onChange, placeholder, className }) => {
 
    return (
        <>
            <Input
                isRequired
                type='text'
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
            />
        </>
    );
}