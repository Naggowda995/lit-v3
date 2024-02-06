import "./SideBar.css"

export default function SideBar(){
    return(
        <div className="sidebar">
            <ul>
                <li className="list_font">Time Tracker</li>
                <li className="list_font">Employee Profile</li>
                <li className="list_font">Raise Ticket</li>
                <li className="list_font">Time Sheet</li>
                <li className="list_font">Settings</li>
                <li className="list_font">Support</li>
            </ul>

        </div>
    )
}