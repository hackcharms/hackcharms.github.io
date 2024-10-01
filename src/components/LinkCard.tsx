import Button from "./core/button";

export default function LinkCard({ icon, name, to }: { name: string, to: string, icon: string }) {
    return <Button variant="link" to={to}>
        <div className="flex flex-col items-center justify-center gap-2">
            <img src={icon} alt={name} className="size-12 rounded" />
            <h4 className="w-full truncate">{name}</h4>
        </div>
    </Button>

}