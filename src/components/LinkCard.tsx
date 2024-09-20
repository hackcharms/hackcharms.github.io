import Button from "./core/button";

export default function LinkCard({ icon, name, to }: { name: string, to: string, icon: string }) {
    return <Button variant="link" to={to}>
        <div className="flex flex-col items-center justify-center">
            <img src={icon} alt={name} className="size-12" />
            <h4>{name}</h4>
        </div>
    </Button>

}