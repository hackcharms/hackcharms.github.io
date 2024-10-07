export default function LinkCard({ icon, name, }: { name: string, icon: string }) {
    return <div className="flex flex-col items-center justify-center gap-2 p-2">
        <img src={icon} alt={name} className="size-12 rounded" />
        <h4 className="w-full truncate">{name}</h4>
    </div>

}