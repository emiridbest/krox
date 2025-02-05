import { addNewPlayer, 
        getPlayers, 
        getPlayerWithId,
        updatePlayer,
        deletePlayer
    } from "../controllers/playerControllers";

const routes = (app) => {
    app.route('/players')
    .get(getPlayers) // GET endpoint
    .post(addNewPlayer) // POST endpoint

    app.route('/player/:PlayerId')
    .get(getPlayerWithId) // Get specific player
    .put(updatePlayer) // PUT endpoint
    .delete(deletePlayer) // DELETE endpoint
        
}

export default routes;