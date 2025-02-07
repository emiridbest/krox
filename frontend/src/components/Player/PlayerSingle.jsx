const PlayerSingle = () => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpeg" alt="soccer Image"/>
                        <span className="card-title">{props.player.fistName} {props.player.lastName}</span>
                    </div>
                    <div className="card-content">
                    <p>Phone: {props.player.phone} - Email:| {props.player.email}</p>
                    <p>Strength: {props.player.strength} - Endurance: {props.player.endurance}</p>
                    </div>
                    <div className="card-action">
                        <a href="#!">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerSingle