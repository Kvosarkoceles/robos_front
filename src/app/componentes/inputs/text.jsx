import { Input } from "@nextui-org/input";

export const Text = ({ name, id, value, onChange, placeholder, className,label }) => {
 
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
                    label={label}
            />
        </>
    );
}