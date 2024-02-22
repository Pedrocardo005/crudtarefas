import { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";

export function QuadroForm() {
    return (
        <div className="flex">
            <Input name="titulo" type="text" placeholder="Título" />
            <Input name="dia-semana" type="date" />
            <Input name="hora" type="time" min={"08:00"} max={"22:00"} />
        </div>
    );
}