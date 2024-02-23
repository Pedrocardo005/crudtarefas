import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function QuadroForm() {
    return (
        <div className="flex flex-row-reverse">
            <div className="flex w-10/12 justify-end">
                <form className="flex w-full gap-4">
                    <div className="w-full">
                        <Input name="titulo" type="text" placeholder="Título" />
                        <Textarea />
                    </div>
                    
                    <Input name="dia-semana" type="date" className="w-full" />
                    <Input name="hora" type="time" min={"08:00"} max={"22:00"} className="w-full" />
                    <Button className="mr-3">
                        Enviar
                    </Button>
                </form>
            </div>
        </div>
    );
}