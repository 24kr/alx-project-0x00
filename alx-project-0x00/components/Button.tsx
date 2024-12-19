import Pill from "./Pill";
const Buttons:React.FC=() => {

    return(
        <div className="flex justify-center gap-4">
            < button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm"><Pill title="Book Now"/></button>
            <button className="text-blue-500 px-4 py-2 rounded-full text-sm"><Pill title="Learn More"/></button>
        </div>
    )

}
    export default Buttons;